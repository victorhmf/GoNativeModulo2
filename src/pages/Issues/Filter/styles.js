import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  activeFilter: {
    color: colors.dark,
    fontSize: 15,
    fontWeight: 'bold',
  },

  container: {
    flexDirection: 'row',
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,
    alignItems: 'center',
    backgroundColor: colors.light,
    padding: metrics.basePadding / 2,
    borderRadius: metrics.baseRadius,
  },

  tabText: {
    color: colors.regular,
    fontSize: 14,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
  },
});

export default styles;
