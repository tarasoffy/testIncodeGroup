import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: w(16),
        backgroundColor: Colors.WHITE
    }
});

export { styles };