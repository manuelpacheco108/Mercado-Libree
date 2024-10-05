import { StyleSheet } from 'react-native';
const suportStyle = StyleSheet.create({

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
    textSupport: {
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
        fontSize: 25,
        color: '#565656',
        fontWeight: 'bold',
        borderRadius: 5,
        marginBottom: 5,
        alignSelf: 'center'

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
    supportContainer: {
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
    description: {
        fontSize: 14,
        color: '#565656',
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
    viewContainerButton:{
        flex:1,
        alignItems:'center',
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
    sendButton: {
        padding: 2,
        backgroundColor: '#146C94',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        height: 20,
        width: 100,
        marginBottom: 10,
    },
    sendButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    infoSupport: {
        marginTop: 15,
        backgroundColor: '',
        borderColor: '#d1d1d1',
        margin: 5,
        padding: 5,
        borderRadius: 5

    },
    inputSupport: {
        backgroundColor: '#AFD3E2',
        margin: 4,
        borderRadius: 5,
        marginBottom: 10
    },
    card: {
        backgroundColor: '#cbcbcb',
        padding: 5
    }

});

export default suportStyle;