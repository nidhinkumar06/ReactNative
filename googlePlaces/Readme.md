About:

It opens a modal and we can type the location queries

Installation of Google place plugin:

>npm i react-native-google-places --save
react-native link react-native-google-places

Once added need to get the api key for google places from google api

> https://console.developers.google.com/flows/enableapi?apiid=placesandroid&reusekey=true


Once the key is obtained it should be added to the android & ios manually for android we need to add the key in AndroidManifest do as follows:

>     <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<meta-data
   android:name="com.google.android.geo.API_KEY"
   android:value="AIzaSyDxw3Cubl53Qb6WsRPRy8oysYH6-ObQ4VQ"/>

Error Faced:
When tried to build the build was failed with an Error

> Conflict with the dependency com-android-devsupport

Fix / Solution:

Added the below code in node_modules -> react-native-google-places -> build.gradle

```
configurations.all {
  def supportLibVersion   = rootProject.hasProperty('supportLibVersion') ? rootProject.supportLibVersion : DEFAULT_SUPPORT_LIB_VERSION
	resolutionStrategy.force "com.android.support:support-v4:$supportLibVersion"
}
```

Things Not worked in the api: getCurrentLocation doesn't works
