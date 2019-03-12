import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    marginBottom: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin * 2,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoContainer: {
    flex: 1,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: metrics.baseRadius,
    marginRight: metrics.baseMargin * 2,
  },

  repositoryTitle: {
    color: colors.darker,
    fontSize: 14,
    fontWeight: 'bold',
  },
  organizationTitle: {
    color: colors.regular,
    fontSize: 13,
  },

  icon: {
    color: colors.light,
  },
});

export default styles;
