import {StyleSheet} from 'react-native';
import {w} from '../../styles/scale';
import {Colors} from '../../styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderRadius: w(5),
    marginVertical: w(8),
  },
  info: {
    height: w(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperTextInfo: {
    fontSize: w(16),
    marginLeft: w(16),
  },
  textInfo: {
    fontWeight: '500',
    color: Colors.BLACK,
  },
  bottomCard: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    height: '100%',
    borderTopLeftRadius: w(5),
    borderBottomLeftRadius: w(5),
    width: w(80),
  },
});

export {styles};
