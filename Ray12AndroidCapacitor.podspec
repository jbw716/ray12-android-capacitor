
  Pod::Spec.new do |s|
    s.name = 'Ray12AndroidCapacitor'
    s.version = '0.0.1'
    s.summary = 'Capacitor plugin for the Ray12 SDK for Android.'
    s.license = 'GPL-3.0'
    s.homepage = 'https://github.com/jbw716/ray12-android-capacitor'
    s.author = 'Phillip Jeremiah Weaver'
    s.source = { :git => 'https://github.com/jbw716/ray12-android-capacitor', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end