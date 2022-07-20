// import * as React from 'react';
// import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Splash from '../screens/Splash/Splash';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';

import { createStackNavigator } from '@react-navigation/stack';
import ForgetPassword from '../screens/ForgetPassword/ForgetPassword';
import ResetPassword from '../screens/ResetPassword/ResetPassword';

const Stack = createStackNavigator();

function Stack() {

  return (
   
      <Stack.Navigator screenOptions={{
        headerShown: false}}>
       
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Register" component={Register} />



      </Stack.Navigator>

   

  );
}

export default Stack;