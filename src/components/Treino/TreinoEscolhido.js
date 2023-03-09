import { useCallback, useState } from 'react';
import {Text, TouchableOpacity, View, FlatList, SectionList, ScrollView } from 'react-native';
import {useFonts} from 'expo-font';

import styles from "./styleTreino";

import treino from "../../../db/treinoBanco";


/**
 * 
 * FUNÇÃO
 */
export default function TreinoEscolhido() {

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
      <View style={styles.treinoContainer}>
        
        <Text style={styles.treinoTitle}>{treino[2].title}</Text>
        
        <Text style={styles.treinoMetodo}>{`${treino[2].metodo} de:`}</Text>
        


        {/**GAMBIARRA, ajeitar depois*/}
          <Text style={styles.treinoText}>
            {
              treino[2].exercicio.map(function(item, i) {
                return item +"\n"
              })
            }
          </Text>
      </View>  
  );
}

