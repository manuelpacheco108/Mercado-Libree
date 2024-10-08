import { StyleSheet } from "react-native";
import { colors, typography } from "./globalStyles";

const StylesLogin = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        padding: 20,
        alignContent: "center",
        textAlign: "center"
    },
    header: {
        paddingTop: 15,
        paddingBottom: 20,
        textAlign: "center"
    },
    containerForm: {
        flex: 1,
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "lightslategrey",
    },
    text: {
        textAlign: "center",
        fontSize: typography.header.fontSize,
        fontWeight: typography.header.fontWeight,
        color: "black",
        marginBottom: 30,
    },
    textTopInput: {
        alignSelf: "flex-start",
        color: "black",
        fontSize: typography.body.fontSize,
        marginLeft: 15,
        marginBottom: 5,
    },
    input: {
        alignSelf: "center",
        width: 345,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "lightslategrey",
        marginBottom: 15,

    },
    buttons: {
        flexDirection: "column",
        width: 345,
    },
    buttonLogIn: {
        padding: 20,
        backgroundColor: colors.highlight,
        borderRadius: 10,
    },
    textButtonLogIn: {
        color: colors.secondaryElements,
        fontSize: typography.body.fontSize,
    },
    buttonSignin: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: colors.text,
    },
    textButtonSignIn: {
        padding: 20,
        fontSize: typography.body.fontSize,
    },
    containerFooter: {
        alignContent: "flex-end",
        height: 60,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    footerText: {
        marginTop: 20,
        alignSelf: "center",
        color: colors.highlight,
    },
    onPressInput: {
        borderColor: "blue",
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 5, 
        marginLeft: 10, 
        marginBottom: 5
    },
});

export default StylesLogin;
