import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';
const image = {uri: '/Users/mobiloitte/Move2Earn/src/images/splash.png'};
const {height, width} = Dimensions.get('screen');
const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView>
        <View style={styles.main}>
        <View style={styles.upperPart}>
        <View style={{flexDirection:'column'}}>
          <Text style={styles.text1}>Hello! Umair Siddiqui</Text>
          <Text style={styles.text2}>Let’s Move2Earn</Text>
        </View>
          <View style={styles.bell}>
          <Image source={require('/Users/mobiloitte/Move2Earn/src/images/bell.png')}  />
          </View>
          <View style={{height:height*0.08,justifyContent:'center'}}>
          <Image source={require('/Users/mobiloitte/Move2Earn/src/images/person.png')} style={styles.person} /> 
          </View>
          </View>
          <View style={styles.park}>
          <Image source={require('/Users/mobiloitte/Move2Earn/src/images/Park.png')} style={{width:352}}  /> 
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          <View style={styles.Square}>
          <ImageBackground source={require('/Users/mobiloitte/Move2Earn/src/images/Square.png')} style={{height:height*0.12,width:width*0.25,}}> 
          <View style={{height:height*0.074,justifyContent:'center'}}  >
          <Image source={require('/Users/mobiloitte/Move2Earn/src/images/Running.png')}  style={styles.Running}  /> 
          </View>
          <Text style={{color:'white',textAlign:'center'}}>
            Running
          </Text>
          </ImageBackground>
          </View>
          <View style={styles.Square}>
          <ImageBackground source={require('/Users/mobiloitte/Move2Earn/src/images/Square.png')} style={{height:height*0.12,width:width*0.25,}}> 
          <View style={{height:height*0.074,justifyContent:'center'}}  >
          <Image source={require('/Users/mobiloitte/Move2Earn/src/images/Cycling.png')}  style={styles.Running}  /> 
          </View>
          <Text style={{color:'white',textAlign:'center'}}>
           Cycling
          </Text>
          </ImageBackground>
          </View>
          <View style={styles.Square1}>
          <ImageBackground source={require('/Users/mobiloitte/Move2Earn/src/images/Square.png')} style={{height:height*0.12,width:width*0.25,}}> 
          <View style={{height:height*0.074,justifyContent:'center'}}  >
          <Image source={require('/Users/mobiloitte/Move2Earn/src/images/Walk.png')}  style={styles.Running}  /> 
          </View>
          <Text style={{color:'white',textAlign:'center'}}>
           Walking
          </Text>
          </ImageBackground>
          </View>
          
          </View>
          <View>
            <Text style={{color:'white',fontWeight:'bold',fontSize:18,height:height*0.03}}>
              Finished Tasks
            </Text>
            <Text style={{color:'white'}}>
              Day Time
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
  },
  main: {
    alignSelf: 'center',
    height: height * 1,
    width: width * 0.9,
    //backgroundColor:'red',
  },
  image: {
    height: height * 1,
    width: width * 1,

    //justifyContent: "center"
  },
  upperPart:{
    flexDirection:'row',
    height:height*0.08,//backgroundColor:'green'
  },
  text1: {
    fontWeight: 'bold',
    color: 'white',
    height: height * 0.03,
    width: width * 0.7,
    //fontSize:45

    //alignSelf:'center',
  },
  text2: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 23,
  },
  bell:{
    width:width*0.099,
    alignSelf:'center',
  },
person:{
height:35,
width:35,
alignSelf:'center',//backgroundColor:'red'
},
park:{
alignSelf:'center',
height:height*0.22,

},
Square:{
//resizeMode:'contain',
height:height*0.16,
width:width*0.34,//backgroundColor:'red'
},
Square1:{
  //resizeMode:'contain',
  height:height*0.16,
  width:width*0.25,//backgroundColor:'red'
  },

Running:{
alignSelf:'center',
//resizeMode:'contain'
},


});

export default App;
