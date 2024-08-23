import { StyleSheet } from "react-native";
import { colors, typography } from "./globalStyles";

const StylesLogin = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        marginHorizontal: 20,
        alignContent:"center"
    },
    header: {
        paddingTop: 15,
        paddingBottom: 20,
        alignItems: "flex-start"
    },
    containerForm: {
        flex: 1,
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "lightslategrey",
    },
    text: {
        alignSelf: "flex-start",
        fontSize: typography.header.fontSize,
        fontWeight: typography.header.fontWeight,
        color: "black",
        marginBottom: 30,
    },
    textTopInput: {
        alignSelf: "flex-start",
        color: "black",
        fontSize: typography.body.fontSize,
        marginLeft: 10,
        marginBottom:5,
    },
    input: {
        alignSelf: "center",
        width: 345,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "lightslategrey",
        marginBottom: 30,
    },
    buttons: {
        flexDirection: "column",
        width: 345,
    },
    buttonLogIn:{
        padding:20,
        backgroundColor: colors.highlight,
        borderRadius:10,
    },
    textButtonLogIn:{
        alignSelf:  "center",
        color: colors.secondaryElements,
        fontSize: typography.body.fontSize,
    },
    buttonSignin:{
        padding:20,
        borderRadius:10,
        backgroundColor: colors.background,
    },
    textButtonSignIn:{
        color: colors.highlight,
        fontSize: typography.body.fontSize,
    },
    containerFooter:{
        alignContent: "flex-end",
        height:60,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    footerText:{
        alignSelf: "center",
        color: colors.highlight,
    },
    onPressInput:{
        borderColor: "blue",
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
})

export default StylesLogin;
