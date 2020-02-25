import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../assets/styles/globalStyles'
import { MaterialIcons } from '@expo/vector-icons'

export default function ViewDetails({ navigation }){
    
    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.card}>
                <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
                <Text style={globalStyles.paragraph}>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text style={{marginRight: 5}}>Gamezone rating:</Text>
                    <Text style={globalStyles.titleText}>{navigation.getParam('rating')}</Text>
                    <MaterialIcons name="star" size={16} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        paddingTop: 16,
        borderTopColor: '#eee',
        borderTopWidth: 1,
        alignItems: 'center'
    }
})