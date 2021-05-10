import React from 'react'
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'

const LuckryFoodsCarosule = ({ item }) => {
    console.log(item);
    return (
        <Image
            style={styles.img}
            source={{
                uri: item.img,
            }}
        />
    )
}

export default LuckryFoodsCarosule

const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 100,
        marginRight: 10,
        borderRadius: 15
    }
})
