import { StyleSheet } from 'react-native'
const categoryStyles = StyleSheet.create({

    container: {
        backgroundColor: '#AFD3E2',
        marginTop: 15,
        margin: 5,
        flex: 1,
        borderRadius: 5,
        height: 175,
        paddingTop: 10,
    },
    textCategories: {
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
        backgroundColor: '#cbcbcb',
        width: '100%',
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        textAlign: 'center',

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
        width: '100%',
        height: 140,
        borderRadius: 5,
        marginBottom: 7,
        flex: 1
    },
});

export default categoryStyles;