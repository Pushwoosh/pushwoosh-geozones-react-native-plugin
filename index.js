'use strict';

import { NativeModules } from 'react-native';

const PushwooshGeozonesModule = NativeModules.PushwooshGeozones;

//Class: PushNotification
//Use `PushNotification` to register device for push notifications on Pushwoosh and customize notification appearance.
//
//Example:
//(start code)
//DeviceEventEmitter.addListener('pushOpened', (e: Event) => {
//  console.warn("pushOpened: " + JSON.stringify(e));
//  alert(JSON.stringify(e));
//});
//
//const Pushwoosh = require('pushwoosh-react-native-plugin');
//
//Pushwoosh.init({ "pw_appid" : "XXXX-XXXX", "project_number" : "XXXXXXXXXXXXX" });
//
//Pushwoosh.register(
//  (token) => {
//    console.warn("Registered for pushes: " + token);
//  },
//  (error) => {
//    console.warn("Failed to register: " + error);
//  }
//);
//(end)
class PushwooshGeozones {

	//Function: startLocationTracking
	//[android, ios, wp8, windows] Starts geolocation based push notifications. You need to configure Geozones in Pushwoosh Control panel.
	//
	//Parameters:
	// "success" - success callback
	// "fail" - error callback
	//
	startLocationTracking() {
		PushwooshGeozonesModule.startLocationTracking();
	}

	//Function: stopLocationTracking
	//[android, ios, wp8, windows] Stops geolocation based push notifications
	//
	//Parameters:
	// "success" - success callback
	// "fail" - error callback
	//
	stopLocationTracking() {
		PushwooshGeozonesModule.stopLocationTracking();
	}

}

module.exports = new PushwooshGeozones();
