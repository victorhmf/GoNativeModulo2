import React from 'react';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <TouchableOpacity style={styles.container} onPress={() => {}}>
    <Image style={styles.avatar} source={{ uri: repository.avatar_url }} />
    <View style={styles.infoContainer}>
      <Text style={styles.repositoryTitle}>{repository.repositoryName}</Text>
      <Text style={styles.organizationTitle}>{repository.organizationName}</Text>
    </View>
    <Icon style={styles.icon} name="chevron-right" size={16} />
  </TouchableOpacity>
);

export default RepositoryItem;
