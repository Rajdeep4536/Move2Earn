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
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { TestWatcher } from "jest";
const { height, width } = Dimensions.get("window");
const SelectGender = (props) => {
  const [checked, setChecked] = useState("");
  var gender = ["Male", "Female"];
  /**function for change  weight */
  const [Counter, setCounter] = useState(64);
  const IncrementCounter = () => setCounter(Counter + 1);
  const DecrementCounter = () => setCounter(Counter - 1);
  const Func = () => {
    if (Counter <= 0) {
      DecrementCounter = () => setCounter(1);
    }
  };

  const [Counter1, setCounter1] = useState(5);
  const IncrementCounter2 = () => setCounter1(Counter1 + 9);
  const IncrementCounter1 = () => setCounter1(Counter1 + 1);
  const DecrementCounter1 = () => setCounter1(Counter1 - 1);
  const DecrementCounter2 = () => setCounter1(Counter1 - 9);
  const Func1 = () => {
    if (Counter1 <= 0) {
      IncrementCounter2();
      DecrementCounter();
    }
  };
  const Func2 = () => {
    if (Counter1 >= 9) {
      DecrementCounter2();
      IncrementCounter();
    }
  };

  /***function for change height */
  const [Counter9, setCounter9] = useState(64);
  const IncrementCounter9 = () => setCounter9(Counter9 + 1);
  const DecrementCounter9 = () => setCounter9(Counter9 - 1);
  const Func9 = () => {
    if (Counter9 <= 0) {
      DecrementCounter9 = () => setCounter9(1);
    }
  };

  const [Counter8, setCounter8] = useState(5);
  const IncrementCounter7 = () => setCounter8(Counter8 + 9);
  const IncrementCounter8 = () => setCounter8(Counter8 + 1);
  const DecrementCounter8 = () => setCounter8(Counter8 - 1);
  const DecrementCounter7 = () => setCounter8(Counter8 - 9);
  const Func8 = () => {
    if (Counter8 <= 0) {
      IncrementCounter7();
      DecrementCounter9();
    }
  };
  const Func10 = () => {
    if (Counter8 >= 9) {
      DecrementCounter7();
      IncrementCounter9();
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.ImageBackground}
        source={IMAGEPATH.SPLASH_BACKGROUND}
      >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={styles.fakeVIew}></View>
        <View style={styles.backView}>
          <TouchableOpacity>
            <Image source={IMAGEPATH.BACK_ICON} />
          </TouchableOpacity>
        </View>
        <View style={{ height: height * 1 }}>
          <View style={{ height: height * 0.89 }}>
            <ProgressSteps
              progressBarColor="#78A3F6"
              
              activeStepIconBorderColor="#78A3F6"
              completedProgressBarColor="blue"
              disabledStepIconColor="blue"
              completedStepIconColor="linear-gradient(180deg, #CA76C1 0%, #77CFCF 66.15%, #B8FFAE 100%)"
              activeStepIconColor="#080E16"
            >
              <ProgressStep label="First Step" progressBarColor="blue">
                <View style={styles.ProgressViewMain}>
                  <View style={styles.fakeVIew}></View>
                  <View style={styles.headingTextView}>
                    <Text style={styles.textColor}>What’s your gender?</Text>
                  </View>
                  <View style={styles.paraTextView}>
                    <Text style={styles.textColor1}>
                      Calories & stride length calculation need it
                    </Text>
                  </View>
                  <View>
                    <View
                      style={{
                        alignSelf: "center",
                        height: height * 0.3,
                        width: width * 0.95,
                        // alignSelf:'center',
                        alignItems: "center",
                        // justifyContent: 'center',
                        //  backgroundColor:'white'
                      }}
                    >
                      <View style={styles.btn}>
                        <View
                          style={{
                            flexDirection: "row",
                            //  justifyContent:"space-between",
                            height: height * 0.28,
                            width: width * 0.95,
                            //  backgroundColor:'red',
                            //justifyContent:'center',
                            alignItems: "center",
                          }}
                        >
                          <TouchableOpacity
                            onPress={() =>
                              setChecked(
                                checked === "female" ? "male" : "female"
                              )
                            }
                            style={styles.btn1}
                          >
                            <View style={styles.image}>
                              <ImageBackground
                                style={styles.img}
                                source={
                                  checked === "male"
                                    ? IMAGEPATH.NOTSELECTED_BG
                                    : IMAGEPATH.SELECTED_BG
                                }
                              >
                                <Image
                                  style={{
                                    height: height * 0.20,
                                    width: width * 0.35,
                                  }}
                                  source={IMAGEPATH.MALE_ICON}
                                />
                                <View
                                  style={{
                                    height: height * 0.03,
                                    width: width * 0.1,
                                    alignSelf: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Text
                                    style={{
                                      color: "#FFFFFF",
                                      fontSize: 14,
                                      fontWeight: "400",
                                    }}
                                  >
                                    Male
                                  </Text>
                                </View>
                              </ImageBackground>
                            </View>
                          </TouchableOpacity>

                          <TouchableOpacity
                            onPress={() =>
                              setChecked(checked === "male" ? "female" : "male")
                            }
                            style={styles.btn1}
                          >
                            <View style={styles.image}>
                              <ImageBackground
                                style={styles.img}
                                source={
                                  checked === "female"
                                    ? IMAGEPATH.NOTSELECTED_BG
                                    : IMAGEPATH.SELECTED_BG
                                }
                              >
                                <Image
                                  style={{
                                    height: height * 0.20,
                                    width: width * 0.19,
                                  }}
                                  source={IMAGEPATH.FEMALE_ICON}
                                />

                                <View
                                  style={{
                                    height: height * 0.03,
                                    width: width * 0.14,
                                    alignSelf: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Text
                                    style={{
                                      color: "#FFFFFF",
                                      fontSize: 14,
                                      fontWeight: "400",
                                    }}
                                  >
                                    Female
                                  </Text>
                                </View>
                              </ImageBackground>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                      {/* <Text>{gender[checked]}</Text> */}
                    </View>
                  </View>
                  <View style={styles.fakeVIew}></View>
                  <View style={styles.loginButtonVIew}>
                    <TouchableOpacity style={styles.loginButtonVIew1}>
                      <ImageBackground
                        style={styles.borderStyle}
                        source={IMAGEPATH.BORDER_COLOR}
                      >
                        <View style={styles.loginTextView}>
                          <Text style={styles.loginTextStyle}>Next</Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
              </ProgressStep>
              <ProgressStep label="Second Step">
                <View style={styles.ProgressViewMain}>
                  <View style={styles.fakeVIew}></View>
                  <View style={styles.headingTextView1}>
                    <Text style={styles.textColor}>
                      How much do you weight?
                    </Text>
                  </View>
                  <View style={styles.paraTextView}>
                    <Text style={styles.textColor1}>
                      Please choose your weight.
                    </Text>
                  </View>
                  <View style={styles.bgView}>
                    <ImageBackground
                      style={{
                        height: height * 0.25,
                        width: width * 0.9,
                        alignSelf: "center",
                        // justifyContent:"center",
                        // alignItems:'center'
                      }}
                      source={IMAGEPATH.HEIGHT_BG}
                    >
                      <View style={styles.buttonmainView}>
                        <View style={styles.firstButton}>
                          <TouchableOpacity
                            onPress={() => {
                              IncrementCounter(), Func();
                            }}
                          >
                            <Image source={IMAGEPATH.UP_Arrow} />
                          </TouchableOpacity>
                        </View>
                        <View style={styles.firstButton}>
                          <TouchableOpacity
                            onPress={() => {
                              IncrementCounter1(), Func2();
                            }}
                          >
                            <Image source={IMAGEPATH.UP_Arrow} />
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={styles.heightMainView}>
                        <View style={styles.FIrstNUmber1}></View>
                        <View style={styles.FIrstNUmber}>
                          <Text style={styles.textStyle}>{Counter}</Text>
                        </View>
                        <View style={styles.FIrstNUmber2}>
                          <Text style={styles.textStyle}>.</Text>
                        </View>
                        <View style={styles.FIrstNUmber}>
                          <Text style={styles.textStyle3}>{Counter1}</Text>
                        </View>
                        <View style={styles.FIrstNUmber1}>
                          <Text style={styles.textStyle1}>KG</Text>
                        </View>
                      </View>
                      <View style={styles.buttonmainView1}>
                        <View style={styles.firstButton}>
                          <TouchableOpacity onPress={() => DecrementCounter()}>
                            <Image source={IMAGEPATH.DOWN_Arrow} />
                          </TouchableOpacity>
                        </View>
                        <View style={styles.firstButton}>
                          <TouchableOpacity
                            onPress={() => {
                              DecrementCounter1(), Func1();
                            }}
                          >
                            <Image source={IMAGEPATH.DOWN_Arrow} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <View style={styles.fakeVIew1}></View>
                  <View style={styles.loginButtonVIew}>
                    <TouchableOpacity style={styles.loginButtonVIew1}>
                      <ImageBackground
                        style={styles.borderStyle}
                        source={IMAGEPATH.BORDER_COLOR}
                      >
                        <View style={styles.loginTextView}>
                          <Text style={styles.loginTextStyle}>Next</Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
              </ProgressStep>
              <ProgressStep label="Third Step">
                <View style={styles.ProgressViewMain}>
                  <View style={styles.fakeVIew}></View>
                  <View style={styles.headingTextView1}>
                    <Text style={styles.textColor}>
                      How much do you height?
                    </Text>
                  </View>
                  <View style={styles.paraTextView}>
                    <Text style={styles.textColor1}>
                      Please choose your height.
                    </Text>
                  </View>
                  <View style={styles.bgView}>
                    <ImageBackground
                      style={{
                        height: height * 0.35,
                        width: width * 0.9,
                        alignSelf: "center",
                        // justifyContent:"center",
                        // alignItems:'center'
                      }}
                      source={IMAGEPATH.HEIGHT_BG}
                    >
                      <View style={styles.buttonmainView}>
                        <View style={styles.firstButton}>
                          <TouchableOpacity
                            onPress={() => {
                              IncrementCounter9(), Func9();
                            }}
                          >
                            <Image source={IMAGEPATH.UP_Arrow} />
                          </TouchableOpacity>
                        </View>
                        <View style={styles.firstButton}>
                          <TouchableOpacity
                            onPress={() => {
                              IncrementCounter8(), Func10();
                            }}
                          >
                            <Image source={IMAGEPATH.UP_Arrow} />
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={styles.heightMainView}>
                        <View style={styles.FIrstNUmber1}></View>
                        <View style={styles.FIrstNUmber}>
                          <Text style={styles.textStyle}>{Counter9}</Text>
                        </View>
                        <View style={styles.FIrstNUmber2}>
                          <Text style={styles.textStyle}>.</Text>
                        </View>
                        <View style={styles.FIrstNUmber}>
                          <Text style={styles.textStyle3}>{Counter8}</Text>
                        </View>
                        <View style={styles.FIrstNUmber1}>
                          <Text style={styles.textStyle1}>CM</Text>
                        </View>
                      </View>
                      <View style={styles.buttonmainView1}>
                        <View style={styles.firstButton}>
                          <TouchableOpacity onPress={() => DecrementCounter9()}>
                            <Image source={IMAGEPATH.DOWN_Arrow} />
                          </TouchableOpacity>
                        </View>
                        <View style={styles.firstButton}>
                          <TouchableOpacity
                            onPress={() => {
                              DecrementCounter8(), Func8();
                            }}
                          >
                            <Image source={IMAGEPATH.DOWN_Arrow} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <View style={styles.fakeVIew1}></View>
                  <View style={styles.loginButtonVIew}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('LocationPage')} style={styles.loginButtonVIew1}>
                      <ImageBackground
                        style={styles.borderStyle}
                        source={IMAGEPATH.BORDER_COLOR}
                      >
                        <View style={styles.loginTextView}>
                          <Text style={styles.loginTextStyle}>Submit</Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
              </ProgressStep>
            </ProgressSteps>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SelectGender;

const styles = StyleSheet.create({
  textStyle: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "400",
    // textAlign:"center"
  },
  textStyle3: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "center",
  },
  textStyle1: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
  FIrstNUmber: {
    height: height * 0.07,
    width: width * 0.15,
    // borderWidth: 1,
    alignSelf: "center",
  },
  FIrstNUmber1: {
    height: height * 0.05,
    width: width * 0.1,
    // borderWidth: 1,
    alignSelf: "center",
  },
  FIrstNUmber2: {
    height: height * 0.07,
    width: width * 0.03,
    // borderWidth: 1,
    alignSelf: "center",
  },
  heightMainView: {
    height: height * 0.08,
    // borderWidth: 1,
    width: width * 0.6,
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  bgView: {
    height: height * 0.25,
    //  borderWidth:1,
    width: width * 0.7,
    alignSelf: "center",
    justifyContent: "center",
  },

  firstButton: {
    height: height * 0.013,
    // borderWidth:1,
    width: width * 0.15,
    alignSelf: "center",
    alignItems: "center",
  },
  buttonmainView: {
    height: height * 0.14,
    // borderWidth:1,
    width: width * 0.45,
    alignSelf: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  buttonmainView1: {
    height: height * 0.03,
    // borderWidth:1,
    width: width * 0.45,
    alignSelf: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  borderStyle: {
    //resizeMode: 'contain',
    height: 69,
    width: 330,
    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
  },
  loginTextView: {
    height: height * 0.04,
    width: width * 0.4,
    // borderWidth: 1,
    alignSelf: "center",
    // justifyContent:'center'
  },
  loginTextStyle: {
    fontSize: 20,
    color: "#FFFFFF",
    // fontFamily: 'Sen-regular',
    textAlign: "center",
    fontWeight: "700",
  },
  loginButtonVIew: {
    height: height * 0.045,
    width: width * 0.88,
    //  borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  loginButtonVIew1: {
    height: height * 0.08,
    width: width * 0.85,
    //  borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  radio: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  img1: {
    height: height * 0.39,
    width: width * 0.45,

    justifyContent: "center",
    alignSelf: "center",

    // borderRadius: 15,
    // borderWidth: 0.49,
    borderColor: "grey",
    //  resizeMode: 'contain',
    alignItems: "center",
  },
  img: {
    height: height * 0.42,
    width: width * 0.44,
    justifyContent: "center",
    //  alignSelf:'center',
    // borderRadius: 15,
    // borderWidth: 0.49,
    borderColor: "grey",
    alignItems: "center",
        resizeMode: 'contain'
  },
  btn1: {
    height: height * 0.25,
    width: width * 0.46,
    alignContent: "center",
    // alignSelf:'center',
    justifyContent: "center",
    //borderRadius: 95
  },
  btn2: {
    // flexDirection: 'row',
    alignItems: "center",
    //  backgroundColor: 'black',
    height: height * 0.25,
    width: width * 0.46,
    alignSelf: "center",
    // justifyContent: 'center'
  },
  image: {
    // backgroundColor:'yellow',
    height: height * 0.29,
    width: width * 0.4,
    justifyContent: "center",
    //borderWidth:2,
    borderColor: "grey",
    resizeMode: "contain",
    // alignItems:'center',
    alignSelf: "center",
    // alignItems:"flex-end"
  },
  image1: {
    // backgroundColor:'green',
    height: height * 0.25,
    width: width * 0.4,
    justifyContent: "center",
    //borderWidth:2,
    borderColor: "grey",
    // resizeMode: 'contain',
    alignSelf: "center",
  },
  btn: {
    flexDirection: "row",
    // alignItems: 'center',
    // backgroundColor:'blue',
    height: height * 0.07,
    width: width * 0.99,
    // alignSelf:'center',
    // justifyContent:'center'
    justifyContent: "space-evenly",
  },
  headingTextView: {
    // borderWidth: 1,
    borderColor: "white",
    height: height * 0.08,
    width: width * 0.7,
    alignSelf: "center",
  },
  headingTextView1: {
    // borderWidth: 1,
    borderColor: "white",
    height: height * 0.08,
    width: width * 0.92,
    alignSelf: "center",
  },
  paraTextView: {
    //  borderWidth: 1,
    borderColor: "white",
    height: height * 0.06,
    width: width * 0.75,
    alignSelf: "center",
  },
  textColor1: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
    // fontFamily: 'Sen-regualr',
    textAlign: "center",
  },
  textColor: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    // fontFamily: 'Saira SemiCondensed-regular',
    textAlign: "center",
  },
  ProgressViewMain: {
    alignSelf: "center",
    height: height * 0.65,
    width: width * 0.99,
    // borderWidth: 1,
    borderColor: "white",
  },
  mainContainer: {
    height: "100%",
    width: "100%",
    // justifyContent:'center'
  },
  ImageBackground: {
    height: "100%",
    width: "100%",
  },
  fakeVIew: {
    height: height * 0.07,
  },
  backView: {
    height: height * 0.04,
    width: width * 0.15,
    // borderWidth:1,
    borderColor: "white",
    alignItems: "center",
  },
  fakeVIew1: {
    height: height * 0.12,
  },
});
