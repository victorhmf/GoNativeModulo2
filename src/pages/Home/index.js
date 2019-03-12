import React, { Component } from 'react';

import {
  View, Text, TextInput, TouchableOpacity, ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Home extends Component {
  static navigationOptions = {
    title: 'GitIssues',
  };

  state = {
    repositoryInput: '',
    loadingButton: false,
  };

  render() {
    const { repositoryInput, loadingButton } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            value={repositoryInput}
            onChangeText={text => this.setState({ repositoryInput: text })}
            style={styles.formInput}
          />
          <TouchableOpacity onPress={() => {}}>
            {loadingButton ? (
              <ActivityIndicator size="small" />
            ) : (
              <Icon style={styles.plusIcon} name="plus" size={20} />
            )}
          </TouchableOpacity>

          <View style={styles.repositoryContainer} />
        </View>
      </View>
    );
  }
}
