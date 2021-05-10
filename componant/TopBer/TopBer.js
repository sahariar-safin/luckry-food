import { faBars, faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const TopBer = () => {
    return (
        <View style={styles.header}>
            <FontAwesomeIcon icon={faBars} />
            <View style={styles.SearchBar}>
                <FontAwesomeIcon icon={faSearch} />
                <TextInput
                    style={styles.input}
                    placeholder="Type here"
                    keyboardType="text"
                />
            </View>
        </View>
    )
}

export default TopBer

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        height: 60
    },
    SearchBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eeeef0',
        paddingLeft: 5,
        borderRadius: 15,
        width: '95%',
        margin: 10
    },
    input: {
        width: '100%',
        height: 10,
        backgroundColor: '#eeeef0',
        color: 'black',
        paddingVertical: 20,
        borderRadius: 15,
        paddingLeft: 10,
        fontSize: 20
    }
})
