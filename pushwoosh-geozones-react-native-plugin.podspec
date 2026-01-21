Pod::Spec.new do |s|
  s.name             = "pushwoosh-geozones-react-native-plugin"
  s.version          = "1.2.0"
  s.summary          = "React Native Pushwoosh Geozones module"
  s.requires_arc = true
  s.author       = 'Pushwoosh'
  s.license      = 'MIT'
  s.homepage     = 'https://github.com/Pushwoosh/pushwoosh-geozones-react-native-plugin'
  s.source       = { :git => "https://github.com/Pushwoosh/pushwoosh-geozones-react-native-plugin.git" }
  s.source_files = "src/ios/PushwooshGeozonesPlugin/PushwooshGeozones.{h,m}"
  s.platform     = :ios, "11.0"
  s.xcconfig = {
    "HEADER_SEARCH_PATHS" => "${PODS_ROOT}/Headers/Public/React"
  }
  s.static_framework = true

  s.dependency 'React'
  s.dependency 'PushwooshXCFramework/Geozones'
end