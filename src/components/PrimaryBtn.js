import React from 'react';
import { View,Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

const PrimaryBtn = (props) => {
    return(
        <TouchableOpacity style={[props.parentStyle, styles.btnWrapper]} onPress={props.btnPress}>
            <Text style={styles.btnText}>{props.btntext}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnWrapper:{ 
        backgroundColor: '#ff6400',
        justifyContent: 'center',
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
    },
    btnText:{
        padding: 15,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',

    },
})

export default PrimaryBtn;