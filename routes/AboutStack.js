import { createStackNavigator } from 'react-navigation-stack'
import { About }  from '../screens'
import  Header  from '../shared_elements/Header'
import React from 'react'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTitle: '',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
})

export default AboutStack