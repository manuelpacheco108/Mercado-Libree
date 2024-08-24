import { StyleSheet } from "react-native";
import {colors} from "./globalStyles"
const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.text,
        padding: 10
    },
    hamburguerMenu: {
        marginRight: 10
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.background,
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        color: colors.text,
        height: 40,
        paddingLeft: 35
    },
    searchIcon: {
        position: 'absolute',
        left: 10,
        width: 20,
        height: 20,
    },
    iconImg: {
        width: 25,
        height: 30
    },
    cart: {
        marginLeft: 10
    },
    containerUbication:{
        alignItems: "flex-start",
        backgroundColor: colors.text,
        paddingTop:5,
        paddingBottom: 20,
    },
    ubicationText:{
        marginLeft: 20,

    },
    drawerHeader: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.text,
    },

    menuIcon: {
        width: 30,
        height: 30,
        marginBottom: 10
    }
    
});

export default Styles;