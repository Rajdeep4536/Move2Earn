import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
const Detailshare = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../assets/images/bgImage1/background.png")}
      >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.v11}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/arrow-back.png")}
                style={styles.arrowback}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.v12}>
            <Text style={{ fontWeight: "bold", fontSize: 28, color: "white" }}>
              10/06/2022
            </Text>
          </View>
        </View>
        <View style={styles.v2}>
          <Image
            source={require("../../assets/images/map/map1.png")}
            style={styles.img}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={styles.v3}>
            <Image
              source={require("../../assets/images/icon1/Vector.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.v31}>
            <Text style={{ fontWeight: "bold", fontSize: 22, color: "white" }}>
              Distance
            </Text>
          </View>
          <View style={styles.v32}>
            <Text style={{ fontSize: 22, color: "white" }}>0 KM</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={styles.v4}>
            <Image
              source={require("../../assets/images/icon5/vec.png")}
              style={styles.image1}
            />
          </View>
          <View style={styles.v41}>
            <Text style={{ fontWeight: "bold", fontSize: 22, color: "white" }}>
              Average Speed
            </Text>
          </View>
          <View style={styles.v42}>
            <Text style={{ fontSize: 22, color: "white" }}>0 km/h</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={styles.v5}>
            <Image
              source={require("../../assets/images/icon3/Vector.png")}
              style={styles.image2}
            />
          </View>
          <View style={styles.v51}>
            <Text style={{ fontWeight: "bold", fontSize: 22, color: "white" }}>
              Time
            </Text>
          </View>
          <View style={styles.v52}>
            <Text style={{ fontSize: 22, color: "white" }}>00:03:31</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={styles.v6}>
            <Image
              source={require("../../assets/images/icon7/Vector.png")}
              style={styles.image3}
            />
          </View>
          <View style={styles.v61}>
            <Text style={{ fontWeight: "bold", fontSize: 22, color: "white" }}>
              Steps
            </Text>
          </View>
          <View style={styles.v62}>
            <Text style={{ fontSize: 22, color: "white" }}>205</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={styles.v7}>
            <Image
              source={require("../../assets/images/icon6/img.png")}
              style={styles.image4}
            />
          </View>
          <View style={styles.v71}>
            <Text style={{ fontWeight: "bold", fontSize: 22, color: "white" }}>
              SET
            </Text>
          </View>
          <View style={styles.v72}>
            <Text style={{ fontSize: 22, color: "white" }}>102</Text>
          </View>
        </View>
        <View style={styles.imgb}>
          <ImageBackground
            style={styles.bgimage1}
            source={require("../../assets/images/rect/rect.png")}
          >
            <View style={styles.let1}>
              <TouchableOpacity
                onPress={() => navigation.navigate("StartPlay")}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  SHARE
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
    </ScrollView>
  );
};

export default Detailshare;

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
  v11: {
    height: height * 0.1,
    width: width * 0.2,
    // backgroundColor: 'red',
    alignSelf: "flex-start",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  arrowback: {
    height: height * 0.02,
    width: width * 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  v12: {
    height: height * 0.1,
    width: width * 0.7,
    // backgroundColor: 'pink',
    alignItems: "center",
    justifyContent: "flex-end",
  },
  v2: {
    height: height * 0.3,
    width: width * 1,
    // backgroundColor: 'cyan',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    // borderRadius:10,
  },
  img: {
    height: height * 0.2,
    width: width * 0.9,
    borderRadius: 20,
  },
  v3: {
    height: height * 0.06,
    width: width * 0.14,
    // backgroundColor: 'pink',
    alignItems: "flex-end",
    justifyContent: "center",
    //  alignSelf:'center'
  },
  v31: {
    height: height * 0.06,
    width: width * 0.33,
    // backgroundColor: 'green',
    justifyContent: "center",
  },
  v32: {
    height: height * 0.06,
    width: width * 0.3,
    // backgroundColor: 'red',
    // alignSelf:'center'
    justifyContent: "center",
    alignItems: "flex-end",
  },
  image: {
    height: height * 0.036,
    width: width * 0.06,
    // backgroundColor: 'red',
    //  justifyContent:'center'
  },
  v4: {
    height: height * 0.06,
    width: width * 0.14,
    // backgroundColor: 'indigo',
    justifyContent: "center",
    alignItems: "flex-end",
    //     alignItems:'flex-end',
    //   justifyContent:'center',
  },
  v41: {
    height: height * 0.06,
    width: width * 0.45,
    // backgroundColor: 'indigo',
    justifyContent: "center",
  },
  v42: {
    height: height * 0.06,
    width: width * 0.2,
    // backgroundColor: 'red',
    // alignSelf:'center'
    justifyContent: "center",
    alignItems: "flex-end",
  },
  image1: {
    height: height * 0.03,
    width: width * 0.04,
    //  backgroundColor:'red',
  },
  v5: {
    height: height * 0.06,
    width: width * 0.14,
    // backgroundColor: 'red',
    justifyContent: "center",
    alignItems: "flex-end",
  },
  v51: {
    height: height * 0.06,
    width: width * 0.34,
    // backgroundColor: 'indigo',
    justifyContent: "center",
  },
  v52: {
    height: height * 0.06,
    width: width * 0.3,
    // backgroundColor: 'green',
    // alignSelf:'center'
    justifyContent: "center",
    alignItems: "flex-end",
  },
  image2: {
    height: height * 0.02,
    width: width * 0.05,
    // backgroundColor: 'indigo',
  },
  v6: {
    height: height * 0.06,
    width: width * 0.14,
    // backgroundColor: 'green',
    justifyContent: "center",
    alignItems: "flex-end",
  },
  v61: {
    height: height * 0.06,
    width: width * 0.34,
    // backgroundColor: 'indigo',
    justifyContent: "center",
  },
  v62: {
    height: height * 0.06,
    width: width * 0.3,
    // backgroundColor: 'green',
    // alignSelf:'center'
    justifyContent: "center",
    alignItems: "flex-end",
  },
  image3: {
    height: height * 0.03,
    width: width * 0.05,
    // backgroundColor: 'indigo',
  },
  v7: {
    height: height * 0.06,
    width: width * 0.14,
    // backgroundColor: 'green',
    justifyContent: "center",
    alignItems: "flex-end",
  },
  v71: {
    height: height * 0.06,
    width: width * 0.34,
    // backgroundColor: 'indigo',
    justifyContent: "center",
  },
  v72: {
    height: height * 0.06,
    width: width * 0.3,
    // backgroundColor: 'green',
    // alignSelf:'center'
    justifyContent: "center",
    alignItems: "flex-end",
  },
  image4: {
    height: height * 0.026,
    width: width * 0.06,
    // backgroundColor: 'indigo',
  },
  bgimage1: {
    height: height * 0.112,
    width: width * 0.95,
    //  borderWidth:2
    justifyContent: "center",
    alignItems: "center",
    resizeMode:'contain',
  },
  let1: {
    height: height * 0.07,
    width: width * 0.8,
    // backgroundColor:'cyan',
    alignItems: "center",
    justifyContent: "center",
  },
  imgb: {
    height: height * 0.2,
    width: width * 1,
    //  backgroundColor:'red',
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
