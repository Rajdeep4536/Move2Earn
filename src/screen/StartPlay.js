import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
const { height, width } = Dimensions.get("window");
const StartPlay = ({navigation}) => {
  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.bgImage}
        source={require(".././assets/images/bgImage1/background.png")}
      >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={{ height: height * 0.05 }}></View>

        <View style={styles.v1}>
          <View style={styles.v11}>
            <View style={styles.arrow}>
              <TouchableOpacity onPress={() => navigation.navigate('Detailshare')}>
                <Image
                  source={require("../assets/images/arrow-back.png")}
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
                    source={require("../assets/images/dollar/Vector.png")}
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
                    source={require("../assets/images/dollar/Vector.png")}
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
                source={require("../assets/images/men/men.png")}
                styles={styles.image}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.b1}>
          <View style={styles.b12}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.c1}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                >
                  Umair Siddiqui
                </Text>
              </View>
              <View style={styles.c2}>
                <Image
                  source={require("../assets/images/filter.png")}
                  style={styles.filter}
                />
              </View>
            </View>
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
              <Text
                style={{ fontSize: 16, color: "white", textAlign: "center" }}
              >
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
        </View>
        <View style={styles.c5}>
          <Image
            source={require("../assets/images/image.png")}
            style={styles.img2}
          />
        </View>
        <View style={styles.p1}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.p11}>
              <View style={styles.p121}>
                <Text
                  style={{
                    fontSize: 36,
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                
                  0.00
                </Text>
              </View>
              <View style={styles.foot}>
                <View
                  style={{
                    flexDirection: "row",
                    height: 30,
                    width: 30,
                    alignSelf: "flex-end",
                  }}
                >
                  <Image
                    source={require("../assets/images/vector/Vector.png")}
                    style={styles.footimg}
                  />
                  <View style={styles.total}>
                    <Text style={{ fontSize: 14, color: "white" }}>
                      
                      Total Steps
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.p12}>
              <View style={styles.p3}>
                <View style={styles.p31}>
                  <Text
                    style={{
                      fontSize: 36,
                      color: "white",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    
                    0.00
                  </Text>
                </View>
                <View style={styles.foot1}>
                  <View
                    style={{
                      flexDirection: "row",
                      height: 30,
                      width: 30,
                      alignSelf: "flex-end",
                    }}
                  >
                    <Image
                      source={require("../assets/images/icon/vect.png")}
                      style={styles.footimg1}
                    />
                    <View style={styles.total1}>
                      <Text style={{ fontSize: 14, color: "white" }}>
                        
                        Total Kilometres
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.let}>
          <ImageBackground
            style={styles.bgimage1}
            source={require("../assets/images/rect/rect.png")}
          >
            <View style={styles.let1}>
              <TouchableOpacity onPress={() => navigation.navigate('Play')} >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  
                  Let's Start
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.how}>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, color: "dodgerblue" }}>
              
              How to play ?
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartPlay;

const styles = StyleSheet.create({
  safe: {
    height: height * 0.01,
    width: width * 1,
    //  backgroundColor: 'black',
  },
  main: {
    height: height * 1,
    width: width * 1,
    backgroundColor: "rgb(8,19,20)",
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
    //  backgroundColor:'red',
  },
  v14: {
    height: height * 0.1,
    width: width * 0.17,
    // backgroundColor: 'indigo',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    height: 15,
    width: 12,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
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
  a2: {
    height: height * 0.07,
    width: width * 0.3,
    //  backgroundColor:'green',
    alignSelf: "center",
    justifyContent: "center",
  },
  v111: {
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
  v125: {
    height: height * 0.03,
    width: width * 0.2,
    //  backgroundColor: 'red',
    alignItems: "center",
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
  b1: {
    height: height * 0.15,
    width: width * 1,
    backgroundColor: "rgb(37,53,46)",
  },
  b12: { height: height * 0.07, width: width * 1 },
  c1: {
    height: height * 0.07,
    width: width * 0.5,
    // backgroundColor: 'pink',
    alignItems: "center",
    justifyContent: "center",
    //  justifyContent:'center',
  },
  c2: {
    height: height * 0.07,
    width: width * 0.18,
    // backgroundColor: 'green',
    //  alignItems:'flex-end',
    justifyContent: "center",
    //  alignSelf:'center',
  },
  filter: {
    // height: height * 0.02,
    // width: width * 0.02,

    //  backgroundColor:'cyan',
    height: height * 0.04,
    width: width * 0.07,
    alignSelf: "center",
    justifyContent: "center",
  },
  v21: {
    height: height * 0.08,
    width: width * 0.21,
    //  backgroundColor:'red',
    alignItems: "flex-end",
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
    width: width * 0.9,
    //  backgroundColor:'indigo',
    alignSelf: "center",
    alignItems: "center",
  },
  img2: {
    height: height * 0.45,
    width: width * 1,
    resizeMode:'contain',
  },
  bgimage: {
    height: height * 1,
    width: width * 1,
  },
  p1: {
    height: height * 0.09,
    width: width * 1,
    // backgroundColor:'red',
  },
  p11: {
    height: height * 0.1,
    width: width * 0.5,
    //  backgroundColor:'pink',
  },
  p12: {
    height: height * 0.1,
    width: width * 0.5,
    //  backgroundColor:'green',
  },
  p121: {
    height: height * 0.07,
    width: width * 0.3,
    //  backgroundColor:'cyan',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  foot: {
    height: height * 0.05,
    width: width * 0.15,
    //  backgroundColor:'indigo',
    // alignSelf:'center',
    // alignItems:'center'
  },
  footimg: {
    height: height * 0.03,
    width: width * 0.05,
  },
  total: {
    height: height * 0.03,
    width: width * 0.2,
    //  backgroundColor:'white'
  },
  p3: {
    height: height * 0.1,
    width: width * 0.5,
    // backgroundColor:'pink',
  },
  p31: {
    height: height * 0.07,
    width: width * 0.3,
    // backgroundColor:'cyan',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  total1: {
    height: height * 0.03,
    width: width * 0.3,
    //  backgroundColor:'red',
  },
  footimg1: {
    height: height * 0.02,
    width: width * 0.05,
    // alignSelf:'center'
  },
  foot1: {
    height: height * 0.03,
    width: width * 0.15,
    // backgroundColor:'indigo',
    alignItems: "center",
  },
  let: {
    height: height * 0.1,
    width: width * 1,
    // backgroundColor:'red',
    // alignSelf:'flex-end',
    alignItems: "center",
    justifyContent: "flex-end",
    // borderRadius:2,
  },
  bgimage1: {
    height: height * 0.09,
    width: width * 0.78,
    //  borderWidth:2
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'red',
  },
  y2: {
    height: height * 0.03,
    width: width * 0.2,
    // backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center",
  },
  let1: {
    height: height * 0.06,
    width: width * 0.8,
    // backgroundColor:'cyan',
    alignItems: "center",
    justifyContent: "center",
  },
  how: {
    height: height * 0.03,
    width: width * 0.7,
    //  backgroundColor:'green',
    alignSelf: "center",
    alignItems: "center",
    //  justifyContent:'center',
  },
  bgImage: {
    height: height * 1,
    width: width * 1,
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
  image: {
    height:height*0.05,

  },
});
