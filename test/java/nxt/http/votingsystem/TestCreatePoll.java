package nxt.http.votingsystem;

import nxt.BlockchainTest;
import nxt.Constants;
import nxt.Nxt;
import nxt.http.APICall;
import nxt.util.Logger;
import org.json.simple.JSONObject;
import org.junit.Assert;
import org.junit.Test;

public class TestCreatePoll extends BlockchainTest {

    static String issueCreatePoll(APICall apiCall, boolean shouldFail) {
        JSONObject createPollResponse = apiCall.invoke();
        Logger.logMessage("createPollResponse: " + createPollResponse.toJSONString());

        try {
            String pollId = (String) createPollResponse.get("transaction");

            if(!shouldFail && pollId == null) Assert.fail();

            generateBlock();

            apiCall = new APICall.Builder("getPoll").param("poll", pollId).build();

            JSONObject getPollResponse = apiCall.invoke();
            Logger.logMessage("getPollResponse:" + getPollResponse.toJSONString());
            Assert.assertEquals(pollId, getPollResponse.get("poll"));
            return pollId;
        }catch(Throwable t){
            if(!shouldFail) Assert.fail(t.getMessage());
            return null;
        }
    }

    @Test
    public void createValidPoll() {
        APICall apiCall = new CreatePollBuilder().build();
        issueCreatePoll(apiCall, false);
    }

    @Test
    public void createInvalidPoll() {
        APICall apiCall = new CreatePollBuilder().minBalance(-Constants.ONE_NXT).build();
        issueCreatePoll(apiCall, true);
    }

    public static class CreatePollBuilder extends APICall.Builder {

        public CreatePollBuilder() {
            super("createPoll");
            secretPhrase(secretPhrase1);
            feeNQT(10 * Constants.ONE_NXT);
            param("name", "Test1");
            param("description", "The most cool Beatles guy?");
            param("finishHeight", Nxt.getBlockchain().getHeight() + 100);
            param("votingModel", Constants.VOTING_MODEL_ACCOUNT);
            param("minNumberOfOptions", 1);
            param("maxNumberOfOptions", 2);
            param("minRangeValue", 0);
            param("maxRangeValue", 1);
            param("minBalance", 10 * Constants.ONE_NXT);
            param("minBalanceModel", Constants.VOTING_MINBALANCE_BYBALANCE);
            param("option1", "Ringo");
            param("option2", "Paul");
            param("option2", "John");
        }

        public CreatePollBuilder minBalance(long minBalance) {
            param("minBalance", minBalance);
            return this;
        }
    }
}
