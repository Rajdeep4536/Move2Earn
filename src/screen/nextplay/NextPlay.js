import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
const { height, width } = Dimensions.get("window");
const NextPlay = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../assets/images/bgImage1/background.png")}
      >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={{ height: height * 0.05 }}></View>
        <View style={styles.v1}>
          <View style={styles.v11}>
            <View style={styles.arrow}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/arrow-back.png")}
                  style={styles.arrowback}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.v12}>
            <View style={styles.a1}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.v121}>
                  <Image
                    source={require("../../assets/images/sign.png")}
                    style={styles.img}
                  />
                </View>
                <View style={styles.v122}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    30/100
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                alignSelf: "center",
                height: height * 0.01,
                width: width * 0.3,
                // backgroundColor: "indigo",
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <Progress.Bar
                progress={0.3}
                width={100}
                height={5}
                color="green"
              />
            </View>
          </View>
          <View style={styles.v13}>
            <View style={styles.a2}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.y1}>
                  <Image
                    source={require("../../assets/images/sign.png")}
                    style={styles.img1}
                  />
                </View>
                <View style={styles.y2}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    15/20
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                alignSelf: "center",
                height: height * 0.01,
                width: width * 0.3,
                // backgroundColor: "indigo",
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <Progress.Bar
                progress={0.3}
                width={100}
                height={5}
                color="green"
              />
            </View>
          </View>
          <View style={styles.v14}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/men/men.png")}
                styles={styles.image}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.v2}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Umair Siddiqui
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.v21}>
            <Text style={{ fontSize: 16, color: "white" }}> Weight</Text>
          </View>
          <View style={styles.v26}>
            <View style={styles.v22}>
              <Text
                style={{ fontSize: 16, color: "white", textAlign: "center" }}
              >
                65 kG
              </Text>
            </View>
          </View>
          <View style={styles.v23}>
            <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>
              Male
            </Text>
          </View>

          <View style={styles.v24}>
            <Text style={{ fontSize: 16, color: "white" }}> Height</Text>
          </View>
          <View style={styles.v31}>
            <View style={styles.v29}>
              <Text
                style={{ fontSize: 16, color: "white", textAlign: "center" }}
              >
                65.5 CM
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.c5}>
          <Image
            source={require("../../assets/images/image.png")}
            style={styles.img2}
          />
        </View>

        <View style={styles.b2}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.b21}>
              <View
                style={{
                  height: height * 0.1,
                  width: width * 0.28,
                  // backgroundColor: 'yellow',
                  justifyContent: "center",
                  // alignItems:'center'
                }}
              >
                <Image
                  source={require("../../assets/images/circle/circle.png")}
                  resizeMode="contain"
                  style={{ height: "240%", width: "150%" }}
                />
              </View>
              <View
                style={{
                  height: height * 0.1,
                  width: width * 0.25,
                  // backgroundColor: 'cyan',
                  justifyContent: "center",
                  position: "absolute",
                  alignItems: "center",
                  alignItems: "flex-end",
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/shoes/image.png")}
                    resizeMode="contain"
                    style={{ height: 50, width: 60 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.b22}>
              <ImageBackground
                source={require("../../assets/images/outlinecircle/outlinecircle.png")}
                style={styles.outline}
              >
                <View style={styles.b25}>
                  <TouchableOpacity  onPress={() => navigation.navigate('Resume')}>
                    <Text
                      style={{
                        fontSize: 26,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      START
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.b23}>
              <View
                style={{
                  height: height * 0.14,
                  width: width * 0.3,
                  // backgroundColor: 'yellow',
                  justifyContent: "center",
                  // alignself:'center',
                  // alignItems:'center'
                }}
              >
                <Image
                  source={require("../../assets/images/circle/circle.png")}
                  resizeMode="contain"
                  style={{ height: "240%", width: "150%" }}
                />
              </View>
              <View
                style={{
                  height: height * 0.13,
                  width: width * 0.24,
                  //   backgroundColor: 'cyan',
                  justifyContent: "center",
                  position: "absolute",
                  alignItems: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ fontSize: 14, color: "white" }}> GPS </Text>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/network/net.png")}
                    resizeMode="contain"
                    style={{ height: 20, width: 30 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NextPlay;

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
    height: height * 0.12,
    width: width * 1,
    // backgroundColor: "red",
    flexDirection: "row",
  },
  v11: {
    height: height * 0.08,
    width: width * 0.17,
    // backgroundColor: "yellow",
    // alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  v12: {
    height: height * 0.08,
    width: width * 0.3,
    // backgroundColor: "pink",
    // alignSelf: "flex-end",
    // alignItems:'flex-end'
  },
  v13: {
    height: height * 0.08,
    width: width * 0.3,
    // backgroundColor: "cyan",
    // alignSelf: "flex-end",
  },
  v14: {
    height: height * 0.08,
    width: width * 0.27,
    // backgroundColor: "green",
    //  alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    height: height * 0.07,
    width: width * 0.15,
    // backgroundColor: "black",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowback: {
    height: height * 0.01,
    width: width * 0.07,
    alignItems: "center",
    justifyContent: "center",
  },
  a1: {
    height: height * 0.07,
    width: width * 0.3,
    // backgroundColor:'green',
    alignSelf: "center",
    justifyContent: "center",
  },
  v121: {
    // height:height*0.03,
    //     width:width*0.1,
    backgroundColor: "white",
    // alignSelf:'center',
    // alignContent:'center',
    //  alignSelf:'flex-start',
    justifyContent: "center",
    // alignItems:'center',
    borderRadius: 30,
    height: 30,
    width: 30,
  },
  img: {
    height: 15,
    width: 12,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  v122: {
    height: height * 0.03,
    width: width * 0.2,
    // backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center",
  },
  a2: {
    height: height * 0.07,
    width: width * 0.3,
    // backgroundColor:'green',
    alignSelf: "center",
    justifyContent: "center",
  },
  y1: {
    // height:height*0.03,
    //     width:width*0.1,
    backgroundColor: "white",
    // alignSelf:'center',
    // alignContent:'center',
    //  alignSelf:'flex-start',
    justifyContent: "center",
    // alignItems:'center',
    borderRadius: 30,
    height: 30,
    width: 30,
  },
  img1: {
    height: 15,
    width: 12,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  y2: {
    height: height * 0.03,
    width: width * 0.2,
    // backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    //  height:height*0.05,
    //  width:width*0.1,
    height: 40,
    width: 40,
  },
  v2: {
    height: height * 0.07,
    width: width * 0.7,
    backgroundColor: "#3587C1",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  v21: {
    height: height * 0.08,
    width: width * 0.21,
    //  backgroundColor:'red',
    alignItems: "center",
    justifyContent: "center",
  },
  v22: {
    height: height * 0.05,
    width: width * 0.2,
    backgroundColor: "rgb(3,209,199)",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
  },
  v23: {
    height: height * 0.08,
    width: width * 0.15,
    // backgroundColor: 'pink',
    justifyContent: "center",
    alignItems: "flex-end",
  },
  v24: {
    height: height * 0.08,
    width: width * 0.2,
    //  backgroundColor: 'green',
    alignSelf: "flex-end",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  v26: {
    height: height * 0.08,
    width: width * 0.22,
    //backgroundColor:'red',
    alignItems: "center",
    justifyContent: "center",
    // alignSelf:'flex-start',
  },
  v31: {
    height: height * 0.08,
    width: width * 0.22,

    alignItems: "center",
    justifyContent: "center",
  },
  v29: {
    height: height * 0.05,
    width: width * 0.2,
    backgroundColor: "rgb(150,77,182)",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
  },

  c5: {
    height: height * 0.44,
    width: width * 1,
    //   backgroundColor:'red',
    alignSelf: "center",
  },
  img2: {
    height: height * 0.45,
    width: width * 1,
    resizeMode:'contain'
  },
  b2: {
    height: height * 0.17,
    width: width * 1,
    // backgroundColor: 'indigo',
    // alignSelf: 'center',

    justifyContent: "flex-end",
    alignItems: "center",
  },
  b21: {
    height: height * 0.14,
    width: width * 0.32,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent:'space-between',
    justifyContent: "center",
  },
  b22: {
    height: height * 0.15,
    width: width * 0.33,
    // backgroundColor: 'green',
    // justifyContent:'center',
    // alignItems:'center',
    // alignSelf:'center'
  },
  b23: {
    height: height * 0.14,
    width: width * 0.3,
    // backgroundColor: 'red',
    // justifyContent:'flex-start',
    alignSelf: "flex-start",
  },
  outline: {
    height: height * 0.19,
    width: width * 0.33,
  },
  b25: {
    height: height * 0.18,
    width: width * 0.25,
    //  backgroundColor: 'pink',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    //  position:'absolute',
  },
});
