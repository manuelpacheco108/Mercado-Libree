import React , { useRef, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../styles/navBarStyles'

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
                <Icon name="search" size={20} color="gray" style={Styles.searchIcon} />
                <TextInput
                    ref={inputRef}
                    style={Styles.searchInput}
                    placeholder="Buscar en Mercado Libree"
                    placeholderTextColor="gray"
                    autoFocus={true}
                />
            </View>
        </View>
    );
};


export default Search;