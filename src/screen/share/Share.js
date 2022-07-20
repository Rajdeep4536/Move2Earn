import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
const Share = (props) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../assets/images/bgImage1/background.png")}
      >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={styles.image}>
          <Image
            source={require("../../assets/images/image.png")}
            styles={styles.img2}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "row",
              height: height * 0.12,
              width: width * 0.45,
              //   backgroundColor: "blue",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <View style={styles.v11}>
              <Image
                source={require("../../assets/images/icon7/Vector.png")}
                style={styles.img}
              />
            </View>
            <View style={styles.v12}>
              <Text style={{ fontWeight: "700", fontSize: 40, color: "white" }}>
                205
              </Text>
            </View>

            <View style={styles.a1}>
              <Text style={{ fontSize: 16, color: "white" }}> Step</Text>
            </View>
          </View>
          <View style={styles.a2}>
            <Text style={{ fontSize: 16, color: "white" }}> Time </Text>
          </View>

          <View style={styles.a3}>
            <Text style={{ fontSize: 40, color: "white", fontWeight: "700" }}>
              
              00:09{" "}
            </Text>
          </View>
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
                <Text style={{ fontSize: 16, color: "white" }}>Metres </Text>
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

        <View style={styles.let}>
          <ImageBackground
            style={styles.bgimage1}
            source={require("../../assets/images/rect/rect.png")}
          >
            <View style={styles.let1}>
              <TouchableOpacity onPress={() => props.navigation.navigate('One')}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  SHARE YOUR RUN
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.c1}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ fontSize: 22, color: "rgb(99,163,170)" }}>
              Back to home
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Share;

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
  img2: {
    height: height * 0.5,
    width: width * 0.7,
    // backgroundColor:'cyan',
    resizeMode:'contain',
  },
  image: {
    height: height * 0.44,
    width: width * 0.8,
    // backgroundColor: "pink",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  v1: {
    height: height * 0.1,
    width: width * 0.5,
    backgroundColor: "green",
    flexDirection: "row",
  },
  v2: {
    height: height * 0.1,
    width: width * 0.4,
    // backgroundColor: "red",
    alignSelf: "flex-end",
  },
  v11: {
    height: height * 0.05,
    width: width * 0.1,
    // backgroundColor: "red",
    //  alignSelf:'center',
    alignItems: "center",
  },
  v12: {
    height: height * 0.06,
    width: width * 0.22,
    // backgroundColor: "pink",
  },
  v13: {
    height: height * 0.04,
    width: width * 0.2,
    backgroundColor: "blue",
  },
  img: {
    height: height * 0.04,
    width: width * 0.07,
    resizeMode:'contain'
  },
  a1: {
    height: height * 0.08,
    width: width * 0.1,
    // backgroundColor: "green",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  a2: {
    height: height * 0.08,
    width: width * 0.2,
    // backgroundColor:'yellow',
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  a3: {
    height: height * 0.09,
    width: width * 0.34,
    // backgroundColor: "indigo",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  cont: {
    height: height * 0.12,
    width: width * 0.9,
    // backgroundColor: "cyan",
    alignSelf: "center",
    justifyContent: "flex-end",
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
  b2: {
    height: height * 0.027,
    width: width * 0.2,
    // backgroundColor: 'indigo',
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  bgimage1: {
    height: height * 0.112,
    width: width * 0.95,
    //  borderWidth:2
    justifyContent: "center",
    alignItems: "center",
  },
  let1: {
    height: height * 0.06,
    width: width * 0.8,
    // backgroundColor:'cyan',
    alignItems: "center",
    justifyContent: "center",
  },
  let: {
    height: height * 0.15,
    width: width * 1,
    //  backgroundColor:'red',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-end",
    // borderRadius:2,
  },
  c1: {
    height: height * 0.07,
    width: width * 0.8,
    //  backgroundColor:'indigo',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
