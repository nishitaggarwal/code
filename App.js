import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { AppDrawerNavigator } from './Components/AppDrawerNavigator';
import { AppTabNavigator } from './Components/AppTabNavigator';

import ProvisionScreen from './screens/ProvisionScreen';
import { AdminAppStackNavigator } from './Components/AdminAppStackNavigator';

import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  SplashScreen: { screen: SplashScreen }, 
  SignInScreen: {screen: SignInScreen,}, 
  SignUpScreen:{screen:SignUpScreen},

  Drawer: { screen: AppDrawerNavigator },
  BottomTab: { screen: AppTabNavigator },
  ProvisionScreen: { screen: ProvisionScreen },
  ProvisionTab: { screen: AdminAppStackNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
                  