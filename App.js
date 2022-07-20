import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Splash from './src/screen/Splash/Splash';
import Detailshare from './src/screen/DetailShare/Detailshare';
import StartPlay from './src/screen/StartPlay';
import CountDown from './src/screen/Countdown/CountDown';
import NextPlay from './src/screen/nextplay/NextPlay';
import Resume from './src/screen/resume/Resume';
import Setting from './src/screen/setting/Setting';
import One from './src/screen/one/One';
import Share from './src/screen/share/Share';
import Edit from './src/screen/setting/edit/Edit';
import Logout from './src/screen/logout/Logout';
import Play from './src/screen/play/Play';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sportlog from './src/screen/sportlog/Sportlog';
import LocationPage from './src/screen/LocationPage/LocationPage';
import Register from './src/screen/Register/Register';
import ResetPassword from './src/screen/ResetPassword/ResetPassword';
import HomeScreen from './src/screen/HomeScreen/Home';
import SelectGender from './src/screen/SelectGender/SelectGender';
import ForgetPassword from './src/screen/ForgetPassword/ForgetPassword';
import HomeScreen1 from './src/screen/HomeScreen/HomeScreen1';
//import Login from './src/screen/Login/Login';
import MyShoes from './src/screen/MyShoes';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="HomeScreen1"
          component={HomeScreen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyShoes"
          component={MyShoes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detailshare"
          component={Detailshare}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LocationPage"
          component={LocationPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectGender"
          component={SelectGender}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StartPlay"
          component={StartPlay}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Play"
          component={Play}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CountDown"
          component={CountDown}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NextPlay"
          component={NextPlay}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Resume"
          component={Resume}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Share"
          component={Share}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="One"
          component={One}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Logout"
          component={Logout}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sportlog"
          component={Sportlog}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

