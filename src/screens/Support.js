import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import suportStyle from '../styles/suportStyle';
import { Card, TextInput } from 'react-native-paper';

const Menu = ({ navigation }) => {
  return (
    <View style={suportStyle.menuContainer}>
      <Pressable
        style={suportStyle.menuButton}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'HomeDrawer' }],
          });
        }}
      >
        <Image
          source={require('../img/back.png')}
          style={suportStyle.menuIcon}
        />
      </Pressable>
      <Text style={suportStyle.textSupport}>Ayuda y Soporte</Text>
    </View>
  );
};

const Support = ({ navigation }) => {
  return (
    <View>
      <Menu navigation={navigation} />
      <Text style={suportStyle.title}>¿Con qué te podemos ayudar?</Text>
      <View style={suportStyle.infoSupport}>
        <Card style={suportStyle.card}>
          <Text style={suportStyle.listItemText}>Queja</Text>
          <Text style={suportStyle.listItemTextInfo}>Aquí podrás hacer alguna queja</Text>
          <TextInput
            style={suportStyle.inputSupport}
            label='Queja'
            mode='outlined'
            activeOutlineColor='#146C94'
            maxLength={300}
          />
          <Pressable style={suportStyle.sendButton}>
            <Text style={suportStyle.sendButtonText}>Enviar</Text>
          </Pressable>
        </Card>
      </View>
      <View style={suportStyle.infoSupport}>
        <Card style={suportStyle.card}>
          <Text style={suportStyle.listItemText}>Petición</Text>
          <Text style={suportStyle.listItemTextInfo}>Aquí podrás hacer alguna petición</Text>
          <TextInput
            style={suportStyle.inputSupport}
            label='Petición'
            mode='outlined'
            activeOutlineColor='#146C94'
            maxLength={300}
          />
          <Pressable style={suportStyle.sendButton}>
            <Text style={suportStyle.sendButtonText}>Enviar</Text>
          </Pressable>
        </Card>
      </View>
      <View style={suportStyle.infoSupport}>
        <Card style={suportStyle.card}>
          <Text style={suportStyle.listItemText}>Recurso</Text>
          <Text style={suportStyle.listItemTextInfo}>Aquí podrás pedir algún recurso</Text>
          <TextInput
            style={suportStyle.inputSupport}
            label='Recurso'
            mode='outlined'
            activeOutlineColor='#146C94'
            maxLength={300}
          />
          <Pressable style={suportStyle.sendButton}>
            <Text style={suportStyle.sendButtonText}>Enviar</Text>
          </Pressable>
        </Card>
      </View>
    </View>
  );
}

export default Support;
