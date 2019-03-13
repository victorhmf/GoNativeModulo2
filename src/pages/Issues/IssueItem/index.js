import React from 'react';

import {
  View, TouchableOpacity, Text, Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const IssueItem = ({ issue }) => (
  <TouchableOpacity style={styles.container} onPress={() => {}}>
    <Image style={styles.avatar} source={{ uri: issue.avatar_url }} />
    <View style={styles.infoContainer}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {issue.title}
      </Text>
      <Text style={styles.author}>{issue.author}</Text>
    </View>
    <Icon style={styles.icon} name="chevron-right" size={16} />
  </TouchableOpacity>
);

export default IssueItem;
