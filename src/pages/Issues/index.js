import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import styles from './styles';

export default class Issues extends Component {
  state = {};

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text>{navigation.getParam('title')}</Text>
      </View>
    );
  }
}
