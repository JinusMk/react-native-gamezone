import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../assets/styles/globalStyles'

export default function About(props){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})
