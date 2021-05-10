import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native'
import { faCartPlus, faHome, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import Home from '../Home/Home';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Tab = createBottomTabNavigator();

const BottomBer = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#e91e63',
                style: {
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15
                }
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faHome} style={{ color: color, size: size }} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Home}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faCartPlus} style={{ color: color, size: size }} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faPeopleArrows} style={{ color: color, size: size }} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomBer

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 52,
        flexDirection: 'row', // row
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between', // center, space-around
        paddingLeft: 10,
        paddingRight: 10
    },
})
