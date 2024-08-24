import { StyleSheet } from "react-native";
import { colors, typography } from "./globalStyles";

const DrawerNavigationStyles = StyleSheet.create({
    header: {
        paddingTop: 15,
        paddingBottom: 5,
        alignItems: "flex-start",
    },
    text:{
        alignContent: "center",
        color: colors.background,
        fontSize: typography.header.fontSize
    }
})

export default DrawerNavigationStyles;