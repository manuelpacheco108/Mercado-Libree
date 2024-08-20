# Paquetes o Librerias instalados

Los paquetes recomendados por la profesora:
    npm install @react-navigation/native 
    npm install @react-navigation/stack 
    npm install --save react-native-gesture-handler 
    npm install react-native-safe-area-context 
    npm install react-native-screens

Al haber instalado react-native-screens, en la documentación oficial pedia agregar una nueva configuración para que trabaje adecuadamente en el dispositivo Android. Se edito el archivo MainActivity.kt que se ubica en 
android/app/src/main/java/your package name/

    import android.os.Bundle;
    .
    .
    .
    class MainActivity: ReactActivity() {
    // ...
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(null)
    }
    // ...
    }

Lo anterior se requiere para cuando se recargue la vista y no genere problemas
https://reactnavigation.org/docs/getting-started

NAVEGACIÓN
     1. Para los siguientes comandos se tuvo que realizar el paso a paso de la documentación oficial de  https://reactnavigation.org/docs/stack-navigator. Lo anterior con el fin de instalar el Stack:

            npm install @react-navigation/stack 
            npm install --save react-native-gesture-handler 

        Después de ello se crearon en la carpera general dos archivos:
            1. gesture-handler.native.js donde contiene solamente esta linea de codigo: 
                // Only import react-native-gesture-handler on native platforms
                import 'react-native-gesture-handler';
            2. gesture-handler.js:
                // Don't import react-native-gesture-handler on web
        Por ultimo en el archivo index.js  se agrego el siguiente import en la primera linea e código (No debe de haber nada antes de esta)
            import './gesture-handler';
     2. Para la navegación entre las páginas se utilizó DRAWER (on the side of the screen which can be opened and closed via gestures.):
            npm install @react-navigation/stack (Ya tenerlo instalado)
            npm install @react-navigation/drawer
        Despues de ello, se siguen los pasos del punto numero 1 (Si no se ha hecho aún).
        Se instala la ultima version react-native-reanimated:
            npm install react-native-reanimated@latest
        Se modifica el archivo babel.config.js añadiendole:
            module.exports = {
                presets: ['module:@react-native/babel-preset'],
                plugins: ['react-native-reanimated/plugin'],
            };
        Y se terminaria con el proceso
     3. Para el tema de los iconos, se debe descargar el paquete de node:
            npm i react-native-paper
        Posterior a ello se procede con la instalacion de vectores:
            npm install react-native-vector-icons
        El ultimo paso es modificar el index.js, agregando lo siguiente (Copiado y pegado de mi maquina):
            import './gesture-handler';
            import {AppRegistry} from 'react-native';
            import { PaperProvider } from 'react-native-paper'; //Este
            import App from './App';
            import {name as appName} from './app.json';

            export default function Main() {
                return (
                <PaperProvider>
                    <App />
                </PaperProvider>
                );
            }// Esta funcion
            
            AppRegistry.registerComponent(appName, () => App);
        Y se termina con le proceso

    


    



