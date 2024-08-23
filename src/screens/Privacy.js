import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import favoriteStyles from '../styles/favoriteStyles';
import profileStyles from '../styles/profileStyles';
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';



const Menu = ({ navigation }) => {
    return (
        <View style={favoriteStyles.menuContainer}>
            <Pressable
                style={favoriteStyles.menuButton}
                onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Profile' }],
                    });
                }}
            >
                <Image
                    source={require('../img/back.png')}
                    style={favoriteStyles.menuIcon}
                />
            </Pressable>
            <Text style={favoriteStyles.textFavorites}>Terminos y Condiciones</Text>
        </View>
    );
};

const Privacy = ({ navigation }) => {
    return (
        <View>
            <Menu navigation={navigation} />
            <ScrollView>
                <Card style={profileStyles.infoCard}>
                    <Text style={profileStyles.title}>Política de Privacidad</Text>
                    <Text style={profileStyles.description}>1. Información que Recopilamos
                    Recopilamos información personal que tú nos proporcionas directamente, como tu nombre, dirección de correo electrónico, y otra información de contacto. También podemos recopilar información sobre tu uso del sitio web o aplicación, como tu dirección IP, tipo de navegador, y las páginas que visitas.

                    2. Uso de la Información
                    La información que recopilamos se utiliza para mejorar el sitio web o aplicación, personalizar tu experiencia, y para comunicarnos contigo en relación con tus consultas o actualizaciones importantes. También podemos usarla para enviar promociones y ofertas que puedan ser de tu interés, siempre que hayas dado tu consentimiento para recibir dichas comunicaciones.

                    3. Compartición de Información
                    No compartimos tu información personal con terceros sin tu consentimiento, excepto cuando sea necesario para cumplir con la ley, para proteger nuestros derechos o para proporcionar los servicios que has solicitado. Podemos compartir información con proveedores de servicios que nos ayudan a operar el sitio web o aplicación, siempre que estos proveedores estén obligados a mantener la confidencialidad de la información.

                    4. Seguridad
                    Tomamos medidas razonables para proteger tu información personal contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Sin embargo, ninguna transmisión de datos a través de Internet o sistema de almacenamiento es completamente segura, y no podemos garantizar la seguridad absoluta de tu información.

                    5. Tus Derechos
                    Tienes el derecho de acceder, corregir o eliminar la información personal que hemos recopilado sobre ti. Si deseas ejercer estos derechos, contáctanos a través de los medios proporcionados en nuestro sitio web o aplicación.

                    6. Cookies y Tecnologías Similares
                    Utilizamos cookies y tecnologías similares para recopilar información sobre tu uso del sitio web o aplicación. Las cookies son pequeños archivos de datos que se almacenan en tu dispositivo y que nos permiten reconocer tu navegador y ofrecerte una experiencia más personalizada. Puedes configurar tu navegador para rechazar cookies, pero esto puede afectar tu capacidad para utilizar algunas características del sitio web o aplicación.

                    7. Cambios en la Política de Privacidad
                    Podemos actualizar esta política de privacidad de vez en cuando. Cualquier cambio será publicado en esta página, y tu uso continuado del sitio web o aplicación después de cualquier modificación constituirá tu aceptación de la nueva política.

                    8. Contacto
                    Si tienes preguntas o inquietudes acerca de estos términos o de nuestra política de privacidad, no dudes en contactarnos a través de los medios proporcionados en nuestro sitio web o aplicación.

                </Text>

                </Card>
            </ScrollView>
        </View>
    );
}

export default Privacy; 
