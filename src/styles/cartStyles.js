import { StyleSheet } from 'react-native';
import { colors, typography } from './globalStyles';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        backgroundColor: colors.secondaryElements,
        borderRadius: 8,
        padding: 8,
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    itemDetails: {
        flex: 1,
        marginLeft: 16,
        justifyContent: 'center',
    },
    itemName: {
        ...typography.header,
        color: colors.text,
    },
    itemDescription: {
        ...typography.body,
        color: colors.text,
        marginVertical: 4,
    },
    itemPrice: {
        ...typography.body,
        color: colors.highlight,
        fontWeight: 'bold',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemQuantity: {
        marginHorizontal: 8,
        fontSize: 16,
        color: colors.text,
    },
    totalContainer: {
        marginTop: 16,
        alignItems: 'center',
    },
    totalText: {
        ...typography.header,
        color: colors.text,
    },
    
});
