import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },

  form: {
    alignItems: 'center',
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    flexDirection: 'row',
    margin: metrics.baseMargin * 2,
    paddingBottom: metrics.basePadding,
  },

  formInput: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flex: 1,
    height: 40,
    marginRight: metrics.baseMargin * 2,
    paddingHorizontal: metrics.basePadding,
  },

  listContainer: {},

  plusIcon: {
    color: colors.regular,
  },
});

export default styles;
