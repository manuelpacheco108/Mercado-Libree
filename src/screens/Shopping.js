import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import ShoppingCard from '../components/ShoppingCard';
import shoppingStyles from '../styles/shoppingStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { UserContext } from '../context/UserContext';

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
  const [purchases, setPurchases] = useState([]);
  const { currentUser } = useContext(UserContext); 

  useEffect(() => {
    if (!currentUser) return;

    const purchasesRef = firestore()
      .collection('purchases')
      .where('userId', '==', currentUser.email);

    const unsubscribe = purchasesRef.onSnapshot(
      (snapshot) => {
        const purchasesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPurchases(purchasesData);
      },
      (error) => {
        console.error('Error fetching purchases: ', error);
      }
    );

    return () => unsubscribe();
  }, [currentUser]);

  const allItems = purchases.flatMap((purchase) => purchase.items || []);

  return (
    <ScrollView>
      <Menu navigation={navigation} />
      {allItems.length > 0 ? (
        <FlatList
          data={allItems}
          renderItem={({ item }) => (
            <ShoppingCard product={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={shoppingStyles.emptyPurhcasesT}>
          No hay ninguna compra todavía. 🤨
        </Text>
      )}
    </ScrollView>
  );
};

export default Shopping;
