import {StyleSheet} from 'react-native';
import {w} from '../../styles/scale';
import {Colors} from '../../styles/colors';

const styles = StyleSheet.create({
    wrapperPagination: {
        height: w(40),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE
    },
    pageInfo: {
        marginRight: w(10),
        fontSize: w(16)
    }
});

export {styles};
