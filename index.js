'use strict';

import { NativeModules } from 'react-native';

const PushwooshGeozonesModule = NativeModules.PushwooshGeozones;

class PushwooshGeozones {

	//Function: startLocationTracking
	//[android, ios] Starts geolocation based push notifications. You need to configure Geozones in Pushwoosh Control panel.
	//
	startLocationTracking() {
		PushwooshGeozonesModule.startLocationTracking();
	}

	//Function: stopLocationTracking
	//[android, ios] Stops geolocation based push notifications
	//
	stopLocationTracking() {
		PushwooshGeozonesModule.stopLocationTracking();
	}

}

module.exports = new PushwooshGeozones();
