import {StyleSheet} from 'react-native';
import {w} from '../../styles/scale';
import {Colors} from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: w(50),
        justifyContent: 'center',
        backgroundColor: Colors.WHITE
    },
    wrapper: {
        width: '100%',
        paddingHorizontal: w(16)
    },
    textHeader: {
        fontSize: w(24),
        color: Colors.BLACK
    }
});

export {styles};
