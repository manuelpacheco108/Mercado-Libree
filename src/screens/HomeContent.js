import { View } from 'react-native';
import NavBar from "../components/NavBar";
import Product from '../components/Product';

const HomeContent = ({ navigation }) => {
    return (
        <View>
            <NavBar />
            <Product navigation={navigation} />
        </View>

    );
};

export default HomeContent;