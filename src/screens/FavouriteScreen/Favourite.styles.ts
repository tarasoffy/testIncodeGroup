import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    wrapperFavourite: {
        width:'100%',
        padding: w(16),
        flex: 1
    },
    wrapperGenderFans: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    counterFans: {
        fontWeight: '500',
        color: Colors.BLACK
    },
    clearFansBtn: {
        padding: w(16),
        borderColor: Colors.RED,
        borderWidth: w(1),
        borderRadius: w(5),
    },
    clearFansText: {
        color: Colors.RED,
        textAlign: 'center'
    }
});

export { styles };