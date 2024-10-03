import { ScrollView, View } from 'react-native';
import NavBar from "../components/NavBar";
import Product from '../components/Product';

const HomeContent = ({ navigation }) => {
    return (
        <ScrollView>
            <NavBar />
            <Product navigation={navigation} />
        </ScrollView>

    );
};

export default HomeContent;