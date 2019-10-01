import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MultiBar, MultiBarToggle } from 'react-native-multibar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  XbinScreen,
  FavoriteScreen,
  GroupScreen,
  SettingScreen,
} from '../screens';

Icon.loadFont();

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

const tabNavigator = createBottomTabNavigator({
  ['XbinTab']: {
    screen: XbinStack,
    navigationOptions: () => ({
      tabBarLabel: 'xBin',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="github-alt"
          color={tintColor}
          size={24}
        />
      ),
    }),
  },
  ['FavoriteTab']: {
    screen: FavoriteStack,
    navigationOptions: () => ({
      tabBarLabel: 'Favorite',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="star"
          color={tintColor}
          size={24}
        />
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
                <Icon
                  name="rocket"
                  color="#333333"
                  size={15}
                />
              )
            },
            {
              // routeName: Routes.OtherScreen,
              color: '#E8E288',
              icon: (
                <Icon
                  name="dashboard"
                  color="#333333"
                  size={15}
                />
              )
            },
            {
              // routeName: Routes.OtherScreen,
              color: '#7DCE82',
              icon: (
                <Icon
                  name="gears"
                  color="#333333"
                  size={15}
                />
              ),
            },
          ]}
          icon={(
            <Icon
              name="plus"
              color="#FFFFFF"
              size={24}
            />
          )}
        />
      ),
    }),
    params: {
      navigationDisabled: true
    },
  },
  ['Tab4']: {
    screen: FavoriteStack,
    navigationOptions: () => ({
      tabBarLabel: 'Favorite',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="star"
          color={tintColor}
          size={24}
        />
      ),
    }),
  },
  ['Tab5']: {
    screen: FavoriteStack,
    navigationOptions: () => ({
      tabBarLabel: 'Favorite',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="star"
          color={tintColor}
          size={24}
        />
      ),
    }),
  },
}, {
  tabBarComponent: MultiBar,
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#F8F8F8',
    inactiveTintColor: '#586589',
    style: {
      backgroundColor: '#171F33',
    },
    tabStyle: {},
  },
});

tabNavigator.path = '';

export default tabNavigator;
