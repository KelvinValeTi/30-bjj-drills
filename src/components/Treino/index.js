import { useCallback, useState } from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import {useFonts} from 'expo-font';

import styles from "./styleTreino";
import TreinoEscolhido from './TreinoEscolhido';
import treino from "../../../db/treinoBanco";

export default function Treino({navigation, route}) {

  //variavel de controle do treino atual.
  const [proxTreino, setProxTreino] = useState(route.params.treinoIndex);
  const [training, setTraining] = useState(false);

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


  /**
   * Escolher outro treino
   */
  function outroTreino(){
    setProxTreino(proxTreino+1);
    
    if(proxTreino >= treino.length){
      setProxTreino(1);
      //console.log(proxTreino);
      return proxTreino;
    }else{
      //console.log(proxTreino);
      return proxTreino;
    }
  }

  /**===========
   * RETURN
   =========*/
  return (
    <View style={styles.container}>

      {
        <View style={styles.container}> 
          <Text style={{color:"#fff",}}>RENDERIZAÇÃO CONDICIONAL AQUI</Text>
          
          <TreinoEscolhido treino={proxTreino}/>

          {/**BOTÕES */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.button}
            >
              <Text style={styles.textButton}>INICIAR/PARAR/CONCLUIR</Text>
            </TouchableOpacity>
          
            <TouchableOpacity 
              style={styles.button}
              onPress={()=>outroTreino()}
            >
              <Text style={styles.textButton}>SELECIONAR OUTRO TREINO</Text>
            </TouchableOpacity>

          </View>
        </View>
      }
              
    </View>
  );
}

