import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from "./src/components/Home";
import TreinoSelect from "./src/components/TreinoSelect";
import Cronometro from "./src/components/TreinoSelect/Cronometro";

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#232323" style="light"/>
        
      <Stack.Navigator 
        initialRouteName='Home' 
        screenOptions={{
          headerStyle: { backgroundColor: '#232323'},
          headerTintColor:"#fff",
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="TreinoSelect" component={TreinoSelect} options={{title:""}}/>    
        <Stack.Screen name="Cronometro" component={Cronometro} options={{title:""}}/> 

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
