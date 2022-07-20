import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
const Resume = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../assets/images/bgImage1/background.png")}
      >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.v1}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.v11}>
                <Image
                  source={require("../../assets/images/icon7/Vector.png")}
                  style={styles.img}
                />
              </View>
              <View style={styles.v12}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 24, color: "white" }}
                >
                  205
                </Text>
              </View>
            </View>
            <View style={styles.walk}>
              <Text style={{ fontSize: 16, color: "white" }}>Walking </Text>
            </View>
          </View>

          <View style={styles.v2}>
            <View style={styles.v21}>
              <Text style={{ fontSize: 16, color: "white" }}> GPS</Text>
            </View>
            <View style={styles.v22}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/network/net.png")}
                  style={styles.net}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ height: 40, width: 30 }}></View>
        <View style={styles.c1}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={styles.c11}>
              <Image
                source={require("../../assets/images/clock/clock.png")}
                style={styles.imageclok}
              />
            </View>
            <View style={styles.c12}>
              <Text
                style={{ fontSize: 40, color: "white", fontWeight: "bold" }}
              >
                00:09
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.image}>
        <TouchableOpacity>
      
          <Image
            source={require("../../assets/images/map2/map2.png")}
            styles={styles.img2}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.cont}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.cont1}>
              <View style={styles.b1}>
                <Text
                  style={{
                    fontSize: 40,
                    color: "rgb(0,251,184)",
                    fontWeight: "bold",
                  }}
                >
                  13
                </Text>
              </View>
              <View style={styles.b2}>
                <Text style={{ fontSize: 16, color: "white" }}>Meters </Text>
              </View>
            </View>
            <View style={styles.cont2}>
              <View style={styles.b11}>
                <Text
                  style={{ fontSize: 34, color: "white", fontWeight: "bold" }}
                >
                  0.00
                </Text>
              </View>
              <View style={styles.b12}>
                <Text style={{ fontSize: 16, color: "white" }}>km/h </Text>
              </View>
            </View>
            <View style={styles.cont3}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.b21}>
                  <Text
                    style={{
                      fontSize: 34,
                      color: "rgb(236,58,209)",
                      fontWeight: "bold",
                    }}
                  >
                    0.00
                  </Text>
                  <Text style={{ fontSize: 14, color: "white" }}>
                    Earned SET
                  </Text>
                </View>

                <View
                  style={{
                    height: height * 0.08,
                    width: width * 0.1,
                    // backgroundColor:'green',
                    justifyContent: "center",
                  }}
                >
                  <View style={styles.imt}>
                    <Image
                      source={require("../../assets/images/dollar/Vector.png")}
                      style={styles.dollar}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: height * 0.17,
            width: width * 0.8,
            // backgroundColor: "pink",
            alignSelf:'center',
            alignItems:'center', 
            justifyContent:'space-around'
          }}
        >
          <View style={styles.a22}>
            <ImageBackground
              source={require("../../assets/images/outlinecircle/outlinecircle.png")}
              style={styles.outline}
            >
              <View style={styles.a25}>
                <TouchableOpacity onPress={() => navigation.navigate('Share')}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Resume
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.a23}>
            <ImageBackground
              source={require("../../assets/images/redcircle/redcircle.png")}
              style={styles.outline1}
            >
              <View style={styles.a27}>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Stop
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Resume;

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
    width: width * 0.4,
    // backgroundColor:'red',
    // alignSelf:'center',
    justifyContent: "flex-end",
    alignItems: "center",
  },
  v11: {
    height: height * 0.04,
    width: width * 0.1,
    // backgroundColor: 'green',
    // alignSelf:'center',
    // justifyContent:'center',
    // alignItems:'center',
  },
  img: {
    height: height * 0.04,
    width: width * 0.06,
    resizeMode:'contain'
  },
  v12: {
    height: height * 0.04,
    width: width * 0.2,
    // backgroundColor: 'cyan',
    alignItems: "center",
  },
  walk: {
    height: height * 0.03,
    width: width * 0.3,
    // backgroundColor:'green',
    alignItems: "flex-start",
    justifyContent: "center",
  },
  v21: {
    height: height * 0.04,
    width: width * 0.2,
    // backgroundColor: 'green',
    //  alignSelf:'center
    // alignItems:'center',
    justifyContent: "center",
    // alignSelf:'center'
  },
  v22: {
    height: height * 0.04,
    width: width * 0.2,
    // backgroundColor:'red',
  },
  v2: {
    height: height * 0.12,
    width: width * 0.6,
    // backgroundColor: 'pink',
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  net: {
    height: height * 0.034,
    width: width * 0.078,
    // backgroundColor: 'indigo',
    resizeMode:'contain',
  },
  c1: {
    height: height * 0.09,
    width: width * 0.92,
    backgroundColor: "rgb(43,60,53)",
    alignSelf: "center",
    borderRadius: 10,
  },
  c11: {
    height: height * 0.06,
    width: width * 0.2,
    // backgroundColor: 'red',
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  c12: {
    height: height * 0.09,
    width: width * 0.4,
    //  backgroundColor: 'pink',
    justifyContent: "center",
    // alignSelf:'flex-end',
    alignItems: "center",
  },
  image: {
    height: height * 0.44,
    width: width * 0.8,
    // backgroundColor: 'pink',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  img2: {
    height: height * 0.1,
    width: width * 0.3,
    backgroundColor: "cyan",
    resizeMode:'contain',
  },
  cont: {
    height: height * 0.1,
    width: width * 0.9,
    // backgroundColor: 'cyan',
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  cont1: {
    height: height * 0.09,
    width: width * 0.28,
    backgroundColor: "rgb(40,77,48)",
    borderRadius: 8,
  },
  cont2: {
    height: height * 0.09,
    width: width * 0.28,
    backgroundColor: "rgb(40,77,48)",
    borderRadius: 8,
  },
  cont3: {
    height: height * 0.09,
    width: width * 0.28,
    backgroundColor: "rgb(40,77,48)",
    borderRadius: 8,
  },
  b1: {
    height: height * 0.06,
    width: width * 0.15,
    // backgroundColor: 'pink',
    alignSelf: "center",
    justifyContent: "center",
  },
  b2: {
    height: height * 0.027,
    width: width * 0.2,
    // backgroundColor: 'indigo',
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  b11: {
    height: height * 0.058,
    width: width * 0.25,
    // backgroundColor: 'pink',
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  b12: {
    height: height * 0.027,
    width: width * 0.2,
    // backgroundColor: 'indigo',
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  b21: {
    height: height * 0.09,
    width: width * 0.21,
    //  backgroundColor: 'pink',
    // alignSelf: 'center',
    justifyContent: "center",
    alignItems: "center",
  },
  b22: {
    height: height * 0.027,
    width: width * 0.22,
    // backgroundColor: 'indigo',
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  imageclok: {
    height: height * 0.045,
    width: width * 0.1,
    // backgroundColor: 'blue',
    justifyContent: "center",
    alignSelf: "flex-end",
    resizeMode:'contain',
    // alignItems:"center",
  },
  a2: {
    height: height * 0.15,
    width: width * 1,
    // backgroundColor: 'indigo',
    // alignSelf: 'center',
    // justifyContent: 'flex-start',
    justifyContent: "space-between",
  },
  imt: {
    height: 22,
    width: 20,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  dollar: {
    height: 10,
    width: 13,
  },
  a22: {
    height: height * 0.15,
    width: width * 0.33,
    // backgroundColor: "green",
    //  justifyContent:'center',
    // alignItems:'center',
    alignSelf: "center",
  },
  outline: {
    height: height * 0.19,
    width: width * 0.33,
  },
  a25: {
    height: height * 0.17,
    width: width * 0.32,
    //  backgroundColor: 'pink',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    //  position:'absolute',
  },
  a23: {
    height: height * 0.16,
    width: width * 0.33,
    // backgroundColor: "blue",
  },
  a27: {
    height: height * 0.17,
    width: width * 0.32,
    //  backgroundColor: 'pink',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  outline1:
  {
    height: height * 0.19,
    width: width * 0.33,
  }
});
