import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import categoryStyles from '../styles/categoryStyles';

const categories = [
  {
    id: 1,
    photo: require('../img/tecno.png'),
    name: 'Tecnologia',
    category:'Technology'
  },
  {
    id: 2,
    photo: require('../img/home.png'), 
    name: 'Hogar',
    category:'HomeCategory'
  },
  {
    id: 3,
    photo: require('../img/pet.png'),
    name: 'Macotas',
    category:'Pet'
  },
  {
    id: 4,
    photo: require('../img/makeup.png'),
    name: 'Belleza',
    category:'Makeup'
  },
  {
    id: 5,
    photo: require('../img/fashion.png'),
    name: 'Moda',
    category:'Fashion'
  },
  {
    id: 6,
    photo: require('../img/soon.jpg'),
    name: 'Más Próximamente',
    category:'Category'
  }
]
 
const Menu = ({navigation}) => {
  return (
    <View style={categoryStyles.menuContainer}>
      <TouchableOpacity 
        style={categoryStyles.menuButton} 
        onPress={() => navigation.navigate('Home')}
      >
        <Image
          source={require('../img/back.png')}
          style={categoryStyles.menuIcon}
        />
      </TouchableOpacity>
      <Text style={categoryStyles.textCategories}>Categorias</Text>
    </View>
  );
};



const Category = ({navigation}) => {
  return (
    <View>
      <Menu navigation={navigation} />
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryCard category={item} navigation={navigation}/>}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={categoryStyles.row} 
      />

    </View>
  );
}

export default Category;