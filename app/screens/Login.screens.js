import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-navigation';
import { COLOR } from '../constants';
import GlobalStyle from './global.stylesheets';

//need to use sign in with apple
//use apple and google sdk
//login,sign up, forget password, change password
export default function Login(props) {
  let theme = useTheme();
  const { navigation } = props;
  //TODO: Add a function
  return (
    <View style={GlobalStyle.container}>
      <Text style={{ color: COLOR[theme].TEXT }}>Login Screen</Text>
    </View>
  );
}
