import React from 'react';
import { View, Text, Image } from 'react-native';
import offerStyles from '../styles/offersStyles';

const OfferCard = ({ offer }) => {
    return (
        <View style={offerStyles.container}>
           <Image style={offerStyles.image} source={offer.photo} />
            <Text style={offerStyles.title}>{offer.name}</Text>
            <Text style={offerStyles.text}>{offer.description}</Text>
            <Text style={offerStyles.textPrice}>{offer.price}</Text>
            <Text style={offerStyles.offerPrice}>{offer.discount} <Text style={offerStyles.offerValue}>{offer.offerValue}</Text></Text>

        </View>
    );
};
 
export default OfferCard