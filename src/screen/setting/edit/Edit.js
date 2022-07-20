import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
//import LinearGradient from "react-native-linear-gradient";
const { height, width } = Dimensions.get("window");
const Edit = ({navigation}) => {
  const [checked, setChecked] = useState("");
  var gender = ["Male", "Female"];
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [Fname, setFname] = useState('');
  const [checkFname, setCheckFname] = useState();
  const [errorFname, setErrorFname] = useState(null);
  const [Lname, setLname] = useState('');
  const [checkLname, setCheckLname] = useState();
  const [errorLname, setErrorLname] = useState(null);
  const emailValidate = (email) => {
    var Regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "" || email === undefined || email === null) {
      setErrorEmail("*Plese enter email,");
    } else if (!Regex.test(email)) {
      setErrorEmail("*Plese enter valid email.");
    } else {
      setErrorEmail(null);
    }
  };
  const _Fnamevalidate = fname => {
    var FnameRegex =
    /^[a-zA-Z ]{2,40}$/;
    if (fname === '') {
      setErrorFname('*Please enter name');
      setCheckFname(false)
    }
    else if (!FnameRegex.test(fname)) {
      setErrorFname('  *Please enter first name.');
      setCheckFname(false)
    } else {
      setErrorFname(null);
      setCheckFname(true)
    }
  };
  const _Lnamevalidate = lname => {
    var LnameRegex =
    /^[a-zA-Z ]{2,40}$/;
    if (lname === '') {
      setErrorLname('*Please enter  last name');
      setCheckLname(false)
    }
    else if (!LnameRegex.test(lname)) {
      setErrorLname('  *Please enter last name');
      setCheckLname(false)
    } else {
      setErrorLname(null);
      setCheckLname(true)
    }
  };
  const Validate = () => {
    //const Flag=false;
    let Flag = true;
    if (email === "") {
      setErrorEmail("Please enter email");
      Flag = false;
    }
    if (Fname === '') {
      setErrorFname('Please enter your first name');
      Flag = false;
    }
    if (Lname === '') {
      setErrorLname('Please enter your last name');
      Flag = false;
    }
    return Flag;
  };
 

  return (
    <View style={styles.mainContainer}>
    <ScrollView>
   
      <ImageBackground
        style={styles.bgImage}
        source={require("../../../assets/images/bgImage1/background.png")}
      >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={{ height: height * 0.05 }}></View>
        <View style={styles.v11}>
          <View style={styles.arrow}>
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
              <Image
                source={require("../../../assets/images/arrow-back.png")}
                style={styles.arrowback}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.a1}>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
              Edit Profile
            </Text>
          </View>
          <View style={styles.a2}>
            
              <TouchableOpacity onPress={() => navigation.navigate('Logout')}>
                <Text
                  style={{ fontWeight: "400", fontSize: 20, color: "white" }}
                >
                  Save
                </Text>
              </TouchableOpacity>
          
          </View>
        </View>
 
        <View style={styles.halfbgview}>
          <ImageBackground
            source={require("../../../assets/images/halfbg1/halfbg1.png")}
            style={styles.halfbg}
          >
            <View style={styles.a11}>
              <ImageBackground
                source={require("../../../assets/images/outlinecircle/outlinecircle.png")}
                style={styles.outlinecircle}
              >
                <View style={styles.men1}>
                  <Image
                    source={require("../../../assets/images/men1/men1.png")}
                    style={styles.menimageview}
                  />
                  <View
                    style={{
                      height: height * 0.09,
                      width: width * 0.13,
                      //   backgroundColor: "pink",
                      position: "absolute",
                      alignSelf: "flex-end",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <View style={styles.menimageinner}>
                      <TouchableOpacity>
                        <Image
                          source={require("../../../assets/images/camera/Vector.png")}
                          style={styles.camera}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.b1}>
              <ImageBackground
                source={require("../../../assets/images/firstnam/Vector.png")}
                style={styles.firstnam}
              >
                <TextInput
                  placeholder="First name"
                  style={{
                    height: height * 0.04,
                    width: width * 0.8,
                    fontWeight: "400",
                    //  backgroundColor:'blue'
                    fontSize: 18,
                  }}
                  keyboardType={"default"}
                  placeholderTextColor="#A3A3A3"
                  maxLength={14}
                  onChangeText={text => {
                    setFname(text),_Fnamevalidate(text);
                  }}

                />
                
              </ImageBackground>
            </View>
            {errorEmail!==null?
          
              <View style={{height:height*0.018 , width:width*0.85,alignSelf:'center' }}>
              <Text style={{color:'red'}}>  {errorFname}
              </Text>
            
            </View>: null
              
            }
            <View style={styles.b2}>
              <ImageBackground
                source={require("../../../assets/images/firstnam/Vector.png")}
                style={styles.firstnam1}
              >
                <TextInput
                  placeholder="Last name"
                  style={{
                    height: height * 0.04,
                    width: width * 0.8,
                    //  backgroundColor:'blue'
                    fontSize: 18,
                    fontWeight: "400",
                  }}
                  keyboardType={"default"}
                  placeholderTextColor="#A3A3A3"
                  maxLength={14}
                  onChangeText={text => {
                    setLname(text),_Lnamevalidate(text);
                  }}
                />
              </ImageBackground>
            </View>
            {errorEmail!==null?
          
              <View style={{height:height*0.02 , width:width*0.85,alignSelf:'center', }}>
              <Text style={{color:'red'}}>  {errorLname}
              </Text>
            
            </View>: null
              
            }
            <View style={styles.b3}>
              <ImageBackground
                source={require("../../../assets/images/back/back.png")}
                style={styles.firstnam121}
              >
                <View style={styles.mainview}>
                  <TextInput
                    placeholder="Bio"
                    style={styles.bio}
                    keyboardType={"default"}
                    placeholderTextColor="#A3A3A3"
                    maxLength={40}
                  />
                </View>
              </ImageBackground>
            </View>
            <View style={styles.tog}>
              <View style={styles.tog1}>
                {/*  <ImageBackground
                  source={require("../../../assets/images/imgbg/imgbg.png")}
                  style={styles.imgbg}
                />
                */}
                <View style={styles.q1}>
                  <TouchableOpacity
                    onPress={() =>
                      setChecked(checked === "female" ? "male" : "female")
                    }
                  >
                    <ImageBackground
                      style={styles.img}
                      source={
                        checked === "male"
                          ? require("../../../assets/images/imgbg/imgbg.png")
                          : require("../../../assets/images/imgbg1/imgbg1.png")
                      }
                    >
                      <Text style={{ fontSize: 14, color: "white" }}>Male</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.tog2}>
                {/*  <ImageBackground
                  source={require("../../../assets/images/imgbg1/imgbg1.png")}
                  style={styles.imgbg1}
                >
                */}
                <View style={styles.q2}>
                  <TouchableOpacity
                    onPress={() =>
                      setChecked(checked === "male" ? "female" : "male")
                    }
                    style={styles.btn1}
                  >
                    <ImageBackground
                      style={styles.img1}
                      source={
                        checked === "female"
                          ? require("../../../assets/images/imgbg/imgbg.png")
                          : require("../../../assets/images/imgbg1/imgbg1.png")
                      }
                    >
                      <Text style={{ fontSize: 14, color: "white" }}>
                        Female
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.mail}>
              <ImageBackground
                source={require("../../../assets/images/mailbox/mail.png")}
                style={styles.mailbox}
              >
                <TextInput
                  placeholder="Email "
                  style={styles.email}
                  keyboardType={"default"}
                  placeholderTextColor="#A3A3A3"
                  maxLength={34}
                  onChangeText={(text) => {
                    setEmail(text), emailValidate(text);
                  }}
                />
              </ImageBackground>
            </View>
            {errorEmail !== null ? (
              <View
                style={{
                  height: height * 0.03,
                  width: width * 0.85,
                  alignSelf: "center",
                }}
              >
                <Text style={{ color: "red" }}> {errorEmail}</Text>
              </View>
            ) : null}
            <View style={styles.y1}>
            <TouchableOpacity>
              <ImageBackground
                source={require("../../../assets/images/weight/weight.png")}
                style={styles.weight}
              >
                <View style={styles.vie1}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "rgb(84,139,134)",
                      fontWeight: "400",
                    }}
                  >
                  
                    Weight
                  </Text>
                </View>
                <View style={styles.vie2}>
                  <Text
                    style={{ fontSize: 18, color: "white", fontWeight: "400" }}
                  >
                    
                    65.5 KG
                  </Text>
                </View>
                <View style={styles.vie3}>
                  <ImageBackground
                    source={require("../../../assets/images/tik/Vector.png")}
                    style={styles.tik}
                  />
                </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={styles.y2}>
            <TouchableOpacity>
              <ImageBackground
                source={require("../../../assets/images/weight/weight.png")}
                style={styles.weight1}
              >
                <View style={styles.view1}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "rgb(84,139,134)",
                      fontWeight: "400",
                    }}
                  >
                    {" "}
                    Height{" "}
                  </Text>
                </View>
                <View style={styles.view2}>
                  <Text
                    style={{ fontSize: 18, color: "white", fontWeight: "400" }}
                  >
                    {" "}
                    65.5 CM
                  </Text>
                </View>
                <View style={styles.view3}>
                  <ImageBackground
                    source={require("../../../assets/images/tik/Vector.png")}
                    style={styles.tik1}
                  />
                </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Edit;

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
    width: width * 1,
    // backgroundColor: "yellow",
    // alignSelf: "center",
    justifyContent: "space-around",
    // alignItems: "flex-end",
    flexDirection: "row",
  },
  arrow: {
    height: height * 0.07,
    width: width * 0.15,
    // backgroundColor: "red",
    // alignSelf: "flex-end",
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
    alignItems: "center",
  },
  a2: {
    height: height * 0.08,
    width: width * 0.3,
    // backgroundColor: "red",
    justifyContent: "center",
    // alignItems:'flex-end',
    // alignSelf:'flex-end'
  },
  linearGradient: {
    height: height * 0.07,
    width: width * 0.28,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  halfbg: {
    height: height * 0.8,

    width: width * 1,
  },
  halfbgview: {
    height: height * 0.8,
    width: width * 0.98,
   
    justifyContent: "center",
    //
  },
  outlinecircle: {
    height: height * 0.21,
    width: width * 0.378,
    // alignItems:'center',
    alignSelf: "center",
    justifyContent:'center',
    // backgroundColor: "red",
    
  },
  men1: {
    height: height * 0.17,
    width: width * 0.34,
    // backgroundColor:'yellow',
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    //  position:'absolute',
  },
  menimageview: {
    height: 100,
    width: 100,
  },
  menimageinner: {
    height: 45,
    width: 45,
    borderRadius: 45,
    backgroundColor: "cyan",
    position: "absolute",
    // alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    height: 20,
    width: 20,
  },
  a11: {
    height: height * 0.23,
    width: width * 0.5,
    // backgroundColor: "green",
    alignItems: "flex-end",
    // alignSelf:'flex-end',
    justifyContent: "flex-end",
  },
  b1: {
    height: height * 0.09,
    width: width * 1,
    // backgroundColor: "pink",
    justifyContent: "center",
  },
  firstnam: {
    height: height * 0.08,
    width: width * 1,
    //  alignSelf:'center'
    alignItems: "center",
    justifyContent: "center",
  },
  b2: {
    height: height * 0.09,
    width: width * 1,
    // backgroundColor: "cyan",
    justifyContent: "center",
  },
  firstnam1: {
    height: height * 0.08,
    width: width * 1,
    //  alignSelf:'center'
    alignItems: "center",
    justifyContent: "center",
  },
  b3: {
    height: height * 0.1,
    width: width * 1,
    // backgroundColor: "yellow",
    // justifyContent: "center",
    // alignItems:'center',
  },
  firstnam121: {
    height: height * 0.1,
    width: width * 1,
    // backgroundColor: "red",
    // alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  bio: {
    height: height * 0.07,
    width: width * 0.82,
    // backgroundColor: "blue",
    fontSize: 18,
    fontWeight: "400",
  },
  tog: {
    height: height * 0.05,
    width: width * 1,
    // backgroundColor: "cyan",
    alignSelf: "center",
    flexDirection: "row",
    // alignSelf:'center',
    // alignItems:'center',
    justifyContent: "space-evenly",
  },
  tog1: {
    height: height * 0.047,
    width: width * 0.33,
    // backgroundColor: "pink",
    alignSelf: "center",
    justifyContent: "center",
    // alignItems:'center'
  },
  tog2: {
    height: height * 0.04,
    width: width * 0.39,
    // backgroundColor: "green",
    alignSelf: "center",
    justifyContent: "center",
  },
  imgbg: {
    height: height * 0.06,
    width: width * 0.53,
  },
  imgbg1: {
    height: height * 0.06,
    width: width * 0.553,
  },
  q1: {
    height: height * 0.06,
    width: width * 0.15,
    // backgroundColor: "indigo",
    justifyContent: "center",
    alignSelf: "center",
  },
  q2: {
    height: height * 0.05,
    width: width * 0.153,
    // backgroundColor: "blue",
    alignSelf: "center",
    justifyContent: "center",
  },
  img: {
    height: height * 0.12,
    width: width * 0.23,
    justifyContent: "center",
    alignItems: "center",
  },
  img1: {
    height: height * 0.12,
    width: width * 0.23,
    justifyContent: "center",
    alignItems: "center",
  },
  mail: {
    height: height * 0.09,
    width: width * 1,
    // backgroundColor: "red",
    justifyContent: "flex-start",

    // alignItems:'flex-end',
    // alignSelf: "center",
  },
  mailbox: {
    height: height * 0.1,
    width: width * 1,
    // justifyContent:'center',
    alignSelf: "flex-start",
    justifyContent: "flex-start",
  },
  email: {
    height: height * 0.085,
    width: width * 0.8,
    // backgroundColor: "blue",
    alignSelf: "center",
    alignItems:'center',
    justifyContent:'center',
    fontSize: 18,
    fontWeight: "400",
  },
  y1: {
    height: height * 0.073,
    width: width * 1,
    // backgroundColor: "pink",
  },
  weight: {
    height: height * 0.07,
    width: width * 1,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  vie1: {
    height: height * 0.05,
    width: width * 0.36,
    // backgroundColor: "red",
    justifyContent: "center",
    // position:'absolute'
  },
  vie2: {
    height: height * 0.05,
    width: width * 0.3,
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "flex-end",
    // justifyConten
    // position:'absolute'
  },
  vie3: {
    height: height * 0.05,
    width: width * 0.14,
    // backgroundColor: "indigo",
    justifyContent: "center",
    // position:'absolute'
  },
  tik: {
    height: height * 0.02,
    width: width * 0.059,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  y2: {
    height: height * 0.0699,
    width: width * 1,
    // backgroundColor: "indigo",
    justifyContent: "flex-end",
  },
  weight1: {
    height: height * 0.07,
    width: width * 1,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    height: height * 0.05,
    width: width * 0.36,
    // backgroundColor: "red",
    justifyContent: "center",
    // position:'absolute'
  },
  view2: {
    height: height * 0.05,
    width: width * 0.3,
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "flex-end",
    // justifyConten
    // position:'absolute'
  },
  view3: {
    height: height * 0.05,
    width: width * 0.14,
    // backgroundColor: "indigo",
    justifyContent: "center",
    // position:'absolute'
  },
  tik1: {
    height: height * 0.02,
    width: width * 0.059,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
