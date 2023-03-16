import { useCallback, useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, Share} from 'react-native';
import {useFonts} from 'expo-font';

import styles from "./styleTreino";

/**
 * 
 * FUNÇÃO
 */
export default function Cronometro() {
  
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(30);
  const [timeLimit, setTimeLimit] = useState(1800);
  
  const [totalSeconds, setTotalSeconds] = useState(0);

  const [finish, setFinish] = useState(false);


  //iniciar o cronometro
  function cronometroStart() {
    
    if(timeLimit>=0){
      setTimeout(() => {
        setTotalSeconds(totalSeconds+1);
        setTimeLimit(timeLimit-1);
      }, 1000);
    }
  }

  //visor cronometro
  function visorCronometro(){

    let min = Math.trunc(timeLimit/60);
    let sec = timeLimit%60;

    let visor = formatNumber(min)+":"+formatNumber(sec);
    return visor;
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
  function resultado(){
    let min = Math.trunc(totalSeconds/60);
    let sec = totalSeconds%60;

    let result = formatNumber(min)+":"+formatNumber(sec);

    return result;
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
          
          <Text style={styles.cronometroNum}>{visorCronometro()}</Text>
        
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
              Seu Tempo: {resultado()}
            </Text>

          </View>
        }

      </View>  
  );
}

