import { useCallback, useState } from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import {useFonts} from 'expo-font';

import styles from "./styleTreino";
import TreinoEscolhido from './TreinoEscolhido';

export default function Treino({navigation}) {

  /**
   * CARREGANDO FONTE
   */
  const [fontsLoaded] = useFonts({
    Lemon: require('../../../assets/fonts/Lemon-Regular.ttf'),
    LeagueSpartan: require('../../../assets/fonts/LeagueSpartan.ttf'),
    LeagueSpartanBold: require('../../../assets/fonts/LeagueSpartan-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  /**===========
   * RETURN
   =========*/
  return (
    <View style={styles.container}>

      <TreinoEscolhido />


      {/**BOTÕES */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
        >
          <Text style={styles.textButton}>INICIAR</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
        >
          <Text style={styles.textButton}>SELECIONAR OUTRO TREINO</Text>
        </TouchableOpacity>

      </View>
    
    </View>
  );
}

