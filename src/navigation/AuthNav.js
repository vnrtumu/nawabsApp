import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../screens/Onboarding.js';
import LandingScreen from '../screens/LandingScreen.js';
import MobileLogin from '../screens/MobileLogin';

const Stack = createStackNavigator();

function AuthNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding"  screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="MobileLogin" component={MobileLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNav;
