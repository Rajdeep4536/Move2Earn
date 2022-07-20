import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
const CountDown = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../../assets/images/bgImage1/background.png')}>

        <StatusBar barStyle="light-content">
        </StatusBar>
        <View style={styles.v1}>
        <ImageBackground source={require('../../assets/images/cirecle1/circle1.png')}
        style={styles.circle1}
        />
        <View style={styles.v2}>
        <TouchableOpacity  onPress={() => navigation.navigate('NextPlay')}>
        <Image source={require('../../assets/images/1/1.png')}
        style={styles.a1}/>
        </TouchableOpacity>
        </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CountDown;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    //  justifyContent:'center',
    // alignItems:'center',
    justifyContent: 'center',
    // alignSelf:'center'
  },
  bgImage: {
    height: height * 1,
    width: width * 1,
  },
  v1:
  {
     height:height * 0.9,
     width: width * 0.4,
    //  backgroundColor:'red',
     alignSelf:'center',
     alignItems:'center',
     justifyContent:'center'
  }, 
  circle1:
  {
     height:height*0.53,
     width:width*0.934,
  }, 
  v2:
  {
     height:height*0.2,
     width:width*0.34,
    //  backgroundColor:'pink',
     position:'absolute',
     justifyContent:'center',
     alignItems:'center',
  }, 
  a1:
  {
     height:height*0.14,
     width:width*0.23,

  }
});
