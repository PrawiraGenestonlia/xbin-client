import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-navigation';
import { COLOR } from '../constants';
import GlobalStyle from './global.stylesheets';

//use apple and google sdk
export default function Login(props) {
  let theme = useTheme();
  const { navigation } = props;
  return (
    <View style={GlobalStyle.container}>
      <Text style={{ color: COLOR[theme].TEXT }}>Login Screen</Text>
    </View>
  );
}
