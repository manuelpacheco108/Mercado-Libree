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
   *
               2. gesture-handler.js:
   
                // Don't import react-native-gesture-handler on web
   *
            Por ultimo en el archivo index.js  se agrego el siguiente import en la primera linea e código (No debe de haber nada antes de esta)

                        import './gesture-handler';

4. Para la navegación entre las páginas se utilizó DRAWER (on the side of the screen which can be opened and closed via gestures.):
   
            npm install @react-navigation/stack (Ya tenerlo instalado)
            npm install @react-navigation/drawer
*
            Despues de ello, se siguen los pasos del punto numero 1 (Si no se ha hecho aún).
            Se instala la ultima version react-native-reanimated:
            
            npm install react-native-reanimated@latest
            
*
            Se modifica el archivo babel.config.js añadiendole:
            
            module.exports = {
                presets: ['module:@react-native/babel-preset'],
                plugins: ['react-native-reanimated/plugin'],
            };
            
*
              Y se terminaria con el proceso
