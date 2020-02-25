import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { globalStyles } from '../assets/styles/globalStyles'
import { ReviewItem } from '../components'

export default function Home({ navigation }){
    const [reviews, setReviews] = React.useState([
        { title: 'Review one', rating: 5, body: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ', key: 1, author: 'Steve Jobs' },
        { title: 'Review two', rating: 5, body: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ', key: 2, author: 'Sean Parker' },
        { title: 'Review Four', rating: 3, body: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ', key: 3, author: 'Mark Zuckerberg' },
        { title: 'Review Five', rating: 5, body: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ', key: 4, author: 'Patrick Collinson' },
        { title: 'Review Six', rating: 4, body: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ', key: 5 , author: 'Brian Chesky'},
    ])
    const handleClick = (review) => {
        navigation.navigate('ViewDetails', review)
    }
    return(
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={( {item} ) => <ReviewItem handleClick={handleClick} review={item}></ReviewItem>}
                keyExtractor={item => item.key.toString()}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})