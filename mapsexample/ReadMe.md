Check here for installation step:
> https://github.com/react-community/react-native-maps/blob/master/docs/installation.md

STEP1:Installation of GoogleMap

> npm install react-native-maps --save

STEP2: Get the GoogleMap API
STEP3: Add the google map implementation in
> android/app/build.gradle
  implementation project(':react-native-maps')

STEP4: Then in main build.gradle add the following in ext {}
> androidMapsUtilsVersion = "0.5+"

STEP5: If you do not have project-wide properties defined and have a different play-services version than the one included in this library, use the following instead (switch 10.0.1 for the desired version):

```
...
dependencies {
   ...
   implementation(project(':react-native-maps')){
       exclude group: 'com.google.android.gms', module: 'play-services-base'
       exclude group: 'com.google.android.gms', module: 'play-services-maps'
   }
   implementation 'com.google.android.gms:play-services-base:10.0.1'
   implementation 'com.google.android.gms:play-services-maps:10.0.1'
}
```

STEP6: In your android/settings.gradle add

```
include ':react-native-maps'
project(':react-native-maps').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-maps/lib/android')
```

STEP7: Add the google map api in androidManifest.xml

```
<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
</application>
```

STEP8: Add the mapsPackage in MainApplication.Java

```
import com.airbnb.android.react.maps.MapsPackage;
...
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new MapsPackage()
        );
    }
```

Installation Error:

If error like below faced while running the react native project
check the error

```
error while run android in(Could not find method compileOnly() for arguments [com.facebook.react:react-native:+] on object of type org.gradle.api.internal.artifacts.dsl.dependencies.DefaultDependencyHandler.)
```

Solution:

Try to upgrade the gradle by following the below blog link

> https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395
