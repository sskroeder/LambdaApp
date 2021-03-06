import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'

import Navigator from './navigation/Navigator'

export default class LamdaApp extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <ImageBackground
            source={require('../assets/theme-image-3.jpg')}
            style={styles.backgroundImage}
            blurRadius={5}
            >
                <View style={[styles.container, {width:'100%', height:'100%'}]}>
                    <Navigator/>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    }
})