import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import One from './src/screens/One';
import Two from './src/screens/Two';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Two" component={Two} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
