ExtraDimensions calculation:
==============================
Plugin:
----------
> npm install react-native-extra-dimensions-android --save

Github Link:
--------------
>https://github.com/Sunhat/react-native-extra-dimensions-android

To check:
----------
Once it is installed we need to check in two places
1.ReactNative Link
> react-native Link

2.Register module
---------------------
>android/app/src/main/java/com/YOUR-PROJECT-NAME/MainApplication.java
new ExtraDimensionsPackage()  // <--- add here


Working:
-----------
> Import ExtraDimensions in App.js

Supported dimensions are:
--------------------------
> REAL_WINDOW_HEIGHT - Actual height of screen including system decor elements
  REAL_WINDOW_WIDTH - Actual width of screen including system decor elements
  STATUS_BAR_HEIGHT - Height of the status bar
  SOFT_MENU_BAR_HEIGHT - Height of the soft menu bar (supported on most new Android devices)
  SMART_BAR_HEIGHT - Height of the MeiZu's device smart bar

Bugs Found:
------------
> Since the plugin doesn't support the latest version of SDK it has been changed to latest version
