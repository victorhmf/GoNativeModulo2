import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  author: {
    color: colors.regular,
    fontSize: 13,
  },

  avatar: {
    borderRadius: 50,
    height: 50,
    marginRight: metrics.baseMargin * 2,
    width: 50,
  },

  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flex: 1,
    flexDirection: 'row',
    marginBottom: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin * 2,
    padding: metrics.basePadding,
  },

  icon: {
    color: colors.light,
  },

  infoContainer: {
    marginRight: metrics.baseMargin * 2,
    flex: 1,
  },

  title: {
    color: colors.darker,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
