import { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useFonts} from 'expo-font';

import treino from "../../../db/treinoBanco";


export default function Home({navigation}) {

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
   * function escolhe treino.
   */
  function escolheTreino(){

    let treinoLength = treino.length; 

    let treinoEscolhido = (Math.floor(Math.random() * treinoLength)) + 1;

    return treinoEscolhido;
  }

  /**===========
   * RETURN
   =========*/
  return (
    <View style={styles.container}>  
    
      <View style={styles.titleContainer}>
        <Text style={styles.titleRed}>30'</Text>
        <Text style={styles.titleRed}>BJJ</Text>
        <Text style={styles.titleWhite}>Drills</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={()=>navigation.navigate("TreinoSelect", {treinoIndex:escolheTreino()})}
        >
          <Text style={styles.textButton}>COMEÇAR</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    backgroundColor:"#232323",
    alignItems: 'center',
    justifyContent: 'center',
  },

  //title
  titleContainer:{
    width:"100%",
    alignItems:"center",

    marginBottom:170,
  },

  titleRed:{
    color:"#C72C2C",
    fontFamily:"LeagueSpartanBold",
    fontSize:110,
    
    marginTop:-30,
    marginBottom:-30,
  },
  titleWhite:{
    color:"#FFFFFF",
    fontFamily:"Lemon",
    fontSize:55,
  },

  //Button
  buttonContainer:{
    width:"100%",
    alignItems:"center",

    marginBottom:-100,
  },

  button:{
    backgroundColor:"#C72C2C",

    padding:10,
    width:"60%",
  },
  textButton:{
    color:"#FFFFFF",
    fontFamily:"LeagueSpartanBold",
    textAlign:"center",
    fontSize: 24,
  }

});
