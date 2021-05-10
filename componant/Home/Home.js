import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FlatList } from 'react-native';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import LuckryFoodsCarosule from '../LuckryFoodsCarosule/LuckryFoodsCarosule';
import Images from '../../assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'
import CetagoryC from '../CetagoryC/CetagoryC';
import { SafeAreaView } from 'react-native';
import TopBer from '../TopBer/TopBer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const LuckryFoods = [
    {
        img: "https://i.ibb.co/rMpk7n8/anna-pelzer-IGf-IGP5-ONV0-unsplash.jpg"
    },
    {
        img: "https://i.ibb.co/rMpk7n8/anna-pelzer-IGf-IGP5-ONV0-unsplash.jpg"
    },
    {
        img: "https://i.ibb.co/rMpk7n8/anna-pelzer-IGf-IGP5-ONV0-unsplash.jpg"
    },
]
const menu = [
    {
        name: "Home Chefs"
    },
    {
        name: "Combo Meals"
    },
    {
        name: "Combo Meals"
    },
    {
        name: "Combo Meals"
    },
]
const menuItem = ({ item }) => {
    return (
        <View style={styles.menu}>
            <Text style={styles.menuItem}>{item.name}</Text>
        </View>
    )
}

const Home = () => {
    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <TopBer></TopBer>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.introContainer}>
                        <View>
                            <Text style={{ fontSize: 15 }}>Welcome to Lakhi Foods,</Text>
                            <Text style={{ fontSize: 20 }}>Rakib Hossain</Text>
                        </View>
                        <View style={{ borderRadius: 5, border: '1px solid black', padding: 5 }}>
                            <FontAwesomeIcon style={{ fontSize: 40 }} icon={faSlidersH}></FontAwesomeIcon>
                        </View>
                    </View>
                    <FlatList
                        horizontal
                        data={menu}
                        renderItem={menuItem}
                        keyExtractor={(item, index) => index}
                    />
                    <Text style={{ marginVertical: 15, fontSize: 22 }}>Lucky Food</Text>
                    <FlatList
                        horizontal
                        data={LuckryFoods}
                        renderItem={LuckryFoodsCarosule}
                        keyExtractor={(item, index) => index}
                    />
                    <Text style={{ marginVertical: 15, fontSize: 22 }}>Lakhri Craft</Text>
                    <FlatList
                        horizontal
                        data={LuckryFoods}
                        renderItem={CetagoryC}
                        keyExtractor={(item, index) => index}
                    />
                    <Text style={{ marginVertical: 15, fontSize: 22 }}>Most Ordered</Text>
                    <FlatList
                        horizontal
                        data={LuckryFoods}
                        renderItem={CetagoryC}
                        keyExtractor={(item, index) => index}
                    />
                    <Text style={{ marginVertical: 15, fontSize: 22 }}>Recomended</Text>
                    <FlatList
                        horizontal
                        data={LuckryFoods}
                        renderItem={CetagoryC}
                        keyExtractor={(item, index) => index}
                    />
                    <Text style={{ marginVertical: 15, fontSize: 22 }}>Promotion</Text>
                    <FlatList
                        horizontal
                        data={LuckryFoods}
                        renderItem={CetagoryC}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    foodImage: {
        width: 100,
    },
    container: {
        width: '90%',
        marginHorizontal: '5%',
        paddingBottom: 10
    },
    introContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 80,
        marginBottom: 20
    },
    menu: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: '#caf4dc',
    },
    foods: {
        display: 'flex',
        flexDirection: 'row'
    },
    menuItem: {
        color: "#449068",
        fontSize: 15
    }
})
