//
//  Pushwoosh.m
//  Pushwoosh React Native Plugin
//  (c) Pushwoosh 2016
//

#import "PushwooshGeozones.h"
#import "PWGeozonesManager.h"

#import <React/RCTUtils.h>
#import <React/RCTBridge.h>

@implementation PushwooshGeozones

#pragma mark - Pushwoosh RCTBridgeModule

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue {
    return dispatch_get_main_queue();
}

- (NSArray<NSString *> *)supportedEvents {
    return @[ @"locationTrackingStarted" ];
}

RCT_EXPORT_METHOD(startLocationTracking) {
	[[PWGeozonesManager sharedManager] startLocationTracking];
}

RCT_EXPORT_METHOD(stopLocationTracking) {
	[[PWGeozonesManager sharedManager] stopLocationTracking];
}

@end

