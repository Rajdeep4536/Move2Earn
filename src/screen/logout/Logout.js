import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
  Switch,
  Modal,
  StatusBar,
  Pressable,
} from "react-native";
import React, { useState } from "react";
// import { LinearTextGradient } from "react-native-text-gradient";

// import LinearGradient from "react-native-linear-gradient";
// import { LinearTextGradient } from "react-native-text-gradient";
const { height, width } = Dimensions.get("window");
const Logout = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [modalVisible, setModalVisible] = useState(false);
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
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
              <Image
                source={require("../../assets/images/arrow-back.png")}
                style={styles.arrowback}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.a1}>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
              Settings
            </Text>
          </View>
        </View>
        <View style={styles.a2}>
          <ImageBackground
            source={require("../../assets/images/outlinecircle/outlinecircle.png")}
            style={styles.outlinecircle}
          >
            <View style={styles.men1}>
              <Image
                source={require("../../assets/images/men1/men1.png")}
                style={styles.menimageview}
              />
              <View style={styles.menimageinner}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/camera/Vector.png")}
                    style={styles.camera}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.a3}>
          <Text style={{ fontSize: 26, color: "white", fontWeight: "bold" }}>
            Umair Siddiqui
          </Text>
        </View>
        <View style={styles.a4}>
          <Text style={{ fontSize: 16, color: "white" }}>
            de-umair@mobiloitte.com
          </Text>
        </View>

        <ImageBackground
          source={require("../../assets/images/halfbg/halfbg.png")}
          style={styles.halfbg}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.halfbgview}>
              <View style={styles.a11}>
                <Image
                  source={require("../../assets/images/profile/profile.png")}
                  style={styles.profile}
                />
              </View>
            </View>
            <View style={styles.a12}>
              {/*    <LinearTextGradient
                  style={{ fontWeight: "bold", fontSize: 72 }}
                  locations={[0, 1]}
                  colors={["red", "blue"]}
                >
                  
                  Account
                </LinearTextGradient>
    */}
              <View style={styles.account}>
                <Text
                  style={{
                    fontSize: 18,
                    color: "rgb(133,186,103)",
                    fontWeight: "700",
                  }}
                >
                  Account
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.a121}>
            <TouchableOpacity>
              <ImageBackground
                source={require("../../assets/images/bg1/bg1.png")}
                style={styles.bg1}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.ig}>
                    <Text style={{ fontSize: 18, color: "white" }}>
                      Edit account
                    </Text>
                  </View>
                  <View style={styles.ig1}>
                    <Image
                      source={require("../../assets/images/tik/Vector.png")}
                      style={styles.tik}
                    />
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={styles.a122}>
            <TouchableOpacity>
              <ImageBackground
                source={require("../../assets/images/bg1/bg1.png")}
                style={styles.bg2}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.fg}>
                    <Text style={{ fontSize: 18, color: "white" }}>
                      Change password
                    </Text>
                  </View>
                  <View style={styles.fg1}>
                    <Image
                      source={require("../../assets/images/tik/Vector.png")}
                      style={styles.tik}
                    />
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={styles.a123}>
            <TouchableOpacity>
              <ImageBackground
                source={require("../../assets/images/bg1/bg1.png")}
                style={styles.bg3}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.dg}>
                    <Text style={{ fontSize: 18, color: "white" }}>
                      Sport log
                    </Text>
                  </View>
                  <View style={styles.dg1}>
                    <Image
                      source={require("../../assets/images/tik/Vector.png")}
                      style={styles.tik}
                    />
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.halfbgview1}>
              <View style={styles.b11}>
                <Image
                  source={require("../../assets/images/bell/Vector.png")}
                  style={styles.bell}
                />
              </View>
            </View>
            <View style={styles.b12}>
              <View style={styles.notification}>
                <Text
                  style={{
                    fontSize: 18,
                    color: "rgb(133,186,103)",
                    fontWeight: "700",
                  }}
                >
                  Notification
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: height * 0.065,
              width: width * 0.7,
              // backgroundColor: "red",
              alignSelf: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.sound}>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "400" }}>
                Sound
              </Text>
            </View>
            <View style={styles.switch}>
              <Switch
                trackColor={{ false: "#767577", true: "rgb(7,91,108)" }}
                thumbColor={isEnabled ? "cyan" : "white"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <View style={styles.logoutview}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "700" }}>
                LOGOUT
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.m1}>
                    <Text
                      style={{
                        fontSize: 24,
                        color: "white",
                        height: height * 0.04,
                        width: width * 0.4,
                        fontWeight: "bold",
                        textAlign: "center",
                        // backgroundColor: "red",
                      }}
                    >
                      Logout
                    </Text>
                  </View>
                  <View style={styles.m2}>
                    <Text style={{ fontSize: 16 , color:'white'}}>
                      
                      Are you sure you want to logout ?
                    </Text>
                  </View>
                  <View style={styles.t1}>
                    <View style={styles.t11}>
                      <ImageBackground
                        source={require("../../assets/images/cancel/cancel.png")}
                        style={styles.cancel}
                      >
                      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} >
                        <Text
                          style={{
                            fontSize: 18,
                            color: "white",
                            textAlign: "center",
                            fontWeight: "700",
                          }}
                        >
                          
                          Cancel
                        </Text>
                        </TouchableOpacity>
                      </ImageBackground>
                    </View>
                    <View style={styles.t12}>
                      <ImageBackground
                        source={require("../../assets/images/cancel/cancel.png")}
                        style={styles.cancel1}
                      >
                      <TouchableOpacity onPress={() => navigation.navigate('Sportlog')}>
            <Text
                      style={{
                        fontSize: 18,
                        color: "white",
                        textAlign: "center",
                        fontWeight: "700",
                      }}
                    >
                      
                      Confirm
                    </Text>
                    </TouchableOpacity>
                      </ImageBackground>

                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default Logout;

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
    // backgroundColor:'green',
  },
  a1: {
    height: height * 0.07,
    width: width * 0.47,
    // backgroundColor: "pink",
    justifyContent: "center",
    // alignItems: "center",
  },
  a2: {
    height: height * 0.27,
    width: width * 1,
    // backgroundColor: "green",

    justifyContent: "flex-end",
    alignItems: "center",
  },
  outlinecircle: {
    height: height * 0.24,
    width: width * 0.5,
    // backgroundColor:'red',
  },
  men1: {
    height: height * 0.2,
    width: width * 0.4,
    // backgroundColor:'red',
    justifyContent: "flex-end",
    alignSelf: "center",
    alignItems: "center",
    //  position:'absolute',
  },
  menimageview: {
    height: 150,
    width: 150,
  },
  menimageinner: {
    height: 50,
    width: 50,
    backgroundColor: "rgb(3,209,199)",
    position: "absolute",
    // borderRadius:30,
    alignSelf: "flex-end",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    height: 24,
    width: 24,
  },
  a3: {
    height: height * 0.04,
    width: width * 0.6,
    alignSelf: "center",
    //  backgroundColor:'blue',
    justifyContent: "center",
    alignItems: "center",
  },
  a4: {
    height: height * 0.03,
    width: width * 0.6,
    alignSelf: "center",
    // backgroundColor:'red',
    justifyContent: "flex-end",
    alignItems: "center",
  },
  halfbgview: {
    height: height * 0.08,
    width: width * 0.16,
    // backgroundColor: "cyan",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    // alignSelf:'flex-end',
  },
  halfbg: {
    height: height * 0.5,
    //  width:width*0.6,
  },
  profile: {
    height: height * 0.027,
    width: width * 0.04,
  },
  a11: {
    height: height * 0.05,
    width: width * 0.08,
    // backgroundColor: "pink",
    // alignItems:'flex-end',
    // alignSelf:'center',
    alignItems: "center",
    justifyContent: "center",
  },
  a12: {
    height: height * 0.08,
    width: width * 0.3,
    // backgroundColor: "indigo",
    //  justifyContent:'flex-end
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  y1: {
    height: height * 0.07,
    width: width * 0.7,
    backgroundColor: "indigo",
    //  justifyContent:'flex-end
    alignItems: "flex-end",
  },
  linearGradient: {
    height: height * 0.04,
    width: width * 0.4,
    // backgroundColor: "red",
  },
  linearGradient: {
    height: height * 0.04,
    width: width * 0.5,
    // backgroundColor: "cyan",
  },
  buttonText: {
    height: height * 0.02,
    width: width * 0.5,
  },
  account: {
    height: height * 0.04,
    width: width * 0.3,
    //  backgroundColor:'red'
  },
  a121: {
    height: height * 0.08,
    width: width * 1,
    // backgroundColor: "blue",
  },
  bg1: {
    height: height * 0.08,
    width: width * 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ig: {
    height: height * 0.05,
    width: width * 0.44,
    //  backgroundColor:'red',
    justifyContent: "center",
  },
  ig1: {
    height: height * 0.05,
    width: width * 0.3,
    // backgroundColor:'green',
    // alignSelf:'flex-end',
    alignItems: "flex-end",
    justifyContent: "center",
  },
  tik: {
    // height:height*0.04,
    // width:width*0.08,
    // backgroundColor:'pink',
  },
  a122: {
    height: height * 0.08,
    width: width * 1,
    // backgroundColor: "red",
  },
  bg2: {
    height: height * 0.08,
    width: width * 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fg: {
    height: height * 0.05,
    width: width * 0.44,
    //  backgroundColor:'red',
    justifyContent: "center",
  },
  fg1: {
    height: height * 0.05,
    width: width * 0.3,
    // backgroundColor:'green',
    // alignSelf:'flex-end',
    alignItems: "flex-end",
    justifyContent: "center",
  },
  a123: {
    height: height * 0.08,
    width: width * 1,
    // backgroundColor: "cyan",
  },
  bg3: {
    height: height * 0.08,
    width: width * 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dg: {
    height: height * 0.05,
    width: width * 0.44,
    //  backgroundColor:'red',
    justifyContent: "center",
  },
  dg1: {
    height: height * 0.05,
    width: width * 0.3,
    // backgroundColor:'green',
    // alignSelf:'flex-end',
    alignItems: "flex-end",
    justifyContent: "center",
  },
  halfbgview1: {
    height: height * 0.06,
    width: width * 0.15,
    // backgroundColor: "yellow",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    // alignSelf:'flex-end',
  },
  bell: {
    height: height * 0.027,
    width: width * 0.04,
  },
  b11: {
    height: height * 0.04,
    width: width * 0.06,
    // backgroundColor: "pink",
    // alignItems:'flex-end',
    // alignSelf:'center',
    alignItems: "center",
    justifyContent: "center",
  },
  b12: {
    height: height * 0.06,
    width: width * 0.3,
    // backgroundColor: "indigo",
    //  justifyContent:'flex-end
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  notification: {
    height: height * 0.04,
    width: width * 0.3,
    //  backgroundColor:'red'
  },
  sound: {
    height: height * 0.06,
    width: width * 0.3,
    // backgroundColor: "pink",
    justifyContent: "center",
    //  alignItems:'flex-end'
  },
  switch: {
    height: height * 0.06,
    width: width * 0.3,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  logoutview: {
    height: height * 0.045,
    width: width * 0.3,
    backgroundColor: "red",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor:'rgba(0, 0, 0, 0.35)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    height: height * 0.23,
    width: width * 0.9,
    backgroundColor: 'rgb(61,93,67)',
    shadowColor: "#000",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  m1: {
    color: "white",
    // fontSize:'bold'
    height: height * 0.05,
    width: width * 0.5,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  m2: {
    height: height * 0.03,
    width: width * 0.7,
    // backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  t1: {
    height: height * 0.1,
    width: width * 0.8,
    // backgroundColor: "red",
    flexDirection: "row",
  },
  t11: {
    height: height * 0.098,
    width: width * 0.4,
    // backgroundColor: "pink",
    justifyContent: "center",
  },
  cancel: {
    height: height * 0.08,
    width: width * 0.38,
    // backgroundColor: "green",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  t12: {
    height: height * 0.098,
    width: width * 0.4,
    // backgroundColor: "cyan",
    justifyContent: "center",
  },
  cancel1: {
    height: height * 0.08,
    width: width * 0.38,
    // backgroundColor: "green",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
