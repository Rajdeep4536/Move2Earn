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
import { SwiperFlatList } from "react-native-swiper-flatlist";
// import CircularProgress from "react-native-circular-progress-indicator";
import { IMAGEPATH } from "../Icon/Icon";
const { height, width } = Dimensions.get("window");
const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.ImageBackground}
        source={IMAGEPATH.SPLASH_BACKGROUND}
      >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={styles.fakeView}></View>
        <View style={styles.headerVIew}>
          <View style={{ width: width * 0.04 }}></View>
          <View style={styles.headingView}>
            <View style={{ height: height * 0.02 }}></View>
            <View style={styles.HelloVIew2}>
              <Text style={styles.HelloTExt}>Hello! Umair Siddiqui</Text>
            </View>
            <View style={styles.HelloVIew}>
              <Text style={styles.HeadingTExt}>Let’s Move2Earn</Text>
            </View>
          </View>

          <View style={styles.BellView}>
            <TouchableOpacity>
              <Image source={IMAGEPATH.BELL_Icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.ProfileVIew}>
            <TouchableOpacity>
              <Image source={IMAGEPATH.PROFILE_Icon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.HOmeImage}>
          <View style={styles.container}>
            <SwiperFlatList
              autoplay
              autoplayDelay={3}
              autoplayLoop
              index={2}
              showPagination
              paginationActiveColor="#1EB808"
              paginationDefaultColor="transparent"
              paginationStyleItemInactive={{
                borderColor: "gray",
                borderWidth: 1,
              }}
              paginationStyle={{
                borderColor: "#434242",
              height: height * 0.02,
                width: width * 0.2,
                justifyContent: "space-around",
              }}
            >
              <View
                style={[
                  styles.child,
                  {
                    alignItems: "center",
                  },
                ]}
              >
                <Image
                  style={styles.HEadingImageStyle}
                  source={IMAGEPATH.HEADER_IMAGE}
                />
              </View>
              <View style={[styles.child, { alignItems: "center" }]}>
                <Image
                  style={styles.HEadingImageStyle}
                  source={IMAGEPATH.HEADER_IMAGE}
                />
              </View>
              <View style={[styles.child, { alignItems: "center" }]}>
                <Image
                  style={styles.HEadingImageStyle}
                  source={IMAGEPATH.HEADER_IMAGE}
                />
              </View>
              <View style={[styles.child, { alignItems: "center" }]}>
                <Image
                  style={styles.HEadingImageStyle}
                  source={IMAGEPATH.HEADER_IMAGE}
                />
              </View>
            </SwiperFlatList>
          </View>
        </View>
        <View style={{ height: height * 0.01 }}></View>
        <View style={styles.buttonVIew}>
          <View style={styles.RunnigMainView}>
            <TouchableOpacity>
              <ImageBackground
                style={styles.BUTTON_ICON}
                source={IMAGEPATH.BUTTON_ICON}
              >
                <View style={styles.CycallingView}>
                  <Image
                    style={styles.RunImageStyle}
                    source={IMAGEPATH.RUNNING_ICON}
                  />
                </View>
                <View style={styles.CyTextView}>
                  <Text style={styles.RunTextStyle}>Running</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.RunnigMainView}>
            <TouchableOpacity>
              <ImageBackground
                style={styles.BUTTON_ICON}
                source={IMAGEPATH.BUTTON_ICON}
              >
                <View style={styles.CycallingView}>
                  <Image
                    style={styles.RunImageStyle1}
                    source={IMAGEPATH.CYCALLING_ICON}
                  />
                </View>
                <View style={styles.CyTextView}>
                  <Text style={styles.RunTextStyle}>Cycling</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.RunnigMainView}>
            <TouchableOpacity>
              <ImageBackground
                style={styles.BUTTON_ICON}
                source={IMAGEPATH.BUTTON_ICON}
              >
                <View style={styles.CycallingView}>
                  <Image
                    style={styles.RunImageStyle1}
                    source={IMAGEPATH.WALKING_ICON}
                  />
                </View>
                <View style={styles.CyTextView}>
                  <Text style={styles.RunTextStyle}>Walking</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.MIdHeadingTextView}>
          <Text style={styles.MIdHeadingTextStyle}>Finished Tasks</Text>
          <Text style={styles.DayTExt}>Day Time</Text>
        </View>
        <View style={styles.TaskPercentageVIew}>
          <ImageBackground
            style={styles.TASKBG_ICON}
            source={IMAGEPATH.TASKBG_ICON}
          >
            <View style={styles.ProcessMainView}>
              <View style={styles.ProcessFirstView}>
                <View style={styles.cRunView}>
                  <View style={styles.RUnIcnView}>
                    <Image source={IMAGEPATH.COLORRUN_ICON} />
                  </View>
                  <View style={styles.RUnTxtView}>
                    <Text style={styles.T1Style}>0 /150 min</Text>
                  </View>
                </View>
                <View style={styles.cRunView}>
                  <View style={styles.RUnIcnView}>
                    <Image source={IMAGEPATH.COLORRUN_ICON} />
                  </View>
                  <View style={styles.RUnTxtView}>
                    <Text style={styles.T1Style}>0 /150 min</Text>
                  </View>
                </View>
                <View>
                  <View style={styles.sendCodeView}>
                    <TouchableOpacity>
                      <ImageBackground
                        style={styles.codeImageSTyle}
                        source={IMAGEPATH.CODE_ICON}
                      >
                        <View style={styles.sendView}>
                          <Text style={styles.sendCOdeTExt}>View all</Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View>
                {/* <CircularProgress
                  value={85}
                  inActiveStrokeColor={'#2ecc71'}
                  inActiveStrokeOpacity={0.2}
                  progressValueColor={'#fff'}
                  valueSuffix={'%'}
                /> */}
              </View>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  sendView: {
    justifyContent: "center",
    //   borderWidth: 1,
    height: height * 0.03,
    width: width * 0.18,
    alignSelf: "center",
  },
  sendCOdeTExt: {
    fontSize: 12,
    color: "#FFFFFF",
    fontFamily: "Sen-Regular",
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 23,
  },
  codeImageSTyle: {
    alignSelf: "center",
    // resizeMode:'contain',
    height: height * 0.04,
    width: width * 0.2,

    // justifyContent:'center'
  },
  sendCodeView: {
    height: height * 0.05,
    width: width * 0.25,
    // borderWidth: 1,
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "center",

    marginTop: 10,
  },
  T1Style: {
    fontSize: 12,
    lineHeight: 23,
    fontWeight: "700",
    color: "#FFFFFF",
    fontFamily: "Sen-Regular",
  },
  RUnTxtView: {
    height: height * 0.03,
    // alignSelf: "center",
    // borderWidth: 1,
    borderColor: "white",
    width: width * 0.19,
    justifyContent: "center",
  },
  RUnIcnView: {
    height: height * 0.03,
    // alignSelf: "center",
    // borderWidth: 1,
    borderColor: "white",
    width: width * 0.06,
    justifyContent: "center",
  },
  cRunView: {
    height: height * 0.04,
    alignSelf: "center",
    // borderWidth: 1,
    borderColor: "white",
    width: width * 0.3,
    justifyContent: "center",
    flexDirection: "row",
  },
  ProcessFirstView: {
    height: height * 0.17,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "white",
    width: width * 0.4,
    justifyContent: "center",
    //flexDirection: "row",
  },
  ProcessMainView: {
    height: height * 0.18,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "white",
    width: width * 0.85,
    flexDirection: "row",
  },
  TASKBG_ICON: {
    height: height * 0.2,
    width: width * 0.89,
  },
  TaskPercentageVIew: {
    height: height * 0.21,
    width: width * 0.92,
    alignSelf: "center",
    borderWidth: 1,
    alignItems: "center",
  },
  DayTExt: {
    fontSize: 14,
    lineHeight: 23,
    fontWeight: "400",
    color: "#6D776B",
    fontFamily: "Sen-Regular",
  },
  MIdHeadingTextStyle: {
    fontSize: 20,
    lineHeight: 23,
    fontWeight: "700",
    color: "#FFFFFF",
    fontFamily: "SairaSemicondensed-Regular",
  },
  MIdHeadingTextView: {
    height: height * 0.07,
    width: width * 0.88,
    alignSelf: "center",
    // borderWidth: 1,
    // justifyContent: "center",
    //  alignItems: "center",
  },
  RunTextStyle: {
    fontSize: 12,
    lineHeight: 23,
    fontWeight: "400",
    color: "#FFFFFF",
    textAlign: "center",
  },
  RunImageStyle1: {
    height: height * 0.07,
    width: width * 0.14,
  },
  RunImageStyle: {
    height: height * 0.04,
    width: width * 0.08,
  },
  CyTextView: {
    height: height * 0.03,
    width: width * 0.14,
    alignSelf: "center",
    // borderWidth: 1,
  },
  CycallingView: {
    height: height * 0.07,
    width: width * 0.1,
    alignSelf: "center",
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  BUTTON_ICON: {
    height: height * 0.12,
    width: width * 0.24,
    alignSelf: "center",
    // justifyContent:"center"
  },
  RunnigMainView: {
    height: height * 0.14,
    alignSelf: "center",
    //  borderWidth: 1,
    borderColor: "white",
    width: width * 0.3,
  },
  buttonVIew: {
    height: height * 0.15,
    alignSelf: "center",
    //  borderWidth: 1,
    borderColor: "white",
    width: width * 0.98,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  HEadingImageStyle: {
    height: height * 0.16,

    width: width * 0.87,
  },
  HOmeImage: {
    height: height * 0.24,
    width: width * 0.95,
    alignSelf: "center",
    // borderWidth:1
  },
  ProfileVIew: {
    height: height * 0.05,
    width: width * 0.15,
    // borderWidth:1,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  BellView: {
    height: height * 0.04,
    width: width * 0.1,
    // borderWidth:1,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  HelloVIew: {
    height: height * 0.03,
    width: width * 0.49,
    // borderWidth:1,
    // borderColor: "white",
    //  justifyContent: "center",
    //  alignItems:'center'
  },
  HelloVIew2: {
    height: height * 0.02,
    width: width * 0.49,
    // borderWidth:1,
    borderColor: "white",
    // justifyContent: "center",
  },
  HeadingTExt: {
    color: "#FFFFFF",
    fontSize: 24,
    // lineHeight: 23,
    fontWeight: "400",
    fontFamily: "SairaSemicondensed-Regular",
  },
  HelloTExt: {
    color: "#A6A9A5",
    fontSize: 14,
    lineHeight: 23,
    fontWeight: "400",
    fontFamily: "sen-regular",
  },
  headingView: {
    height: height * 0.1,
    width: width * 0.67,
    //borderWidth: 1,
    borderColor: "white",
    // justifyContent: "center",
  },
  headerVIew: {
    height: height * 0.1,
    width: width * 0.97,
    // borderWidth: 1,
    borderColor: "white",
    alignSelf: "center",
    flexDirection: "row",
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
    height: height * 0.06,
    width: width * 0.95,
    alignSelf: "center",
  },
  container: {
    height: height * 0.22,
    width: width * 0.95,
    backgroundColor: "transparent",
  },
  child: {
    width: width * 0.95,
    height: height * 0.17,
    // justifyContent: "center",
  },
  text: { fontSize: 15, textAlign: "center" },
});
