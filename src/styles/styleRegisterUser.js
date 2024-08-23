import { StyleSheet } from "react-native";
const StylesRegisterUser = StyleSheet.create({
    container: {
      padding: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    inputError: {
      borderColor: 'red',
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
    },
  });
  export default StylesRegisterUser;