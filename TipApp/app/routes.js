
'use strict';

var React = require('react-native');
var {
  Text,
  TouchableOpacity,
  View,
} = React;

var SplashScreen = require('./views/SplashScreen');
var MainView     = require('./views/MainView');
var FormScreen   = require('./views/FormScreen');
var LoginPage    = require('./views/legacies/LoginPage');
var PersonPage   = require('./views/legacies/PersonPage');
var MainPage     = require('./views/legacies/MainPage');
var NoNavigatorPage = require('./views/NoNavigatorPage');

class Routes {

  static renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashScreen') {
      return (
        <SplashScreen
          navigator={navigator} />
      );
    }
    if (routeId === 'MainView') {
      return (
        <MainView
          navigator={navigator} />
      );
    }
    if (routeId === 'FormScreen') {
      return (
        <FormScreen
          navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage
          navigator={navigator} />
      );
    }
    if (routeId === 'LoginPage') {
      return (
        <LoginPage
          navigator={navigator} />
      );
    }
    if (routeId === 'PersonPage') {
      return (
        <PersonPage
          navigator={navigator} />
      );
    }
    if (routeId === 'NoNavigatorPage') {
      return (
        <NoNavigatorPage
            navigator={navigator} />
      );
    }
    return Routes.noRoute(navigator);
  }

  static noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>请在 app/routes.js 的 renderScene 中配置这个页面的路由</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

module.exports = Routes