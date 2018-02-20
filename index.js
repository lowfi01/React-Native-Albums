// Import a library to help create a component
import React from 'react';
import { AppRegistry, Text } from 'react-native';

// Create a component
const App = () => <Text>Hello World</Text>;

// Render component to the Device
AppRegistry.registerComponent('albums', () => App);
