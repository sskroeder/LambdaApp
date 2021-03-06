import { StyleSheet, Platform } from 'react-native'

const GeneralTheme = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'normal'
    },

    smallText: {
        color: 'white',
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'normal',
        opacity: 0.9,
        fontSize: 16
    },
    cardText: {
        color: 'white',
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'normal',
        opacity: 0.9,
        fontSize: 20,
        marginBottom:10
    },
    Headertext: {
        color: 'white',
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'normal',
        opacity: 0.9,
        fontSize: 30,
        marginBottom:20
    },
    
    theme: {
        padding: 18,
        paddingHorizontal: 30,
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 15,
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'normal',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 2, height: 2}
    },
    container: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
        alignItems:'center'
    },
    samllThemeButton: {
        padding:7,
        paddingHorizontal: 10,
        width: '40%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 3,
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'normal',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 2, height: 2},
        height:'5%',
        alignSelf:'flex-start'
    },
    bigThemeButton:{
        padding:7,
        paddingHorizontal: 10,
        width: '40%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 3,
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'normal',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 2, height: 2},
        height:'5%',
        alignSelf:'flex-start'
    },
    overlay:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0,0.2)'

    },
    overlay_kid:{
        width:150, 
        height:150, 
        justifyContent:'center'
    }

})

export default GeneralTheme