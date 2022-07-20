import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { IMAGEPATH } from "../Icon/Icon";
const { height, width } = Dimensions.get("window");
const LocationPage = (props) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.ImageBackground}
        source={IMAGEPATH.SPLASH_BACKGROUND}
      >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={styles.fakeView}></View>
        <View style={styles.ImageVIew}>
          <ImageBackground
            style={styles.LOCATION_BG}
            source={IMAGEPATH.LOCATION_BG}
          >
            <View style={styles.fakeView1}></View>
            <View style={styles.HeadingView}>
              <Text style={styles.headingText}>Use your location</Text>
            </View>
            <View style={styles.paraTextView}>
              <Text style={styles.paraTextStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Velit
                fusce mauris augue urna, elit lacus sit lacus.
              </Text>
            </View>
            <View style={styles.AllowButton}>
              <TouchableOpacity onPress={()=>props.navigation.navigate('HomeScreen1')}>
                <ImageBackground
                  style={styles.BUTTON_Border}
                  source={IMAGEPATH.BUTTON_Border}
                >
                  <View style={styles.textButtonVIew}>
                    <Text style={styles.textButton}>Allow</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LocationPage;

const styles = StyleSheet.create({
  textButtonVIew: {
    height: height * 0.05,
    width: width * 0.12,
   // borderWidth: 1,
    justifyContent:"center"
  },
  textButton: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 23,
  },
  BUTTON_Border: {
    height: height * 0.06,
    width: width * 0.28,
    alignSelf: "center",
   // justifyContent: "center",
    alignItems: "center",
  },

  headingText: {
    fontSize: 30,
    color: "#FFFFFF",
    textAlign: "center",
  },
  LOCATION_BG: {
    height: height * 0.35,
    width: width * 0.99,
    alignSelf: "center",
    // justifyContent:'center'
  },
  mainContainer: {
    height: "100%",
    width: "100%",
    // justifyContent:'center'
  },
  ImageBackground: {
    height: "100%",
    width: "100%",
    //justifyContent:'center'
  },
  fakeView: {
    height: height * 0.3,
  },
  fakeView1: {
    height: height * 0.05,
    width: width * 0.35,
    alignSelf: "center",
    // borderWidth:1
  },
  ImageVIew: {
    height: height * 0.35,
    width: width * 0.95,
   // borderWidth: 2,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
  HeadingView: {
    height: height * 0.06,
    width: width * 0.55,
    // borderWidth:2,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
  paraTextView: {
    height: height * 0.11,
    width: width * 0.65,
    //  borderWidth:2,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
  paraTextStyle: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "400",
    lineHeight: 23,
  },
  AllowButton: {
    height: height * 0.08,
    width: width * 0.39,
    // borderWidth: 2,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
});
