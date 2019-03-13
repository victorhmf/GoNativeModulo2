import React, { Component } from 'react';

import {
  View, Text, ActivityIndicator, FlatList,
} from 'react-native';

import IssueItem from './IssueItem';
import Filter from './Filter';

import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  });

  state = {
    activeFilter: 'all',
    issues: [
      {
        id: 1,
        title: 'Problemas na configuração do Reactotron',
        avatar_url: 'https://avatars3.githubusercontent.com/u/11696124?v=4',
        author: 'victorhmf',
      },
      {
        id: 2,
        title: 'Problemas na configuração do Reactotron',
        avatar_url: 'https://avatars3.githubusercontent.com/u/11696124?v=4',
        author: 'victorhmf',
      },
      {
        id: 3,
        title: 'Problemas na configuração do Reactotron',
        avatar_url: 'https://avatars3.githubusercontent.com/u/11696124?v=4',
        author: 'victorhmf',
      },
      {
        id: 4,
        title: 'Problemas na configuração do Reactotron',
        avatar_url: 'https://avatars3.githubusercontent.com/u/11696124?v=4',
        author: 'victorhmf',
      },
    ],
    loading: false,
    error: '',
    refreshing: false,
  };

  changeFilter = (value) => {
    this.setState({ activeFilter: value });
  };

  renderListItem = ({ item }) => <IssueItem issue={item} />;

  renderList = () => {
    const { issues } = this.state;

    return (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        style={styles.list}
      />
    );
  };

  render() {
    const { loading, activeFilter } = this.state;

    return (
      <View style={styles.container}>
        <Filter activeFilter={activeFilter} changeFilter={this.changeFilter} />
        {loading ? <ActivityIndicator size="large" style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
