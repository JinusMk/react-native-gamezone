import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    titleText: {
        fontFamily: 'montserrat-bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        fontFamily: 'montserrat-regular',
        marginVertical: 7,
        lineHeight: 20
    },
    card: {
        padding: 16,
        borderWidth: 1,
        marginBottom: 16,
        backgroundColor: '#fff',
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.6,
        borderRadius: 6,
        borderColor: '#cecece',
        shadowRadius: 2
    }   
})