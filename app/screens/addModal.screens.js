import React from 'react';
import { View, Text, Alert, Clipboard } from 'react-native';
import { useTheme } from 'react-navigation';
import { COLOR } from '../constants';
import GlobalStyle from './global.stylesheets';

const _getContent = () => {
  var content = Clipboard.getString();

  return content;
};

const AddUrl = () => {
  Alert.prompt(
    'Update username',
    null,
    (text) => console.log('Your username is ' + text),
    'plain-text',
    Clipboard.getString(),
  );
};

export {
  AddUrl,
};

