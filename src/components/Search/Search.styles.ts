import {StyleSheet} from 'react-native';
import {w} from '../../styles/scale';
import {Colors} from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: w(16),
    backgroundColor: Colors.WHITE,
    height: w(35),
    justifyContent: 'center',
  },
  wrapperSearch: {
    width: '100%',
    justifyContent: 'center',
  },
  searchAbsolute: {
    position: 'absolute',
    zIndex: 1,
  },
  inputStyles: {
    paddingHorizontal: w(28),
    borderBottomColor: Colors.GREY,
    borderBottomWidth: w(0.5),
  },
});

export {styles};
