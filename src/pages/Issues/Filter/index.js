import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Filter = ({ activeFilter, changeFilter }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.tab} onPress={() => changeFilter('all')}>
      <Text style={[styles.tabText, activeFilter === 'all' && styles.activeFilter]}>Todas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tab} onPress={() => changeFilter('open')}>
      <Text style={[styles.tabText, activeFilter === 'open' && styles.activeFilter]}>Abertas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tab} onPress={() => changeFilter('closed')}>
      <Text style={[styles.tabText, activeFilter === 'closed' && styles.activeFilter]}>
        Fechadas
      </Text>
    </TouchableOpacity>
  </View>
);

Filter.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
