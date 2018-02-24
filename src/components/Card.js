import React from 'react';
import { View, Platform } from 'react-native';

const Card = () => <View style={styles.container} />;

const styles = {
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2
      },
      android: {
        elevation: 2
      }
    }),
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
