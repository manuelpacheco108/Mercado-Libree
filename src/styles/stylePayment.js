import { StyleSheet } from 'react-native';
import { colors, typography } from '../styles/globalStyles';

const StylesPayment = StyleSheet.create({

  container: {
    flex: 1
  },

  containerForm: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  headerText: {
    fontSize: typography.header.fontSize,
    color: colors.text,
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: typography.body.fontSize,
    fontWeight: 'bold',
    color: colors.text,
  },
  itemDescription: {
    fontSize: typography.body.fontSize,
    color: 'black',
    marginBottom: 8,
  },
  input: {
    borderColor: colors.secondaryElements,
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  totalValue: {
    fontSize: typography.body.fontSize,
    fontWeight: 'bold',
    color: colors.highlight,
    textAlign: 'right',
    marginBottom: 16,
  },
  
});

export default StylesPayment;
