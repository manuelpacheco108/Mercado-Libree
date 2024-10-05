import { StyleSheet } from "react-native";
import { colors, typography } from "../styles/globalStyles"

const Style = StyleSheet.create({

    button: {
        backgroundColor: colors.highlight,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
        margin: 10
    },
    buttonText: {
        color: colors.background,
        fontWeight: 'bold',
        fontSize: typography.body.fontSize,
    },
    disabledButton: {
        backgroundColor: '#cccccc',
    },
});

export default Style;