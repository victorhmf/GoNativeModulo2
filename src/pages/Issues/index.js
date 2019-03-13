import React, { Component } from 'react';

import {
  View, Text, ActivityIndicator, FlatList,
} from 'react-native';

import api from '~/services/api';

import PropTypes from 'prop-types';
import IssueItem from './IssueItem';
import Filter from './Filter';

import { colors } from '~/styles';
import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
    headerTintColor: colors.dark,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    activeFilter: 'all',
    issues: [],
    loading: false,
    error: '',
    refreshing: false,
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    this.setState({ refreshing: true });

    const { navigation } = this.props;
    const { activeFilter } = this.state;
    const repositoryName = navigation.getParam('full_name');

    try {
      const { data } = await api.get(`/repos/${repositoryName}/issues?state=${activeFilter}`);

      this.setState({ issues: data });
    } catch (err) {
      this.setState({ error: 'Erro ao recuperar as Issues' });
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  changeFilter = async (value) => {
    await this.setState({ activeFilter: value });
    this.loadIssues();
  };

  renderListItem = ({ item }) => <IssueItem issue={item} />;

  renderList = () => {
    const { issues, refreshing } = this.state;

    return (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        style={styles.listContainer}
        refreshing={refreshing}
        onRefresh={this.loadIssues}
      />
    );
  };

  render() {
    const { loading, activeFilter, error } = this.state;

    return (
      <View style={styles.container}>
        {!!error && <Text style={styles.error}>{error}</Text>}
        <Filter activeFilter={activeFilter} changeFilter={this.changeFilter} />
        {loading ? <ActivityIndicator size="large" style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
