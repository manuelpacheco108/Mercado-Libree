import { StyleSheet } from "react-native";
import { colors, typography } from "./globalStyles";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        marginHorizontal: 20,
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
    },
    textButtonSignIn:{
        alignSelf:  "center",
        color: colors.highlight,
        fontSize: typography.body.fontSize,
    },
    containerFooter:{
        justifyContent: "center",
        height:60,
    },
    footerText:{
        alignSelf: "center",
        color: colors.highlight,
    },
    onPressInput:{
        borderColor: "blue",
    }
})

export default Styles;
