import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../constants/colors'



const FloatButton = props => {
    const Component = props.iconType;

    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <AntDesign name="message1" size={24} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width :60,
        height: 60,
        backgroundColor: colors.peach,
        borderRadius: 40,
        position: 'absolute' , 
        bottom:30 , 
        right: 20,
        alignItems:'center',
        justifyContent:'center',
        elevation: 6
    }
})

export default FloatButton;