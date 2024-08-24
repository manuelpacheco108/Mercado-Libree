import React, { useRef, useEffect } from 'react';
import { View, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../styles/navBarStyles'
import productStyles from '../styles/ProductStyles';

const Search = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <View style={Styles.container}>
            <View style={Styles.searchContainer}>
                <Image
                    source={require('../img/search-interface-symbol.png')}
                    style={productStyles.menuIconSearch}
                />
                <TextInput
                    ref={inputRef}
                    style={Styles.searchInput}
                    placeholder="Buscar en Mercado Libre"
                    placeholderTextColor="gray"
                    autoFocus={true}
                />
            </View>
        </View>
    );
};


export default Search;