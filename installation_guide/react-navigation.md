# react-navigation for RN 0.60+

1. npm install react-navigation
2. npm install react-native-reanimated react-native-gesture-handler react-native-screens
3. react-native link react-native-gesture-handler
   react-native link react-native-reanimated
4. cd ios; pod install; cd ..
5. android/app/build.gradle (react-native-screens)
    implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
    implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
6. Done