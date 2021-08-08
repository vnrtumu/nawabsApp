import React from 'react';
import { View,Text, ImageBackground, StyleSheet } from 'react-native';

import PrimaryBtn from '../components/PrimaryBtn';
import IconBtn from '../components/IconBtn';

import SecondaryBtn from '../components/SecondaryBtn';


const LandingScreen = ({navigation}) => {
    return(
        <ImageBackground source={require('../assets/images/home.jpeg')} style={styles.imgBG}>
            <View style={styles.dummycontainer}></View>
            {/* Title section */}
            <View style={styles.container}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Welcome To Nawab's {"\n"} Biriyani </Text>
                    <Text style={styles.subtitle}>Enjoy the Best quality and tasty food.</Text>
                </View>
                <View style={styles.btnWrapper}>
                    <PrimaryBtn 
                        btntext="Continue with phone" 
                        btnPress={() => navigation.navigate('MobileLogin')} 
                        parentStyle={styles.conPhoneBtn}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imgBG: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        // opacity: 0.8,
    },
    dummycontainer:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent:  'flex-start',
        paddingTop: 150,
    },
    title: {
        marginHorizontal: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitle:{
        color: '#cecece',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    conPhoneBtn: {
        paddingHorizontal: 10,
        marginVertical: 20,
    },  
})

export default LandingScreen;