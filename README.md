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

Para los siguientes comandos se tuvo que realizar el paso a paso de la documentación oficial de  reactnavigation.org:

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
    



