import { StyleSheet } from 'react-native';
const profileStyles = StyleSheet.create({

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
    textProfile: {
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
        borderRadius: 5,
        color: '#565656',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#565656',
        margin: 2
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
    profileContainer: {
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
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden'
    },
    status: {
        fontWeight: 'bold'
    },
    listItemText: {
        fontSize: 16,
        padding: 5,
        fontWeight: 'bold',
    },
    listItemTextInfo: {
        fontSize: 14,
        padding: 5
    },
    logoutButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#d9534f',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        width: 200
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoProfile: {
        marginTop: 15,
        backgroundColor: '#cbcbcb',
        margin: 5,
        padding: 5,
        borderRadius: 5

    },
    buy: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },

    payCard: {
        width: 40,
        height: 40,
    },

    infoCard: {

        backgroundColor: '#AFD3E2',
        marginTop: 15,
        margin: 5,
        borderRadius: 5,
        padding: 10,
        flex: 1
    },

    titlePrivacy: {
        fontSize: 18,
        color: '#565656',
        fontWeight: 'bold',
        borderRadius: 5,
        color: '#565656',
        fontWeight: 'bold',
        marginTop: 10
    }


});

export default profileStyles;