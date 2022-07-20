import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
const Play = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../../assets/images/bgImage1/background.png')}>
        <StatusBar barStyle="light-content">
        </StatusBar>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.v1}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.v11}>
                <Image
                  source={require('../../assets/images/icon7/Vector.png')}
                  style={styles.img}
                />
              </View>
              <View style={styles.v12}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 24, color: 'white'}}>
                  205
                </Text>
              </View>
            </View>
            <View style={styles.walk}>
              <Text style={{fontSize: 16, color: 'white'}}>Walking </Text>
            </View>
          </View>

          <View style={styles.v2}>
            <View style={styles.v21}>
              <Text style={{fontSize: 16, color: 'white'}}> GPS</Text>
            </View>
            <View style={styles.v22}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/network/net.png')}
                style={styles.net}
              />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{height: 40, width: 30}}></View>
        <View style={styles.c1}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.c11}>
              <Image
                source={require('../../assets/images/clock/clock.png')}
                style={styles.imageclok}
              />
            </View>
            <View style={styles.c12}>
              <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>
                00:09
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.image}>
          <Image
            source={require('../../assets/images/image.png')}
            styles={styles.img2}
          />
        </View>
        <View style={styles.cont}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.cont1}>
              <View style={styles.b1}>
                <Text
                  style={{
                    fontSize: 40,
                    color: 'rgb(0,251,184)',
                    fontWeight: 'bold',
                  }}>
                  13
                </Text>
              </View>
              <View style={styles.b2}>
                <Text style={{fontSize: 16, color: 'white'}}>Metres </Text>
              </View>
            </View>
            <View style={styles.cont2}>
              <View style={styles.b11}>
                <Text
                  style={{fontSize: 34, color: 'white', fontWeight: 'bold'}}>
                  0.00
                </Text>
              </View>
              <View style={styles.b12}>
                <Text style={{fontSize: 16, color: 'white'}}>km/h </Text>
              </View>
            </View>
            <View style={styles.cont3}>
            
         <View style={{flexDirection:'row'}}>
        
              <View style={styles.b21}>
           
                <Text
                  style={{
                    fontSize: 34,
                    color: 'rgb(236,58,209)',
                    fontWeight: 'bold',
                  }}>
                  0.00
                </Text>
                <Text style={{fontSize:14,color:'white', }}>
                Earned SET
                </Text>
                
              </View>
             
              <View style={{
                height:height*0.08,
                width:width*0.1,
                // backgroundColor:'green',
                justifyContent:'center',
              }}>
              <View style={styles.imt}>
              <Image source={require('../../assets/images/dollar/Vector.png')}
              style={styles.dollar}
              />
              </View>
              </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.a2}>
          <View style={{flexDirection: 'row',}}>
            <View style={styles.a21}>
              <View
                style={{
                  height: height * 0.1,
                  width: width * 0.28,
                  // backgroundColor: 'yellow',
                  justifyContent: 'center',
                  // alignItems:'center'
                }}>
                <Image
                  source={require('../../assets/images/circle/circle.png')}
                  resizeMode="contain"
                  style={{height: '240%', width: '150%'}}
                />
              </View>
              <View
                style={{
                  height: height * 0.1,
                  width: width * 0.25,
                  // backgroundColor: 'cyan',
                  justifyContent: 'center',
                  position: 'absolute',
                  alignItems: 'center',
                  alignItems: 'flex-end',
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/shoes/image.png')}
                    resizeMode="contain"
                    style={{height: 50, width: 60}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.a22}>
              <ImageBackground
                source={require('../../assets/images/outlinecircle/outlinecircle.png')}
                style={styles.outline}>
                <View style={styles.a25}>
                  <TouchableOpacity  onPress={() => navigation.navigate('CountDown')}>
                    <Text
                      style={{
                        fontSize: 26,
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      
                      Pause
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.a23}>
            <View
                style={{
                  height: height * 0.14,
                  width: width * 0.3,
                  // backgroundColor: 'yellow',
                  justifyContent: 'center',
                  // alignself:'center',
                  // alignItems:'center'
                }}>
                <Image
                  source={require('../../assets/images/circle/circle.png')}
                  resizeMode="contain"
                  style={{height: '240%', width: '150%'}}
                />
              </View>
              <View
                style={{
                  height: height * 0.13,
                  width: width * 0.24,
                  // backgroundColor: 'cyan',
                  justifyContent: 'center',
                  position: 'absolute',
                  alignItems: 'center',
                  alignItems: 'flex-end',
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/lasticon/Group.png')}
                    resizeMode="contain"
                    style={{height: 40, width: 40}}
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

export default Play;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    //  justifyContent:'center',
    // alignItems:'center',
    justifyContent: 'center',
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  v2: {
    height: height * 0.12,
    width: width * 0.6,
    // backgroundColor: 'pink',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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
  },
  v12: {
    height: height * 0.04,
    width: width * 0.2,
    // backgroundColor: 'cyan',
    alignItems: 'center',
  },
  walk: {
    height: height * 0.03,
    width: width * 0.3,
    // backgroundColor:'green',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  v21: {
    height: height * 0.04,
    width: width * 0.2,
    // backgroundColor: 'green',
    //  alignSelf:'center
    // alignItems:'center',
    justifyContent:'center',
    // alignSelf:'center'
  },
  a1: {
    height: height * 0.04,
    width: width * 0.3,
   // backgroundColor: 'indigo',
  },
  v22: {
    height: height * 0.04,
    width: width * 0.2,
    // backgroundColor:'red',
  },
  net: {
    height: height * 0.034,
    width: width * 0.078,
    // backgroundColor: 'indigo',
  },
  c1: {
    height: height * 0.09,
    width: width * 0.92,
    backgroundColor: 'rgb(43,60,53)',
    alignSelf: 'center',
    borderRadius: 10,
  },
  c11: {
    height: height * 0.06,
    width: width * 0.2,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  c12: {
    height: height * 0.09,
    width: width * 0.4,
    //  backgroundColor: 'pink',
    justifyContent: 'center',
    // alignSelf:'flex-end',
    alignItems: 'center',
  },
  image: {
    height: height * 0.44,
    width: width * 0.8,
    // backgroundColor: 'pink',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img2: {
    height: height * 0.1,
    width: width * 0.4,
    // backgroundColor:'cyan',
  },
  cont: {
    height: height * 0.1,
    width: width * 0.9,
    // backgroundColor: 'cyan',
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  cont1: {
    height: height * 0.09,
    width: width * 0.28,
    backgroundColor: 'rgb(40,77,48)',
    borderRadius: 8,
  },
  cont2: {
    height: height * 0.09,
    width: width * 0.28,
    backgroundColor: 'rgb(40,77,48)',
    borderRadius: 8,
  },
  cont3: {
    height: height * 0.09,
    width: width * 0.28,
   backgroundColor: 'rgb(40,77,48)',
    borderRadius: 8,
  },
  b1: {
    height: height * 0.06,
    width: width * 0.15,
    // backgroundColor: 'pink',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  b2: {
    height: height * 0.027,
    width: width * 0.2,
    // backgroundColor: 'indigo',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  b11: {
    height: height * 0.058,
    width: width * 0.25,
    // backgroundColor: 'pink',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  b12: {
    height: height * 0.027,
    width: width * 0.2,
    // backgroundColor: 'indigo',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  b21: {
    height: height * 0.08,
    width: width * 0.21,
    //  backgroundColor: 'pink',
    // alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  b22: {
    height: height * 0.027,
    width: width * 0.22,
    // backgroundColor: 'indigo',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageclok: {
    height: height * 0.045,
    width: width * 0.1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    // alignItems:"center",
  },
  a2: {
    height: height * 0.15,
    width: width * 1,
    // backgroundColor: 'indigo',
    // alignSelf: 'center',
    // justifyContent: 'flex-start',
    justifyContent:'space-between'
  },
  a21: {
    height: height * 0.14,
    width: width * 0.32,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent:'space-between',
    justifyContent: 'center',
  },
  a22: {
    height: height * 0.15,
    width: width * 0.33,
    // backgroundColor: 'green',
    // justifyContent:'center',
    // alignItems:'center',
    // alignSelf:'center'
  },
  a23: {
    height: height * 0.14,
    width: width * 0.3,
    // backgroundColor: 'red',
    // justifyContent:'flex-start',
    alignSelf:'flex-start',

    
   
  },
  circle: {
    height: height * 0.14,
    width: width * 0.6,
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  c15: {height: height * 0.03, width: width * 0.1,
    //  backgroundColor: 'pink'
  },
  outline: {
    height: height * 0.19,
    width: width * 0.33,
  },
  a25: {
    height: height * 0.15,
    width: width * 0.2,
    //  backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    //  position:'absolute',
  },
  imt:
  {
    height:22,
    width:20,
    backgroundColor:'white',
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',

  }, 
  dollar:
  {
    height:10,
    width:20,
  }
});
