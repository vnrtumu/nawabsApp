import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LogHeader from '../components/LogHeader';


const MobileLogin = () => {
    return (
        <View styles={styles.mainContainer}>
            <LogHeader />
            {/* <Text>Test Mobile Screen</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    headerWrapper: {
        backgroundColor: '#000',
        height: 80,
    },
    text: {
        // marginTop: 200,
        backgroundColor: '#000',
    }
})

export default MobileLogin;
