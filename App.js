import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from "./src/components/Home";
import Treino from "./src/components/Treino";

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
        <Stack.Screen name="Treino" component={Treino} options={{title:""}}/>
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
