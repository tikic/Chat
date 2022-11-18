import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import ProfileImage from './ProfileImage';
import colors from '../constants/colors';

export default function DataItem(props) {

   const {title, subTitle, image} = props; 

  return (
    <TouchableWithoutFeedback>
            <View style={styles.container}>

                <ProfileImage size={40} uri={image}/>
                <View style={styles.textContaner}>

                    <Text numberOfLines={1}
                        style={styles.title} >
                           {title} 
                    </Text>

                    <Text style={styles.subTitle}>
                        {subTitle}
                    </Text>
                </View>
            </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 7,
        borderBottomColor: colors.extraLightGrey,
        borderBottomWidth: 1,
        alignItems: 'center',
        minHeight: 50
    },
    textContaner:{
        marginLeft: 14
    },
    title: {
        fontFamily: 'medium',
        fontSize: 16,
        letterSpacing: .3
    },
    subTitle: {
        fontFamily: 'regular',
        fontSize: 16,
        color: colors.grey,
        letterSpacing: .3
    }
})