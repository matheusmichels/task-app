package com.todoapp;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.facebook.react.ReactPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import com.horcrux.svg.SvgPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "TodoApp";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected ReactRootView createRootView() {
          return new RNGestureHandlerEnabledRootView(MainActivity.this);
        }
      };
    }

    public List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new SvgPackage()
      );
    }
}
