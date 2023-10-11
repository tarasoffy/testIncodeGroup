import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: w(16),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE
    },
    wrapperInfo: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapperTextInfo: {
        fontSize: w(16),
    },
    titleInfo: {
        fontSize: w(16),
        color: Colors.WHITE,
        backgroundColor: Colors.BLACK,
        borderRadius: w(5),
        padding: w(5)
    },
    textInfo: {
        fontSize: w(16),
        fontWeight: '500',
        color: Colors.WHITE,
    },
    textName: {
        fontWeight: '700',
        color: Colors.BLACK
    },
});

export { styles };