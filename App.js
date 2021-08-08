import React from 'react';
import { SafeAreaView, View,Text } from 'react-native';
import LandingScreen from './src/screens/LandingScreen';
import Onboarding from './src/screens/Onboarding';

import AuthNav from './src/navigation/AuthNav';

const App = () => {
  return <AuthNav />;
};

export default App;