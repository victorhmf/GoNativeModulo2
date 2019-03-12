import React from 'react';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';


const RepositoryItem = ({ repository }) => (
  <TouchableOpacity style={styles.container} onPress={() => {}}>
    <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{repository.full_name}</Text>
      <Text style={styles.author}>{repository.owner.login}</Text>
    </View>
    <Icon style={styles.icon} name="chevron-right" size={16} />
  </TouchableOpacity>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
};

export default RepositoryItem;
