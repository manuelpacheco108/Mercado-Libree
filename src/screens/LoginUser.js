import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import Styles from "../styles/styleLoginUser";



const LoginUser = ({ navigation }) => {
    const validacion = [];
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../img/back.png')} style={{ width: 24, height: 24, }} />
                </TouchableOpacity>
            </View>
            <View style={Styles.containerForm}>
                <Text style={Styles.text}>
                    Ingresa tu e-mail, teléfono o usuario de Mercado Libree:
                </Text>
                <Text style={Styles.textTopInput}>E-mail</Text>
                <TextInput textContentType="emailAddress"  style={Styles.input}>
                </TextInput>
                <View style={Styles.buttons}>
                    <TouchableOpacity style={Styles.buttonLogIn}>
                        <Text style={Styles.textButtonLogIn}>
                            Iniciar sesión
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.buttonSignin}>
                        <Text style={Styles.textButtonSignIn}>
                            Crear Cuenta
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={Styles.containerFooter}>
                <Text style={Styles.footerText}>Como cuidamos tu privacidad</Text>
            </TouchableOpacity>
        </View>

    );
}

export default LoginUser;
