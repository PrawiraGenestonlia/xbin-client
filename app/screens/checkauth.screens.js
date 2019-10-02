import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useTheme } from 'react-navigation';
import { COLOR } from '../constants';
import GlobalStyle from './global.stylesheets';

export default function CheckAuth(props) {
  let theme = useTheme();
  const { navigation } = props;
  // Fetch the token from storage then navigate to our appropriate place
  useEffect(() => {
    _bootstrapAsync();
  }, []);

  const _bootstrapAsync = async () => {
    try {
      const result = await AsyncStorage.getItem('userToken');
      navigation.navigate(result ? 'Main' : 'Login');
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      {/* <Text style={{ color: COLOR[theme].TEXT }}>CheckAuth Screen</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'black',
    backgroundColor: '#000',
  },
});
