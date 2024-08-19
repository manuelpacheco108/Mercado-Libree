import { StyleSheet } from 'react-native'
const offerStyles = StyleSheet.create({

    container: {
        backgroundColor: '#AFD3E2',
        marginTop: 15,
        margin: 5,
        flex: 1,
        borderRadius: 5,
        height: 230,
        paddingTop: 10,
    },
    textOffers: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'System',
        paddingRight: 280
    },
    button: {
        backgroundColor: '#ffe333',
        fontSize: 25
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
        marginLeft: 5,
        marginRight: 5

    },
    menuContainer: {
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#146C94',
        marginBottom: 10
    },

    image: {
        width: 120,
        height: 100,
        alignSelf: 'center'
    },
    textPrice: {
        fontSize: 15,
        textDecorationLine: 'line-through',
        marginLeft: 5,
        marginRight: 5,
        color: 'red'
    },
    offerPrice: {
        fontSize: 18,
        color: '#565656',
        fontWeight: 'bold',
        marginLeft: 5,
        marginRight: 5,
        color: 'green',
        padding: 2
    },
    text: {
        fontSize: 16,
        color: '#565656',
        marginLeft: 5,
        marginRight: 5

    },
    offerValue: {
        fontSize: 13,
        marginLeft: 5,
        marginRight: 5,
        textDecorationLine: 'underline',
    },
});

export default offerStyles;