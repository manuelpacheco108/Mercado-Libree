import { StyleSheet } from "react-native";
import { typography } from "./globalStyles";
const StylesRegisterUser = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: typography.body.fontSize,
    fontWeight: 'bold',
    marginBottom: 5,
    color: "black"
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightslategrey',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  textTopInput: {
    alignSelf: "flex-start",
    color: "black",
    fontSize: typography.body.fontSize,
    marginLeft: 5,
    marginBottom: 5,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
    textAlign: "center",
    marginBottom: 15,
    fontWeight: 'bold'

  }
});
export default StylesRegisterUser;