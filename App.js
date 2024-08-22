import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home';
import Painter from './screen/Painter';
import Carpenter from './screen/Carpenter';
import Plumber from './screen/Plumber';
import Electrician from './screen/Electrician';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs();





export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
      <Stack.Screen name="Painter" component={Painter}/>
      <Stack.Screen name="Carpenter" component={Carpenter}/>
      <Stack.Screen name="Plumber" component={Plumber}/>
      <Stack.Screen name="Electrician" component={Electrician}/>
      
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}
