import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MultiBar, MultiBarToggle } from 'react-native-multibar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  XbinScreen,
  FavoriteScreen,
  GroupScreen,
  SettingScreen,
} from '../screens';

// FontAwesome.loadFont();

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const XbinStack = createStackNavigator(
  { XbinScreen: XbinScreen },
  config
);
XbinStack.path = '';

const FavoriteStack = createStackNavigator(
  { FavoriteScreen: FavoriteScreen },
  config
);
FavoriteStack.path = '';

const GroupStack = createStackNavigator(
  { GroupScreen: GroupScreen },
  config
);
GroupStack.path = '';

const SettingStack = createStackNavigator(
  { SettingScreen: SettingScreen },
  config
);
SettingStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ['XbinTab']: {
    screen: XbinStack,
    navigationOptions: () => ({
      tabBarLabel: 'xBin',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="web" color={tintColor} size={24} />
      ),
    }),
  },
  ['FavoriteTab']: {
    screen: FavoriteStack,
    navigationOptions: () => ({
      tabBarLabel: 'Favorite',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="favorite-border" color={tintColor} size={24} />
      ),
    }),
  },
  MultiBar: {
    screen: () => null,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => (
        <MultiBarToggle
          navigation={navigation}
          actionSize={30}
          routes={[
            {
              // routeName: Routes.OtherScreen,
              color: '#FF8360',
              icon: (
                <MaterialCommunityIcons name="web" color="#333333" size={15} />
              ),
            },
            {
              // routeName: Routes.OtherScreen,
              color: '#E8E288',
              icon: (
                <MaterialIcons name="favorite-border" color="#333333" size={15} />
              ),
            },
            {
              // routeName: Routes.OtherScreen,
              color: '#7DCE82',
              icon: (
                <MaterialIcons name="group" color="#333333" size={15} />
              ),
            },
          ]}
          icon={(
            <FontAwesome
              name="plus"
              color="#FFFFFF"
              size={24}
            />
          )}
        />
      ),
    }),
    params: {
      navigationDisabled: true,
    },
  },
  ['GroupTab']: {
    screen: GroupStack,
    navigationOptions: () => ({
      tabBarLabel: 'Favorite',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="group" color={tintColor} size={24} />
      ),
    }),
  },
  ['SettingTab']: {
    screen: SettingStack,
    navigationOptions: () => ({
      tabBarLabel: 'Favorite',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="settings-outline" color={tintColor} size={24} />
      ),
    }),
  },
}, {
  tabBarComponent: MultiBar,
  tabBarOptions: {
    showLabel: true,
    activeTintColor: '#1CA2FF',
    inactiveTintColor: '#FFFFFF',
    style: {
      backgroundColor: '#404040',
      // height: 85,
    },
    tabStyle: {},
  },
});

tabNavigator.path = '';

export default tabNavigator;
