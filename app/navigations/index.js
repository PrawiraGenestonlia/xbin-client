
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { CheckAuth } from '../screens';
import MainTabNavigator from './navigator.navigations';

const App = createAppContainer(createSwitchNavigator({
  Main: MainTabNavigator,
  CheckAuth: CheckAuth,
  Login: MainTabNavigator,
},
  {
    initialRouteName: 'CheckAuth',
  }));

export default () => {
  let theme = useColorScheme();
  return (
    <AppearanceProvider>
      <App theme={theme} />
    </AppearanceProvider>
  );
};
