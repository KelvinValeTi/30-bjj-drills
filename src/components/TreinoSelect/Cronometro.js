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
  const [minutes, setMinutes] = useState(30);

  const [result, setResult] = useState(null);
  const [finish, setFinish] = useState(false);

  function cronometroStart() {
    
    if(seconds>=0){
      setTimeout(() => {
        setSeconds(seconds-1);   
      }, 1000);
    }else{
      setMinutes(minutes-1);
      setSeconds(59);
    }
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
  
  //finalizando treino
  function treinoFinish(minutes,seconds){
    setFinish(true);
    alert("Treino Completo!\nSeu Tempo: "+minutes+":"+seconds);
    
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
      <View>

        
        {finish==false?
          <View style={styles.cronometro}>
          {cronometroStart()}
          
          <Text style={styles.cronometroNum}>
          {formatNumber(minutes)}:{formatNumber(seconds)}
          </Text>
        
        <TouchableOpacity 
            style={styles.treinoConcluido}
            onPress={()=>setFinish(true)}
        >
            <Text style={styles.treinoConcluidoText}>CONCLUIR TREINO</Text>
        </TouchableOpacity>
        </View>
          :
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Treino Completo!</Text>
            <Text style={styles.resultText}>
              Seu Tempo: {formatNumber(minutes)}:{formatNumber(seconds)}
            </Text>

            <TouchableOpacity 
              style={styles.shareBtn}
            >
              <Text style={styles.btnText}>Compartilhar</Text>
            </TouchableOpacity>

          </View>
        }

      </View>  
  );
}

