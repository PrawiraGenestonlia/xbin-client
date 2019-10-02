import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-navigation';
import { COLOR } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalStyle from './global.stylesheets';

Icon.loadFont();

export default function Xbin(props) {
  let theme = useTheme();
  const { navigation } = props;
  return (
    <View style={GlobalStyle.container}>
      <Text style={{ color: COLOR[theme].TEXT }}>Xbin Screen</Text>
      <Text style={{ color: COLOR[theme].TEXT }}>{theme}</Text>
      <Icon
        name="star"
        // color={tintColor}
        size={24}
      />
    </View>
  );
}
