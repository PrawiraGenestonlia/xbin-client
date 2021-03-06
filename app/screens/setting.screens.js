import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-navigation';
import { COLOR } from '../constants';
import GlobalStyle from './global.stylesheets';

//
export default function Setting(props) {
  let theme = useTheme();
  const { navigation } = props;
  return (
    <View style={GlobalStyle.container}>
      <Text style={{ color: COLOR[theme].TEXT }}>Setting Screen</Text>
    </View>
  );
}
