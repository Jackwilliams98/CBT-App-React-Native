import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from '../routes/homeStack';


const getFonts = () => Font.loadAsync({
  'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    console.disableYellowBox = true;
    return (
      Navigator()
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}

