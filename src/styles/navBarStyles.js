import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#146C94',
        padding: 10
    },
    hamburguerMenu: {
        marginRight: 10
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F6F1F1',
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        color: '#146C94',
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
    }
});

export default Styles;