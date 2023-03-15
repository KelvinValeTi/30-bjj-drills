import { useCallback, useState, useEffect } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useFonts} from 'expo-font';

import styles from "./styleTreino";

/**
 * 
 * FUNÇÃO
 */
export default function Cronometro() {
  
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(10);

  function cronometroStart() {
    
    if(seconds>=0){
      setTimeout(() => {
        setSeconds(seconds-1);   
      }, 1000);
    }else{
      setMinutes(minutes-1);
      setSeconds(59);
    }

    console.log(seconds);
  }

  //formata o numero com dois digitos sempre
  function formatNumber(num){
    if(num<10 && num>=0){
      num = "0"+num;
    }else if(num<0 && num> -10){
      num = "-0"+Math.abs(num);
    }
    return num;
  }
  
  
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
      <View style={styles.cronometro}>
    
        <TouchableOpacity 
            style={styles.roundConcluido}
            onPress={()=>console.log("round concluido")}
        >
            <Text style={styles.textButtonRound}>Round Concluido</Text>
        </TouchableOpacity>

        {
          cronometroStart()
        }
        <Text style={styles.cronometroNum}>
          {formatNumber(minutes)}:{formatNumber(seconds)}
        </Text>
        
      </View>  
  );
}

