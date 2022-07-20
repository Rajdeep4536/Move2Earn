import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image , 
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
const One = (props) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../assets/images/map3/mapbg.png")}
      >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={styles.v1}></View>
        <View style={styles.v2}>
          <ImageBackground
            source={require("../../assets/images/2/two.png")}
            style={styles.two}
          >
            <View style={styles.v21}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Setting')}>
           
            <Image source={require('../../assets/images/cross/Vector.png')}
            style={styles.vector}
            />
            </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default One;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    //  justifyContent:'center',
    // alignItems:'center',
    justifyContent: "center",
    // alignSelf:'center'
  },
  bgImage: {
    height: height * 1,
    width: width * 1,
  },
  v1: {
    height: height * 0.85,
    width: width * 0.8,
    // backgroundColor: "red",
    alignSelf: "center",
  },
  v2: {
    height: height * 0.1,
    width: width * 0.8,
    // backgroundColor: "pink",
    alignSelf: "center",
  },
  two: {
    height: height * 0.1,
    width: width * 0.4,
    // backgroundColor: "cyan",
    alignSelf: "center",
    alignItems:'center', 
    justifyContent:'center'

  },
  v21:
  {
     height:height*0.04,
     width:width*0.12,
    //  backgroundColor:'blue', 
     alignItems:'center', 
     justifyContent:'center',
    
  }, 
  vector:
{
     height:height*0.03,
     width:width*0.06,

}

});
