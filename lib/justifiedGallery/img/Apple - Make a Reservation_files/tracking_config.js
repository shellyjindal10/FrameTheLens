trackingConfig = {
	Prefix : "concierge",   
	
	Rule_Lookup : {
		TECHSUPPORT: "genius bar",
		TRAINING: "onetoone training",
		WORKSHOP: "workshop",
		SHOPPING: "personal shopping",
		BIZ_CONSULT: "business consultation",
		O2OWORKSHOP: "onetoone workshop",
		O2OPERSONALPROJECT: "onetoone personal project",
		PROLAB: "prolab",
		ONETOONE: "onetoone group workshop",
		YOUTH: "youth",
		CAMP: "camp",
		FIELDTRIP: "field trip",
		UNKNOWN: "unknown"
	}, 
	
	ServiceType_Lookup : {
		"4d": "mac",
		"5c": "mac", 
		"70": "mac",
		"6f": "ipod",
		"54": "ipod",
 	   	"71": "iphone",
	   	"9e": "iphone", 
		"1" : "AppleTV",
		"75" : "backup consultation",
		"15" : "consultation",  
		"4e" : "tune up",  
		"UNKNOWN": "none"
	},
	
	Env_Lookup : {
		"web": "web",
		"kiosk": "kiosk",
		"o2oportal": "o2oportal"
	},

	Page_Lookup : {  
		RulePickerPage: " rule picker",
		TopicPickerPage: "topic picker",
		TimePickerPage: "time picker",
		WorkshopBrowserPage: "workshop browser",
		ReservationConfirmationPage: "reservation confirmation",

		AppleIDSignInPage: "appleid signin",
		CreateAppleIDPage: "create appleid",
		AddMembershipPage: "add membership",
		AdditionalInformationPage: "additional information",
		ReviewAppleIDPage: "review appleid",
		CreateAppleIDSuccessPage: "create appleid success",
		MakeAReservationPage: " make a reservation",

		ReservationHistoryPage: "reservation history",
		MyProfilePage: "my profile",

		PersonalSetupStep1: "personalsetup step1",
		PersonalSetupStep2: "personalsetup step2",
		PersonalSetupStep3: "personalsetup step3",
		PersonalSetupStep4: "personalsetup step4",
		PSConfirmationPage: "personalsetup confirmation",
		QuickDropPage: "quickdrop",
		QuickDropConfirmationPage: "quickdrop confirmation",

		ProLabsPage: "prolabs",
		CampPage: "camp",
		FieldTripStep1Page: "fieldtrip step1",
		FieldTripStep2Page: "fieldtrip step2",
		YouthWorkshopPage: "youth workshop",
		GroupWorkshopConfirmationPage: "group workshop confirmation",

		ReservationErrorPage: "reservation error",
		KioskiForgotPage: "kiosk iforgot",
		InvalidBrowserPage: "invalid browser",
		ErrorPage: "error",
			
		ConciergeSplit: "CAS split page"
	},     

	Link_Lookup : {
		timepicker_next: "right arrow",
		timepicker_previous: "left arrow",
		timepicker_openDropDown: "check availability",
		timepicker_mapOverlayAction: "map",
		reservationConfirmation_commentsOverlayAction: "comment",  
		reservationConfirmation_mapOverlayAction: "map",  
		worshopbrowser_toggleMoreStores: "check availability",
		worshopbrowser_mapOverlayAction: "map",
		worshopbrowser_tip_isShown: "i button",  
		cancelReservation_isShown: "cancel reservation",
		UNKNOWN: "unknown"
	},
	
	Account_Lookup: {
		"en": "appleglobal,appleretail,appleusconcierge",
		"en_us": "appleglobal,appleretail,appleusconcierge",
		"en_gb": "appleukglobal,appleukretail,appleukconcierge",
		"en_ca": "applecaglobal,applecaretail,applecaconcierge",
		"fr_ca": "applecaglobal,applecaretail,applecaconcierge",
		"fr_fr": "applefrglobal,applefrretail,applefrconcierge",
		"it_it": "appleitglobal,appleitretail,appleitconcierge",
		"fr_ch": "applecrglobal,applecrretail,applecrconcierge",
		"de_ch": "appleceglobal,appleceretail,applececoncierge",
		"de": "appledeglobal,applederetail,appledeconcierge",
		"de_de": "appledeglobal,applederetail,appledeconcierge",
		"zh_cn": "applecnglobal,applecnretail,applecnconcierge",
		"ja_jp": "applejpglobal,applejpretail,applejpconcierge",
		"en_au": "appleauglobal,appleauretail,appleauconcierge",
		"test": "devapple"
	},
	
	Channel_Lookup: {
		"en": "www.us.retail.concierge",
		"en_us": "www.us.retail.concierge",
		"en_gb": "www.uk.retail.concierge",
		"en_ca": "www.ca.retail.concierge",
		"fr_ca": "www.ca.fr.retail.concierge",
		"fr_fr": "www.fr.retail.concierge",
		"it_it": "www.it.retail.concierge",
		"fr_ch": "www.cr.retail.concierge",
		"de_ch": "www.ce.retail.concierge",
		"de": "www.de.retail.concierge",
		"de_de": "www.de.retail.concierge",
		"zh_cn": "www.cn.retail.concierge",
		"ja_jp": "www.jp.retail.concierge",
		"en_au": "www.au.retail.concierge",
		"test": "www.us.retail.concierge"
	},
	
	Account_Lookup_Replacement: {
		"en": "appleglobal,appleretail,appleusconcierge,applesupport",
		"en_us": "appleglobal,appleretail,appleusconcierge,applesupport",
		"en_gb": "appleukglobal,appleukretail,appleukconcierge,appleuksupport",
		"en_ca": "applecaglobal,applecaretail,applecaconcierge,applecasupport",
		"fr_ca": "applecaglobal,applecaretail,applecaconcierge,applecasupport",
		"fr_fr": "applefrglobal,applefrretail,applefrconcierge,applefrsupport",
		"it_it": "appleitglobal,appleitretail,appleitconcierge,appleitsupport",
		"fr_ch": "applecrglobal,applecrretail,applecrconcierge,applecrsupport",
		"de_ch": "appleceglobal,appleceretail,applececoncierge,applecesupport",
		"de": "appledeglobal,applederetail,appledeconcierge,appledesupport",
		"de_de": "appledeglobal,applederetail,appledeconcierge,appledesupport",
		"zh_cn": "applecnglobal,applecnretail,applecnconcierge,applecnsupport",
		"ja_jp": "applejpglobal,applejpretail,applejpconcierge,applejpsupport",
		"en_au": "appleauglobal,appleauretail,appleauconcierge,appleausupport",
		"test": "applesupport,devapple"
	}
	
};