import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  activeFilter: {
    color: colors.dark,
    fontSize: 15,
    fontWeight: 'bold',
  },

  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    marginBottom: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin * 2,
    padding: metrics.basePadding / 2,
  },

  tab: {
    alignItems: 'center',
    flex: 1,
  },

  tabText: {
    color: colors.regular,
    fontSize: 14,
  },
});

export default styles;
