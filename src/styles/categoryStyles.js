import { StyleSheet } from 'react-native';

const categoryStyles = StyleSheet.create({
  container: {
    backgroundColor: '#AFD3E2',
    marginTop: 15,
    margin: 5,
    flex: 1,
    borderRadius: 5,
    height: 185,
    paddingTop: 10,
  },
  textCategories: {
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
    width: '100%',
    height: 30,
    borderRadius: 5,
    textAlign: 'center',
    lineHeight: 30, // Ajusta el alto de línea para centrar verticalmente
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
    width: '100%',
    height: 140,
    borderRadius: 5,
    marginBottom: 7,
  },
  touchable: {
    flex: 1, // Asegura que el TouchableOpacity ocupe todo el espacio del contenedor
  },
});

export default categoryStyles;
