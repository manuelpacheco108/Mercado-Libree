import { StyleSheet } from 'react-native';
const shoppingStyles = StyleSheet.create({

    container: {
        backgroundColor: '#146C94',
        marginTop: 15,
        margin: 5,
        flex: 1,
        borderRadius: 5,
        height: 120,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    textShopping: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'System',
        paddingRight: 280,
    },
    button: {
        backgroundColor: '#ffe333',
        fontSize: 25,
    },
    row: {
        justifyContent: 'space-between',
    },
    menuButton: {
        padding: 10,
    },
    menuIcon: {
        width: 24,
        height: 24,
    },
    title: {
        fontSize: 18,
        color: '#565656',
        fontWeight: 'bold',
        backgroundColor: '#cbcbcb',
        borderRadius: 5,
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#565656',
    },
    menuContainer: {
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#146C94',
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    shoppingContainer: {
        flexDirection: 'row',
        backgroundColor: '#AFD3E2',
        marginTop: 15,
        margin: 5,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        color: '#565656',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#565656',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
    }, 
    status: {
        fontWeight: 'bold'
    },

    card: {
        flex: 1,
        padding: 5,
        marginLeft: 5
    }

});

export default shoppingStyles
