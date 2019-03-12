import React from 'react';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';

import PropTypes from 'prop-types';
import styles from './styles';

const RepositoryItem = ({ repository, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate('Issues', { title: repository.name })}
  >
    <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{repository.name}</Text>
      <Text style={styles.author}>{repository.owner.login}</Text>
    </View>
    <Icon style={styles.icon} name="chevron-right" size={16} />
  </TouchableOpacity>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(RepositoryItem);
