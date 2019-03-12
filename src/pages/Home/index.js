import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  AsyncStorage,
} from 'react-native';

import PropTypes from 'prop-types';

import api from '~/services/api';

import Icon from 'react-native-vector-icons/FontAwesome';
import RepositoryItem from './RepositoryItem';

import styles from './styles';

export default class Home extends Component {
  static navigationOptions = {
    title: 'GitIssues',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    repositoryInput: '',
    loadingButton: false,
    loadingList: true,
    repositories: [],
    error: '',
    refreshing: false,
  };

  async componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const repositories = JSON.parse(await AsyncStorage.getItem('@GitIssues:repositories'));

    this.setState({ repositories: repositories || [], refreshing: false, loadingList: false });
  };

  addRepository = async () => {
    const { repositoryInput, loadingList, repositories } = this.state;

    if (loadingList) return;

    this.setState({ loadingButton: true });

    if (!repositoryInput) {
      this.setState({ error: 'Digite um repositório para continuar!', loadingButton: false });
      return;
    }

    if (repositories.find(repository => repository.full_name === repositoryInput)) {
      this.setState({ error: 'Repositório Duplicado', loadingButton: false });
      return;
    }

    try {
      const { data } = await api.get(`/repos/${repositoryInput}`);

      this.setState({
        repositories: [...repositories, data],
        loadingButton: false,
        repositoryInput: '',
        error: '',
      });

      await AsyncStorage.setItem(
        '@GitIssues:repositories',
        JSON.stringify([...repositories, data]),
      );
    } catch (err) {
      this.setState({ repositoryInput: '', error: 'Repositório inexistente' });
    } finally {
      this.setState({ loadingButton: false });
    }
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  renderList = () => {
    const { repositories, refreshing } = this.state;

    return (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        style={styles.listContainer}
        refreshing={refreshing}
        onRefresh={this.loadRepositories}
      />
    );
  };

  render() {
    const {
      repositoryInput, loadingButton, error, loadingList,
    } = this.state;

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
          <TouchableOpacity onPress={this.addRepository}>
            {loadingButton ? (
              <ActivityIndicator size="small" />
            ) : (
              <Icon style={styles.plusIcon} name="plus" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {!!error && <Text style={styles.error}>{error}</Text>}

        {loadingList ? (
          <ActivityIndicator size="large" style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
