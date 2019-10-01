import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-navigation';

export default function __(props) {
  let theme = useTheme();
  const { navigation } = props;
  return (
    <View>
      <Text>__ Screen</Text>
    </View>
  );
}
