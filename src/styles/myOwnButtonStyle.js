import { StyleSheet } from "react-native";
import { colors, typography } from "../styles/globalStyles"

const Style = StyleSheet.create({

    button: {
        backgroundColor: colors.highlight,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: colors.background,
        fontWeight: 'bold',
        fontSize: typography.body.fontSize,
    },
    disabledButton: {
        backgroundColor: '#cccccc',
    },
    /* buttonLogIn:{
        padding:20,
        backgroundColor: colors.highlight,
        borderRadius:10,
    },
    textButtonLogIn:{
        alignSelf:  "center",
        color: colors.secondaryElements,
        fontSize: typography.body.fontSize,
    }, */
});

export default Style;