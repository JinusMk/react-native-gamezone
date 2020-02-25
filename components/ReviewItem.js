import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { globalStyles } from '../assets/styles/globalStyles'
import { MaterialIcons } from '@expo/vector-icons'

export default function ReviewItem({ review, handleClick }){
    return(
        <TouchableOpacity onPress={() => handleClick(review)} style={globalStyles.card}>
            <Text style={globalStyles.titleText}>{review.title}</Text>
            <Text style={globalStyles.paragraph} numberOfLines={1}>{review.body}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.review}>
                    <MaterialIcons name="star" size={16} />
                    <Text>{review.rating}</Text>
                </View>
                <View style={styles.review}>
                    <MaterialIcons name="person-outline" size={16}/>
                    <Text style={styles.author}>{review.author}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    review: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    author: {
        fontFamily: 'montserrat-bold',
        fontSize: 12
    }
})