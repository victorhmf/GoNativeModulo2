import React, { Component } from 'react';

import {
  View, Text, TextInput, TouchableOpacity, ActivityIndicator, FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import RepositoryItem from './RepositoryItem';

import styles from './styles';

export default class Home extends Component {
  static navigationOptions = {
    title: 'GitIssues',
  };

  state = {
    repositoryInput: '',
    loadingButton: false,
    repositories: [
      {
        id: 1,
        repositoryName: 'RocketNative',
        organizationName: 'RocketSeat',
        avatar_url: 'https://avatars3.githubusercontent.com/u/11696124?v=4',
      },
      {
        id: 2,
        repositoryName: 'RocketNative',
        organizationName: 'RocketSeat',
        avatar_url: 'https://avatars3.githubusercontent.com/u/11696124?v=4',
      },
      {
        id: 3,
        repositoryName: 'RocketNative',
        organizationName: 'RocketSeat',
        avatar_url: 'https://avatars3.githubusercontent.com/u/11696124?v=4',
      },
      {
        id: 4,
        repositoryName: 'RocketNative',
        organizationName: 'RocketSeat',
        avatar_url: 'https://avatars3.githubusercontent.com/u/11696124?v=4',
      },
    ],
  };

  renderListItem = ({ item }) => {
    console.log(item);
    return <RepositoryItem repository={item} />;
  };

  renderList = () => {
    const { repositories } = this.state;

    return (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        style={styles.listContainer}
      />
    );
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
        </View>
        {this.renderList()}
      </View>
    );
  }
}
