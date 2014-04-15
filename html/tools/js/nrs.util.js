var NRS = (function(NRS, $, undefined) {
	var LOCALE_DATE_FORMATS = {
		"ar-SA": "dd/MM/yy",
		"bg-BG": "dd.M.yyyy",
		"ca-ES": "dd/MM/yyyy",
		"zh-TW": "yyyy/M/d",
		"cs-CZ": "d.M.yyyy",
		"da-DK": "dd-MM-yyyy",
		"de-DE": "dd.MM.yyyy",
		"el-GR": "d/M/yyyy",
		"en-US": "M/d/yyyy",
		"fi-FI": "d.M.yyyy",
		"fr-FR": "dd/MM/yyyy",
		"he-IL": "dd/MM/yyyy",
		"hu-HU": "yyyy. MM. dd.",
		"is-IS": "d.M.yyyy",
		"it-IT": "dd/MM/yyyy",
		"ja-JP": "yyyy/MM/dd",
		"ko-KR": "yyyy-MM-dd",
		"nl-NL": "d-M-yyyy",
		"nb-NO": "dd.MM.yyyy",
		"pl-PL": "yyyy-MM-dd",
		"pt-BR": "d/M/yyyy",
		"ro-RO": "dd.MM.yyyy",
		"ru-RU": "dd.MM.yyyy",
		"hr-HR": "d.M.yyyy",
		"sk-SK": "d. M. yyyy",
		"sq-AL": "yyyy-MM-dd",
		"sv-SE": "yyyy-MM-dd",
		"th-TH": "d/M/yyyy",
		"tr-TR": "dd.MM.yyyy",
		"ur-PK": "dd/MM/yyyy",
		"id-ID": "dd/MM/yyyy",
		"uk-UA": "dd.MM.yyyy",
		"be-BY": "dd.MM.yyyy",
		"sl-SI": "d.M.yyyy",
		"et-EE": "d.MM.yyyy",
		"lv-LV": "yyyy.MM.dd.",
		"lt-LT": "yyyy.MM.dd",
		"fa-IR": "MM/dd/yyyy",
		"vi-VN": "dd/MM/yyyy",
		"hy-AM": "dd.MM.yyyy",
		"az-Latn-AZ": "dd.MM.yyyy",
		"eu-ES": "yyyy/MM/dd",
		"mk-MK": "dd.MM.yyyy",
		"af-ZA": "yyyy/MM/dd",
		"ka-GE": "dd.MM.yyyy",
		"fo-FO": "dd-MM-yyyy",
		"hi-IN": "dd-MM-yyyy",
		"ms-MY": "dd/MM/yyyy",
		"kk-KZ": "dd.MM.yyyy",
		"ky-KG": "dd.MM.yy",
		"sw-KE": "M/d/yyyy",
		"uz-Latn-UZ": "dd/MM yyyy",
		"tt-RU": "dd.MM.yyyy",
		"pa-IN": "dd-MM-yy",
		"gu-IN": "dd-MM-yy",
		"ta-IN": "dd-MM-yyyy",
		"te-IN": "dd-MM-yy",
		"kn-IN": "dd-MM-yy",
		"mr-IN": "dd-MM-yyyy",
		"sa-IN": "dd-MM-yyyy",
		"mn-MN": "yy.MM.dd",
		"gl-ES": "dd/MM/yy",
		"kok-IN": "dd-MM-yyyy",
		"syr-SY": "dd/MM/yyyy",
		"dv-MV": "dd/MM/yy",
		"ar-IQ": "dd/MM/yyyy",
		"zh-CN": "yyyy/M/d",
		"de-CH": "dd.MM.yyyy",
		"en-GB": "dd/MM/yyyy",
		"es-MX": "dd/MM/yyyy",
		"fr-BE": "d/MM/yyyy",
		"it-CH": "dd.MM.yyyy",
		"nl-BE": "d/MM/yyyy",
		"nn-NO": "dd.MM.yyyy",
		"pt-PT": "dd-MM-yyyy",
		"sr-Latn-CS": "d.M.yyyy",
		"sv-FI": "d.M.yyyy",
		"az-Cyrl-AZ": "dd.MM.yyyy",
		"ms-BN": "dd/MM/yyyy",
		"uz-Cyrl-UZ": "dd.MM.yyyy",
		"ar-EG": "dd/MM/yyyy",
		"zh-HK": "d/M/yyyy",
		"de-AT": "dd.MM.yyyy",
		"en-AU": "d/MM/yyyy",
		"es-ES": "dd/MM/yyyy",
		"fr-CA": "yyyy-MM-dd",
		"sr-Cyrl-CS": "d.M.yyyy",
		"ar-LY": "dd/MM/yyyy",
		"zh-SG": "d/M/yyyy",
		"de-LU": "dd.MM.yyyy",
		"en-CA": "dd/MM/yyyy",
		"es-GT": "dd/MM/yyyy",
		"fr-CH": "dd.MM.yyyy",
		"ar-DZ": "dd-MM-yyyy",
		"zh-MO": "d/M/yyyy",
		"de-LI": "dd.MM.yyyy",
		"en-NZ": "d/MM/yyyy",
		"es-CR": "dd/MM/yyyy",
		"fr-LU": "dd/MM/yyyy",
		"ar-MA": "dd-MM-yyyy",
		"en-IE": "dd/MM/yyyy",
		"es-PA": "MM/dd/yyyy",
		"fr-MC": "dd/MM/yyyy",
		"ar-TN": "dd-MM-yyyy",
		"en-ZA": "yyyy/MM/dd",
		"es-DO": "dd/MM/yyyy",
		"ar-OM": "dd/MM/yyyy",
		"en-JM": "dd/MM/yyyy",
		"es-VE": "dd/MM/yyyy",
		"ar-YE": "dd/MM/yyyy",
		"en-029": "MM/dd/yyyy",
		"es-CO": "dd/MM/yyyy",
		"ar-SY": "dd/MM/yyyy",
		"en-BZ": "dd/MM/yyyy",
		"es-PE": "dd/MM/yyyy",
		"ar-JO": "dd/MM/yyyy",
		"en-TT": "dd/MM/yyyy",
		"es-AR": "dd/MM/yyyy",
		"ar-LB": "dd/MM/yyyy",
		"en-ZW": "M/d/yyyy",
		"es-EC": "dd/MM/yyyy",
		"ar-KW": "dd/MM/yyyy",
		"en-PH": "M/d/yyyy",
		"es-CL": "dd-MM-yyyy",
		"ar-AE": "dd/MM/yyyy",
		"es-UY": "dd/MM/yyyy",
		"ar-BH": "dd/MM/yyyy",
		"es-PY": "dd/MM/yyyy",
		"ar-QA": "dd/MM/yyyy",
		"es-BO": "dd/MM/yyyy",
		"es-SV": "dd/MM/yyyy",
		"es-HN": "dd/MM/yyyy",
		"es-NI": "dd/MM/yyyy",
		"es-PR": "dd/MM/yyyy",
		"am-ET": "d/M/yyyy",
		"tzm-Latn-DZ": "dd-MM-yyyy",
		"iu-Latn-CA": "d/MM/yyyy",
		"sma-NO": "dd.MM.yyyy",
		"mn-Mong-CN": "yyyy/M/d",
		"gd-GB": "dd/MM/yyyy",
		"en-MY": "d/M/yyyy",
		"prs-AF": "dd/MM/yy",
		"bn-BD": "dd-MM-yy",
		"wo-SN": "dd/MM/yyyy",
		"rw-RW": "M/d/yyyy",
		"qut-GT": "dd/MM/yyyy",
		"sah-RU": "MM.dd.yyyy",
		"gsw-FR": "dd/MM/yyyy",
		"co-FR": "dd/MM/yyyy",
		"oc-FR": "dd/MM/yyyy",
		"mi-NZ": "dd/MM/yyyy",
		"ga-IE": "dd/MM/yyyy",
		"se-SE": "yyyy-MM-dd",
		"br-FR": "dd/MM/yyyy",
		"smn-FI": "d.M.yyyy",
		"moh-CA": "M/d/yyyy",
		"arn-CL": "dd-MM-yyyy",
		"ii-CN": "yyyy/M/d",
		"dsb-DE": "d. M. yyyy",
		"ig-NG": "d/M/yyyy",
		"kl-GL": "dd-MM-yyyy",
		"lb-LU": "dd/MM/yyyy",
		"ba-RU": "dd.MM.yy",
		"nso-ZA": "yyyy/MM/dd",
		"quz-BO": "dd/MM/yyyy",
		"yo-NG": "d/M/yyyy",
		"ha-Latn-NG": "d/M/yyyy",
		"fil-PH": "M/d/yyyy",
		"ps-AF": "dd/MM/yy",
		"fy-NL": "d-M-yyyy",
		"ne-NP": "M/d/yyyy",
		"se-NO": "dd.MM.yyyy",
		"iu-Cans-CA": "d/M/yyyy",
		"sr-Latn-RS": "d.M.yyyy",
		"si-LK": "yyyy-MM-dd",
		"sr-Cyrl-RS": "d.M.yyyy",
		"lo-LA": "dd/MM/yyyy",
		"km-KH": "yyyy-MM-dd",
		"cy-GB": "dd/MM/yyyy",
		"bo-CN": "yyyy/M/d",
		"sms-FI": "d.M.yyyy",
		"as-IN": "dd-MM-yyyy",
		"ml-IN": "dd-MM-yy",
		"en-IN": "dd-MM-yyyy",
		"or-IN": "dd-MM-yy",
		"bn-IN": "dd-MM-yy",
		"tk-TM": "dd.MM.yy",
		"bs-Latn-BA": "d.M.yyyy",
		"mt-MT": "dd/MM/yyyy",
		"sr-Cyrl-ME": "d.M.yyyy",
		"se-FI": "d.M.yyyy",
		"zu-ZA": "yyyy/MM/dd",
		"xh-ZA": "yyyy/MM/dd",
		"tn-ZA": "yyyy/MM/dd",
		"hsb-DE": "d. M. yyyy",
		"bs-Cyrl-BA": "d.M.yyyy",
		"tg-Cyrl-TJ": "dd.MM.yy",
		"sr-Latn-BA": "d.M.yyyy",
		"smj-NO": "dd.MM.yyyy",
		"rm-CH": "dd/MM/yyyy",
		"smj-SE": "yyyy-MM-dd",
		"quz-EC": "dd/MM/yyyy",
		"quz-PE": "dd/MM/yyyy",
		"hr-BA": "d.M.yyyy.",
		"sr-Latn-ME": "d.M.yyyy",
		"sma-SE": "yyyy-MM-dd",
		"en-SG": "d/M/yyyy",
		"ug-CN": "yyyy-M-d",
		"sr-Cyrl-BA": "d.M.yyyy",
		"es-US": "M/d/yyyy"
	};

	var LANG = window.navigator.userLanguage || window.navigator.language;

	var LOCALE_DATE_FORMAT = LOCALE_DATE_FORMATS[LANG] || 'dd/MM/yyyy';

	NRS.formatVolume = function(volume) {
		var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
		if (volume == 0) return '0 B';
		var i = parseInt(Math.floor(Math.log(volume) / Math.log(1024)));

		volume = Math.round(volume / Math.pow(1024, i), 2);
		var size = sizes[i];

		var digits = [],
			formattedVolume = "",
			i;
		do {
			digits[digits.length] = volume % 10;
			volume = Math.floor(volume / 10);
		} while (volume > 0);
		for (i = 0; i < digits.length; i++) {
			if (i > 0 && i % 3 == 0) {
				formattedVolume = "'" + formattedVolume;
			}
			formattedVolume = digits[i] + formattedVolume;
		}
		return formattedVolume + " " + size;
	}

	NRS.formatWeight = function(weight) {
		var digits = [],
			formattedWeight = "",
			i;
		do {
			digits[digits.length] = weight % 10;
			weight = Math.floor(weight / 10);
		} while (weight > 0);
		for (i = 0; i < digits.length; i++) {
			if (i > 0 && i % 3 == 0) {
				formattedWeight = "'" + formattedWeight;
			}
			formattedWeight = digits[i] + formattedWeight;
		}
		return formattedWeight.escapeHTML();
	}

	NRS.calculateOrderTotalNQT = function(quantityQNT, priceNQT, decimals) {
		var totalNXT = NRS.calculateOrderTotal(quantityQNT, priceNQT, decimals);

		return NRS.convertToNQT(totalNXT);
	}

	//what to do if order has more than 8 numbers after . ? (NQT max)
	NRS.calculateOrderTotal = function(quantityQNT, priceNQT, decimals) {
		var total = NRS.convertToNXT(quantityQNT.multiply(priceNQT));

		if (decimals) {
			var dot = total.indexOf(".");
			if (dot != -1) {
				//we converted to NXT, now we need to take into account the QNT decimals...
				total = total.replace(".", "");
				total = total.substring(0, dot - decimals) + "." + total.substring(dot - decimals);
			} else {
				total = total.substring(0, total.length - decimals) + "." + total.substring(total.length - decimals);
			}
		}

		//if only 000 after . then remove.. 33*33=1089.00

		return total;
	}

	NRS.convertToNXT = function(amount, returnAsObject) {
		var negative = "";
		var afterComma = "";

		if (typeof amount != "object") {
			amount = new BigInteger(String(amount));
		}

		var fractionalPart = amount.mod(new BigInteger("100000000")).toString(); //.replace(/0+$/, ""); //todo: check if equal to zero first

		amount = amount.divide(new BigInteger("100000000"));

		if (amount.compareTo(BigInteger.ZERO) < 0) {
			amount = amount.abs();
			negative = "-";
		}

		if (fractionalPart && fractionalPart != "0") {
			afterComma = ".";

			for (var i = fractionalPart.length; i < 8; i++) {
				afterComma += "0";
			}

			afterComma += fractionalPart.replace(/0+$/, "");
		}

		amount = amount.toString();

		if (returnAsObject) {
			return {
				"negative": negative,
				"amount": amount,
				"afterComma": afterComma
			};
		} else {
			return negative + amount + afterComma;
		}
	}

	NRS.convertToNQT = function(currency) {
		currency = currency.toString();

		var parts = currency.split(".");

		var integer = parts[0];

		//no fractional part
		if (parts.length == 1) {
			var fraction = "00000000";
		} else if (parts.length == 2) {
			var fraction = parts[1];
		} else {
			//incorrect input
			return -1;
		}

		for (var i = fraction.length; i < 8; i++) {
			fraction += "0";
		}

		var bigInteger = integer + "" + fraction;

		//in case there's a comma or something else in there.. at this point there should only be numbers
		if (!/^\d+$/.test(bigInteger)) {
			return -1;
		}

		//remove leading zeroes
		bigInteger = bigInteger.replace(/^0+/, "");

		if (bigInteger === "") {
			bigInteger = "0";
		}

		return bigInteger;
	}

	NRS.convertToQNTf = function(quantity, decimals, returnAsObject) {
		if (typeof quantity == "object") {
			quantity = quantity.toString();
		} else {
			quantity = String(quantity);
		}

		if (quantity.length < decimals) {
			for (var i = quantity.length; i < decimals; i++) {
				quantity = "0" + quantity;
			}
		}

		var afterComma = "";

		if (decimals) {
			afterComma = "." + quantity.substring(quantity.length - decimals);
			quantity = quantity.substring(0, quantity.length - decimals);

			if (!quantity) {
				quantity = "0";
			}
		}

		if (returnAsObject) {
			return {
				"amount": quantity,
				"afterComma": afterComma
			};
		} else {
			return quantity + afterComma;
		}
	}

	NRS.convertToQNT = function(quantity, decimals) {
		var parts = quantity.split(".");

		var qnt = parts[0];

		//no fractional part
		if (parts.length == 1) {
			if (decimals) {
				for (var i = 0; i < decimals; i++) {
					qnt += "0";
				}
			}
		} else if (parts.length == 2) {
			var fraction = parts[1];
			if (fraction.length > decimals) {
				return -1;
			} else if (fraction.length < decimals) {
				for (var i = fraction.length; i < decimals; i++) {
					fraction += "0";
				}
			}
			qnt += fraction;
		} else {
			//incorrect input
			return -1;
		}

		//in case there's a comma or something else in there.. at this point there should only be numbers
		if (!/^\d+$/.test(qnt)) {
			return -1;
		}

		//remove leading zeroes
		return qnt.replace(/^0+/, "");
	}

	NRS.format = function(params, no_escaping) {
		var amount = params.amount;

		var digits = amount.split("").reverse();
		var formattedAmount = "";

		for (var i = 0; i < digits.length; i++) {
			if (i > 0 && i % 3 == 0) {
				formattedAmount = "'" + formattedAmount;
			}
			formattedAmount = digits[i] + formattedAmount;
		}

		var output = (params.negative ? params.negative : "") + formattedAmount + params.afterComma;

		if (!no_escaping) {
			output = output.escapeHTML();
		}

		return output;
	}

	NRS.formatQuantity = function(quantity, decimals, no_escaping) {
		return NRS.format(NRS.convertToQNTf(quantity, decimals, true), no_escaping);
	}

	NRS.formatAmount = function(amount, round, no_escaping) {
		if (typeof amount == "undefined") {
			return "0";
		}

		var negative = "";
		var afterComma = "";
		var formattedAmount = "";

		//BigInteger object
		if (typeof amount == "object") {
			var params = NRS.convertToNXT(amount, true);

			negative = params.negative;
			amount = params.amount;
			afterComma = params.afterComma;
		} else {
			//rounding only applies to non-nqt
			if (round) {
				amount = (Math.round(amount * 100) / 100);
			}

			if (amount < 0) {
				amount = Math.abs(amount);
				negative = "-";
			}

			amount = "" + amount;

			if (amount.indexOf(".") !== -1) {
				var afterComma = amount.substr(amount.indexOf("."));
				amount = amount.replace(afterComma, "");
			} else {
				var afterComma = "";
			}
		}

		return NRS.format({
			"negative": negative,
			"amount": amount,
			"afterComma": afterComma
		}, no_escaping);
	}

	NRS.formatTimestamp = function(timestamp, date_only) {
		var date = new Date(Date.UTC(2013, 10, 24, 12, 0, 0, 0) + timestamp * 1000);

		if (!isNaN(date) && typeof(date.getFullYear) == 'function') {
			var d = date.getDate();
			var dd = d < 10 ? '0' + d : d;
			var M = date.getMonth() + 1;
			var MM = M < 10 ? '0' + M : M;
			var yyyy = date.getFullYear();
			var yy = new String(yyyy).substring(2);

			var format = LOCALE_DATE_FORMAT;

			var res = format
				.replace(/dd/g, dd)
				.replace(/d/g, d)
				.replace(/MM/g, MM)
				.replace(/M/g, M)
				.replace(/yyyy/g, yyyy)
				.replace(/yy/g, yy);

			if (!date_only) {
				var hours = date.getHours();
				var minutes = date.getMinutes();
				var seconds = date.getSeconds();

				if (hours < 10) {
					hours = "0" + hours;
				}
				if (minutes < 10) {
					minutes = "0" + minutes;
				}
				if (seconds < 10) {
					seconds = "0" + seconds;
				}
				res += " " + hours + ":" + minutes + ":" + seconds;
			}

			return res;
		} else {
			return date.toLocaleString();
		}
	}

	NRS.formatTime = function(timestamp) {
		var date = new Date(Date.UTC(2013, 10, 24, 12, 0, 0, 0) + timestamp * 1000);

		if (!isNaN(date) && typeof(date.getFullYear) == 'function') {
			var res = "";

			var hours = date.getHours();
			var minutes = date.getMinutes();
			var seconds = date.getSeconds();

			if (hours < 10) {
				hours = "0" + hours;
			}
			if (minutes < 10) {
				minutes = "0" + minutes;
			}
			if (seconds < 10) {
				seconds = "0" + seconds;
			}
			res += " " + hours + ":" + minutes + ":" + seconds;

			return res;
		} else {
			return date.toLocaleString();
		}
	}

	NRS.isPrivateIP = function(ip) {
		if (!/^\d+\.\d+\.\d+\.\d+$/.test(ip)) {
			return false;
		}
		var parts = ip.split('.');
		if (parts[0] === '10' || (parts[0] === '172' && (parseInt(parts[1], 10) >= 16 && parseInt(parts[1], 10) <= 31)) || (parts[0] === '192' && parts[1] === '168')) {
			return true;
		}
		return false;
	}

	NRS.convertToHex16 = function(str) {
		var hex, i;
		var result = "";
		for (i = 0; i < str.length; i++) {
			hex = str.charCodeAt(i).toString(16);
			result += ("000" + hex).slice(-4);
		}

		return result;
	}

	NRS.convertFromHex16 = function(hex) {
		var j;
		var hexes = hex.match(/.{1,4}/g) || [];
		var back = "";
		for (j = 0; j < hexes.length; j++) {
			back += String.fromCharCode(parseInt(hexes[j], 16));
		}

		return back;
	}

	NRS.convertFromHex8 = function(hex) {
		var hex = hex.toString(); //force conversion
		var str = '';
		for (var i = 0; i < hex.length; i += 2)
			str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
		return str;
	}

	NRS.convertToHex8 = function(str) {
		var hex = '';
		for (var i = 0; i < str.length; i++) {
			hex += '' + str.charCodeAt(i).toString(16);
		}
		return hex;
	}

	NRS.generatePublicKey = function(secretPhrase) {
		return nxtCrypto.getPublicKey(converters.stringToHexString(secretPhrase));
	}

	NRS.generateAccountId = function(secretPhrase) {
		return nxtCrypto.getAccountId(secretPhrase);
	}

	NRS.getFormData = function($form) {
		var serialized = $form.serializeArray();
		var data = {};

		for (var s in serialized) {
			data[serialized[s]['name']] = serialized[s]['value']
		}

		return data;
	}

	NRS.getAccountTitle = function(accountId) {
		if (accountId in NRS.contacts) {
			return NRS.contacts[accountId].name.escapeHTML();
		} else if (accountId == NRS.account) {
			return "You";
		} else {
			return NRS.getAccountFormatted(accountId);
		}
	}

	NRS.getAccountFormatted = function(accountId) {
		if (NRS.settings["use_new_address_format"]) {
			var address = new NxtAddress();

			if (address.set(accountId, true)) {
				return address.toString().escapeHTML();
			} else {
				return String(accountId).escapeHTML();
			}
		} else {
			return String(accountId).escapeHTML();
		}
	}

	NRS.setupClipboardFunctionality = function() {
		var elements = "#asset_id_dropdown .dropdown-menu a, #account_id_dropdown .dropdown-menu a";

		if (NRS.isLocalHost) {
			$("#account_id_dropdown li.remote_only").remove();
		}

		var $el = $(elements);

		var clipboard = new ZeroClipboard($el, {
			moviePath: "js/3rdparty/zeroclipboard.swf"
		});


		clipboard.on("dataRequested", function(client, args) {
			switch ($(this).data("type")) {
				case "account_id":
					client.setText(NRS.account);
					break;
				case "new_address_format":
					var address = new NxtAddress();

					if (address.set(NRS.account, true)) {
						client.setText(address.toString());
					} else {
						client.setText(NRS.account);
					}

					break;
				case "message_link":
					client.setText(document.URL.replace(/#.*$/, "") + "#message:" + NRS.account);
					break;
				case "send_link":
					client.setText(document.URL.replace(/#.*$/, "") + "#send:" + NRS.account);
					break;
				case "asset_id":
					client.setText($("#asset_id").text());
					break;
				case "asset_link":
					client.setText(document.URL.replace(/#.*/, "") + "#asset:" + $("#asset_id").text());
					break;
			}
		});

		if ($el.hasClass("dropdown-toggle")) {
			$el.removeClass("dropdown-toggle").data("toggle", "");
			$el.parent().remove(".dropdown-menu");
		}

		clipboard.on("complete", function(client, args) {
			$.growl("Copied to the clipboard successfully.", {
				"type": "success"
			});
		});

		clipboard.on("noflash", function(client, args) {
			$.growl("Your browser doesn't support flash, therefore copy to clipboard functionality will not work.", {
				"type": "danger"
			});
		});
		clipboard.on("wrongflash", function(client, args) {
			$.growl("Your browser flash version is too old. The copy to clipboard functionality needs version 10 or newer.");
		});
	}

	NRS.dataLoadFinished = function($table, fadeIn) {
		var $parent = $table.parent();

		if (fadeIn) {
			$parent.hide();
		}

		$parent.removeClass("data-loading");

		var extra = $parent.data("extra");

		if ($table.find("tbody tr").length > 0) {
			$parent.removeClass("data-empty");
			if ($parent.data("no-padding")) {
				$parent.parent().addClass("no-padding");
			}

			if (extra) {
				$(extra).show();
			}
		} else {
			$parent.addClass("data-empty");
			if ($parent.data("no-padding")) {
				$parent.parent().removeClass("no-padding");
			}
			if (extra) {
				$(extra).hide();
			}
		}

		if (fadeIn) {
			$parent.fadeIn();
		}
	}

	NRS.createInfoTable = function(data, fixed) {
		var rows = "";

		for (var key in data) {
			var value = data[key];

			//no need to mess with input, already done if Formatted is at end of key
			if (/Formatted$/i.test(key)) {
				key = key.replace("Formatted", "");
				value = String(value).escapeHTML();
			} else if (key == "Quantity") {
				if (NRS.useNQT) {
					value = NRS.formatAmount(new BigInteger(value));
				} else {
					value = NRS.formatAmount(value);
				}
			} else if (key == "Price" || key == "Total") {
				if (NRS.useNQT) {
					value = NRS.formatAmount(new BigInteger(value)) + " NXT";
				} else {
					value = NRS.formatAmount(value / 100, true) + " NXT"; //ROUND
				}
			} else {
				value = String(value).escapeHTML();
			}

			rows += "<tr><td style='font-weight:bold;white-space:nowrap" + (fixed ? ";width:150px" : "") + "'>" + String(key).escapeHTML() + ":</td><td style='width:90%;" + (/hash|signature|publicKey/i.test(key) ? "word-break:break-all" : "") + "'>" + value + "</td></tr>";
		}

		return rows;
	}

	return NRS;
}(NRS || {}, jQuery));