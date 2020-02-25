import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { globalStyles } from '../assets/styles/globalStyles'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header(props){
    const { navigation } = props
    return(
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={() => navigation.openDrawer()} style={styles.icon}/>
            <View>
                <Text style={styles.headerText}>
                    GameZone
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: 'montserrat-bold',
        fontSize: 18,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        // position: 'absolute',
        // left: 16
    }

})