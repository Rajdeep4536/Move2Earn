import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
const images = [
  {
    image: require("../../assets/images/shoe1/shoe.png"),
    name: "10 Jun",
    number: "2.3 KM",
    naam: "00:03:31",
    naam1:"0.7 Km/h",
  },
  {
    image: require('../../assets/images/shoe1/shoe.png'),
    name: '10 jun',
    number: '2.3 KM',
   naam:'00:03:31',
   naam1:"0.7 Km/h",
  },
  {
    image: require('../../assets/images/shoe1/shoe.png'),
    name: '10 jun',
    number: '2.3 KM',
   naam:'00:03:31',
   naam1:"0.7 Km/h",
  },
  {
    image: require('../../assets/images/shoe1/shoe.png'),
    name: '10 jun',
    number: '2.3 KM',
   naam:'00:03:31',
   naam1:"0.7 Km/h",
  },
];
const Sportlog = (props) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../assets/images/bgImage1/background.png")}
      >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={{ height: height * 0.05 }}></View>
        <View style={styles.v11}>
          <View style={styles.arrow}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
              <Image
                source={require("../../assets/images/arrow-back.png")}
                style={styles.arrowback}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.a1}>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
              Sport Log
            </Text>
          </View>
        </View>
        <View style={styles.v1}>
          <View style={styles.b1}>
            <ImageBackground
              source={require("../../assets/images/bg2/bg2.png")}
              style={styles.bg2}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={styles.c1}>
                  <Text
                    style={{ fontSize: 38, color: "white", fontWeight: "bold" }}
                  >
                    {" "}
                    7.02
                  </Text>
                </View>
                <View style={styles.c2}>
                  <Text style={{ fontSize: 16, color: "white" }}> km</Text>
                </View>
              </View>
              <View style={styles.c3}>
                <Text
                  style={{ fontSize: 18, color: "white", fontWeight: "400" }}
                >
                  Total Kms
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.b2}>
            <ImageBackground
              source={require("../../assets/images/bg2/bg2.png")}
              style={styles.bg21}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={styles.c11}>
                  <Text
                    style={{ fontSize: 38, color: "white", fontWeight: "bold" }}
                  >
                    {" "}
                    34
                  </Text>
                </View>
                <View style={styles.c12}>
                  <Text style={{ fontSize: 16, color: "white" }}> Time</Text>
                </View>
              </View>
              <View style={styles.c13}>
                <Text
                  style={{ fontSize: 18, color: "white", fontWeight: "400" }}
                >
                  Total Run
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.v2}>
          <ImageBackground
            source={require("../../assets/images/bg3/bg3.png")}
            style={styles.bg3}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.d1}>
                <Text
                  style={{ fontSize: 38, color: "white", fontWeight: "bold" }}
                >
                  {" "}
                  02.20
                </Text>
              </View>
              <View style={styles.d2}>
                <Text style={{ fontSize: 14, color: "white" }}> Hour</Text>
              </View>

              <View style={styles.d3}>
                <Text
                  style={{ fontSize: 18, color: "white", fontWeight: "400" }}
                >
                  Total Time
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.v3}>
          <Text style={{ fontSize: 26, color: "white", fontWeight: "700" }}>
            {" "}
            Sport Log{" "}
          </Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          //   horizontal
          data={images}
          renderItem={({ item }) => {
            return (
              <>
              <View style={styles.flat}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.list}>
                  <TouchableOpacity>
                    <Image
                      source={require("../../assets/images/shoe1/shoe.png")}
                      style={styles.shoe}
                    />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.list1}>
                    <View style={styles.both}>
                      <Text style={styles.name}> {item.name}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent:'space-between'}}>
                      <View style={styles.both1}>
                        <Text style={styles.naam}> {item.number}</Text>
                      </View>
                      <View style={styles.both2}>
                      <TouchableOpacity>
                        <Image
                          source={require("../../assets/images/tik/Vector.png")}
                          style={styles.tik}
                        />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent:'space-between'}}>
                      <View style={styles.last1}>
                        <Text style={styles.naam1}> {item.naam}</Text>
                      </View>
                      <View style={styles.last2}>
                      <Text style={styles.naam1}> {item.naam1}</Text>
                      </View>
                    </View>
                  </View>
                </View>
               
              </View>
             <View style={{height:10,}}>
             </View>
             </>
            );
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default Sportlog;

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
    height: height * 0.08,
    width: width * 0.9,
    // backgroundColor: "yellow",
    // alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  arrow: {
    height: height * 0.07,
    width: width * 0.15,
    // backgroundColor: "red",
    alignSelf: "flex-end",
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
    width: width * 0.47,
    // backgroundColor: "pink",
    justifyContent: "center",
    // alignItems: "center",
  },
  v1: {
    height: height * 0.18,
    width: width * 1,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  b1: {
    height: height * 0.17,
    width: width * 0.4,
    // backgroundColor: "pink",
    justifyContent: "center",
  },
  b2: {
    height: height * 0.17,
    width: width * 0.4,
    // backgroundColor: "blue",
    justifyContent: "center",
  },
  bg2: {
    height: height * 0.16,
    width: width * 0.4,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  c1: {
    height: height * 0.06,
    width: width * 0.25,
    // backgroundColor:'indigo',
    alignItems: "center",
  },
  c2: {
    height: height * 0.05,
    width: width * 0.1,
    // backgroundColor:'blue',
    justifyContent: "flex-end",
    alignItems: "center",
  },
  c3: {
    height: height * 0.05,
    width: width * 0.24,
    // backgroundColor:'red',
    justifyContent: "center",
  },
  bg21: {
    height: height * 0.16,
    width: width * 0.4,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  c11: {
    height: height * 0.06,
    width: width * 0.25,
    // backgroundColor:'indigo',
    alignItems: "center",
  },
  c12: {
    height: height * 0.05,
    width: width * 0.1,
    // backgroundColor:'blue',
    justifyContent: "flex-end",
    alignItems: "center",
  },
  c13: {
    height: height * 0.05,
    width: width * 0.24,
    // backgroundColor:'red',
    justifyContent: "center",
  },
  v2: {
    height: height * 0.15,
    width: width * 1,
    // backgroundColor: "pink",
    // flexDirection: "row",
    //justifyContent: "center",
    alignItems: "center",
  },
  bg3: {
    height:98,
    width: 352,
    //  borderRadius:50,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'blue'
  },
  d1: {
    height: height * 0.06,
    width: width * 0.34,
    // backgroundColor:'indigo',
    alignItems: "flex-end",
    // justifyContent:'flex-start',
  },
  d2: {
    height: height * 0.05,
    width: width * 0.11,
    // backgroundColor:'blue',
    justifyContent: "flex-end",
    alignItems: "center",
  },
  d3: {
    height: height * 0.05,
    width: width * 0.34,
    // backgroundColor:'red',
    justifyContent: "center",
    alignItems: "center",
  },
  v3: {
    height: height * 0.05,
    width: width * 0.45,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  
  name: {
    fontWeight: "400",
    fontSize: 18,
    color: "white",
  },
  image: {
    height: height * 0.15,
    width: width * 0.3,
    // backgroundColor: "red",
  },
  naam: {
    fontSize: 18,
    color: "white",
    fontWeight: "700",
  },
  naam1: {
    fontWeight: "400",
    fontSize: 18,
    color: "white",
  },
  both: {
    height: height * 0.06,
    // backgroundColor: "indigo",
    justifyContent: "center",
  },
  both1: {
    height: height * 0.03,
    width: width * 0.2,
    // backgroundColor: "blue",
  },
  sub: {
    height: height * 0.045,
    backgroundColor: "yellow",
    justifyContent: "center",
  },
  all: {
    height: height * 0.1,
    width: width * 0.4,
    // backgroundColor: "pink",
  },
  flat: {
    height: height * 0.15,
    width: width * 1,
    backgroundColor: "rgb(43,81,50)",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list: {
    height: height * 0.14,
    width: width * 0.34,
    // backgroundColor: "red",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  list1: {
    height: height * 0.14,
    width: width * 0.5,
    // backgroundColor: "pink",
  },
  // list11:
  // {
  //    height:height*0.077,
  //    width:width*0.45,
  //    backgroundColor:'green'
  // }
  shoe: {
    height: height * 0.124,
    width: width * 0.3,
    backgroundColor: "rgb(44,90,51)",
    borderRadius:20,
  },
  both2: {
    height: height * 0.03,
    width: width * 0.05,
    // backgroundColor: "red",
  },
  last1: {
    height: height * 0.03,
    width: width * 0.25,
    // backgroundColor: "blue",
  },
  last2: {
    height: height * 0.03,
    width: width * 0.3,
    // backgroundColor: "red",
  },
});
