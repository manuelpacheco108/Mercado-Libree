import React, { useContext } from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import ShoppingCard from '../components/ShoppingCard';
import AppDataContext from '../context/AppDataContext';
import shoppingStyles from '../styles/shoppingStyles';



const Menu = ({ navigation }) => {
  return (
    <View style={shoppingStyles.menuContainer}>
      <Pressable
        style={shoppingStyles.menuButton}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'HomeDrawer' }],
          });
        }}
      >
        <Image
          source={require('../img/back.png')}
          style={shoppingStyles.menuIcon}
        />
      </Pressable>
      <Text style={shoppingStyles.textShopping}>Mis Compras</Text>
    </View>
  );
};

const Shopping = ({ navigation }) => {
  const { purchases } = useContext(AppDataContext);

  return (
    <View>
      <Menu navigation={navigation} />
      {purchases.length > 0 ? (
        <FlatList
          data={purchases}
          renderItem={({ item,index }) => <ShoppingCard product={item} navigation={navigation} />}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={shoppingStyles.emptyPurhcasesT}>No hay ninguna compra todavía. 🤨</Text>
      )}
    </View>
  );
};


export default Shopping;