import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:"100%",
      backgroundColor:"#232323",
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  
    //treino
    treinoContainer:{
      width:"85%",
      alignItems:"center",
      backgroundColor:"#fff",
      borderRadius:10,
      padding:10,
      
      marginTop:20,
      marginBottom:50,
    },
    
    treinoTitle:{
        fontFamily:"LeagueSpartanBold",
        fontSize:20,
        textAlign:"center",

        paddingBottom:5,
        
        width:"100%",
        borderBottomWidth:2,
        borderBottomColor:"#EEEEEE",
    },
  
    treinoMetodo:{
      color:"#C72C2C",
      fontFamily:"LeagueSpartanBold",
      fontSize:16,
      textAlign: "center",

      padding:5,
    },
    
    treinoText:{
      textAlign:"left",
      fontSize:17,
    },
    //Button
    buttonContainer:{
      width:"100%",
      alignItems:"center",
    },
  
    button:{
      backgroundColor:"#C72C2C",
      borderRadius:30,
      marginTop:10,
  
      padding:10,
      width:"50%",
      height:70,
  
      justifyContent:"center",
    },
    textButton:{
      color:"#FFFFFF",
      fontFamily:"LeagueSpartanBold",
      textAlign:"center",
      fontSize: 20,
    },

    //cronometro
    cronometro:{
      width:"100%",
      
    },

    cronometroNum:{
      color:"#FFFFFF",
      fontSize:90,
      fontFamily:"LeagueSpartanBold",
      textAlign:"center",
    },

    roundConcluido:{
      backgroundColor:"#357643",
      borderRadius:30,
  
      padding:5,
      width:"40%",
      height:50,

      marginRight:30,
      marginTop:10,
      marginBottom:10,

      alignItems:"center",
      justifyContent:"center",
      alignSelf:"flex-end",
    },

    textButtonRound:{
      color:"#FFFFFF",
      fontFamily:"LeagueSpartanBold",
      textAlign:"center",
      fontSize: 16,
    },

  });

  export default styles;