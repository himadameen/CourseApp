import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Menu = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.menu_body}>
                <TouchableOpacity style={styles.btn} onPress={() =>
                    navigation.navigate("About")
                }>
                    <Text style={styles.btn_txt}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() =>
                    navigation.navigate("Course")
                }>
                    <Text style={styles.btn_txt}>Course</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() =>
                    navigation.navigate("Contact")
                }>
                    <Text style={styles.btn_txt}>Contact</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Menu

const styles = StyleSheet.create({

    menu_body: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    btn: {
        backgroundColor: "black",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
        cursor: "pointer",
    },
    btn_txt: {
        fontSize: 15,
        fontWeight: 500,
        color: "white",
        textTransform: "uppercase",
        fontStyle: "oblique"
    }
})