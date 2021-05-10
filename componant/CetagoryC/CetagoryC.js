import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const CetagoryC = ({ item }) => {
    return (
        <Image
            style={styles.img}
            source={{
                uri: item.img,
            }}
        />
    )
}

export default CetagoryC

const styles = StyleSheet.create({
    img: {
        width: 140,
        height: 200,
        marginRight: 10,
        borderRadius: 15
    }
})
