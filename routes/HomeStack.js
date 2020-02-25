import { createStackNavigator } from 'react-navigation-stack'
import { Home, About, ViewDetails } from '../screens'
import  Header  from '../shared_elements/Header'
import React from 'react'

const screens = {
    Home : {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>
            }
        }
    },
    ViewDetails : {
        screen: ViewDetails,
        navigationOptions: {
            headerTitle: 'Review Details',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        title: '',
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80 },
        
    }
})

export default HomeStack