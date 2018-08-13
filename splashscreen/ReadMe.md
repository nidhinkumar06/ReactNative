Example:
> https://github.com/crazycodeboy/react-native-splash-screen

Installation Link:

> npm i react-native-splash-screen --save

Automatic installation

> react-native link

Once installed we need to add splashscreen.show in
> main/src/app/MainActivity.java

Add this in getMainComponentName

 > SplashScreen.show(this);

 Create launch_screen.xml file in res/layout (if there is no folder create a new one)

 ```
 <?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
   android:orientation="vertical" android:layout_width="match_parent"
   android:layout_height="match_parent"
   android:background="@drawable/launch_screen">
</LinearLayout>
 ```

 Add the images in mipmap or in drawable and change the code accoridingly

 Once done

 Add the

 > SplashScreen.hide () in componentDidMount() of any file
 
