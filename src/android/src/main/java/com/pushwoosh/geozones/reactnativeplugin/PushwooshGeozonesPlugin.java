package com.pushwoosh.geozones.reactnativeplugin;

import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.pushwoosh.location.PushwooshLocation;


public class PushwooshGeozonesPlugin extends ReactContextBaseJavaModule implements LifecycleEventListener {

    public PushwooshGeozonesPlugin(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addLifecycleEventListener(this);
    }

	///
	/// Module API
	///

	@Override
	public String getName() {
		return "PushwooshGeozones";
	}

	@ReactMethod
	public void startLocationTracking() {
		PushwooshLocation.startLocationTracking();
	}

	@ReactMethod
	public void stopLocationTracking() {
		PushwooshLocation.stopLocationTracking();
	}

	///
	/// LifecycleEventListener callbacks
	///

	@Override
	public void onHostResume() {

	}

	@Override
	public void onHostPause() {

	}

	@Override
	public void onHostDestroy() {

	}
}
