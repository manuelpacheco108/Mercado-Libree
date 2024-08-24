import { StyleSheet } from 'react-native';
import { colors, typography } from './globalStyles';

const StylesBuyCard = StyleSheet.create({

    container: {
        flex: 1
    },

    containerForm: {
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
        fontSize:typography.header.fontSize,
        color: colors.text,
    },
    itemDescription: {
        ...typography.body,
        color: colors.text,
        marginVertical: 4,
    },
    itemPrice: {
        fontSize:typography.body.fontSize,
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
        fontSize:typography.header.fontSize,
        color: colors.text,
    },
});
export default StylesBuyCard;