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
  FlatList,ScrollView
} from 'react-native';
import React, { useState } from 'react'
import * as Progress from 'react-native-progress';

const {height, width} = Dimensions.get('window');
const image1 = [
  {
    ImageBackground: require('../assets/images/greenContainer/greenimg.png'),
    image: require('../assets/images/redHeart/redHeart.png'),
    image1: require('../assets/images/CYCLE/Cycle.png'),
    text1: 'Level:',
    number1: '9',
    text2: 'Bread:',
    number2: '2/7',
  },
  {
      ImageBackground:require('../assets/images/greenContainer/greenimg.png'),
      image:require('../assets/images/redHeart/redHeart.png'),
      image1:require('../assets/images/CYCLE/Cycle.png'),
      text1:'Level:',
      number1:'9',
      text2:'Bread:',
      number2:'2/7',

      },
  {
    ImageBackground:require('../assets/images/greenContainer/greenimg.png'),
    image:require('../assets/images/redHeart/redHeart.png'),
    image1:require('../assets/images/CYCLE/Cycle.png'),
    text1:'Level:',
    number1:'9',
    text2:'Bread:',
    number2:'2/7',

    },
    {
      ImageBackground:require('../assets/images/greenContainer/greenimg.png'),
      image:require('../assets/images/redHeart/redHeart.png'),
      image1:require('../assets/images/CYCLE/Cycle.png'),
      text1:'Level:',
      number1:'9',
      text2:'Bread:',
      number2:'2/7',

      },
      {
        ImageBackground:require('../assets/images/greenContainer/greenimg.png'),
        image:require('../assets/images/redHeart/redHeart.png'),
        image1:require('../assets/images/CYCLE/Cycle.png'),
        text1:'Level:',
        number1:'9',
        text2:'Bread:',
        number2:'2/7',
  
        },
        {
          ImageBackground:require('../assets/images/greenContainer/greenimg.png'),
          image:require('../assets/images/redHeart/redHeart.png'),
          image1:require('../assets/images/CYCLE/Cycle.png'),
          text1:'Level:',
          number1:'9',
          text2:'Bread:',
          number2:'2/7',
    
          },
          {
            ImageBackground:require('../assets/images/greenContainer/greenimg.png'),
            image:require('../assets/images/redHeart/redHeart.png'),
            image1:require('../assets/images/CYCLE/Cycle.png'),
            text1:'Level:',
            number1:'9',
            text2:'Bread:',
            number2:'2/7',
      
            },
            {
              ImageBackground:require('../assets/images/greenContainer/greenimg.png'),
              image:require('../assets/images/redHeart/redHeart.png'),
              image1:require('../assets/images/CYCLE/Cycle.png'),
              text1:'Level:',
              number1:'9',
              text2:'Bread:',
              number2:'2/7',
        
              },
              {
                  ImageBackground:require('../assets/images/greenContainer/greenimg.png'),
                  image:require('../assets/images/redHeart/redHeart.png'),
                  image1:require('../assets/images/CYCLE/Cycle.png'),
                  text1:'Level:',
                  number1:'9',
                  text2:'Bread:',
                  number2:'2/7',
            
                  },
];
const images2 = [
  {
    ImageBackground: require('../assets/images/greenContainer/greenimg.png'),
    image: require('../assets/images/redHeart/redHeart.png'),
    image1: require('../assets/images/shoes/shoes.png'),
    text1: 'Level:',
    number1: '9',
    text2: 'Bread:',
    number2: '2/7',
  },
  {
      ImageBackground:require('../assets/images/greenContainer/greenimg.png'),
      image:require('../assets/images/redHeart/redHeart.png'),
      image1:require('../assets/images/shoes/shoes.png'),
      text1:'Level:',
      number1:'9',
      text2:'Bread:',
      number2:'2/7',

      },
  {
    ImageBackground:require('../assets/images/greenContainer/greenimg.png'),
    image:require('../assets/images/redHeart/redHeart.png'),
    image1:require('../assets/images/shoes/shoes.png'),
    text1:'Level:',
    number1:'9',
    text2:'Bread:',
    number2:'2/7',

    },
    {
      ImageBackground:require('../assets/images/greenContainer/greenimg.png'),
      image:require('../assets/images/redHeart/redHeart.png'),
      image1:require('../assets/images/shoes/shoes.png'),
      text1:'Level:',
      number1:'9',
      text2:'Bread:',
      number2:'2/7',

      },
      {
        ImageBackground:require('../assets/images/greenContainer/greenimg.png'),
        image:require('../assets/images/redHeart/redHeart.png'),
        image1:require('../assets/images/shoes/shoes.png'),
        text1:'Level:',
        number1:'9',
        text2:'Bread:',
        number2:'2/7',
  
        },
        {
          ImageBackground:require('../assets/images/greenContainer/greenimg.png'),
          image:require('../assets/images/redHeart/redHeart.png'),
          image1:require('../assets/images/shoes/shoes.png'),
          text1:'Level:',
          number1:'9',
          text2:'Bread:',
          number2:'2/7',
    
          },
          {
            ImageBackground:require('../assets/images/greenContainer/greenimg.png'),
            image:require('../assets/images/redHeart/redHeart.png'),
            image1:require('../assets/images/shoes/shoes.png'),
            text1:'Level:',
            number1:'9',
            text2:'Bread:',
            number2:'2/7',
      
            },
            {
              ImageBackground:require('../assets/images/greenContainer/greenimg.png'),
              image:require('../assets/images/redHeart/redHeart.png'),
              image1:require('../assets/images/shoes/shoes.png'),
              text1:'Level:',
              number1:'9',
              text2:'Bread:',
              number2:'2/7',
        
              },
];


const MyShoes = ({navigation}) => {
const [check,setCheck]= useState('Shoes')

  return (
  
  
    <View style={styles.main}>
    
      <ImageBackground
        style={styles.bgImage}
        source={require('.././assets/images/bgImage1/background.png')}>
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={{height: height * 0.05}}></View>

        <View style={styles.v1}>
          <View style={styles.v11}>
            <View>
              <Image
                source={require('../assets/images/men/men.png')}
                styles={styles.image}
              />
            </View>
          </View>
          <View style={styles.v12}>
            <View style={styles.a1}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.v121}>
                  <Image
                    source={require('/Users/mobiloitte/Move2Earn/src/assets/images/Dollar.png')}
                    style={{height: 12, width: 12}}
                  />
                </View>
                <View style={styles.v122}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    30/100
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                alignSelf: 'center',
                height: height * 0.01,
                width: width * 0.3,
                // backgroundColor: "indigo",
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Progress.Bar
                progress={0.3}
                width={100}
                height={5}
                color="green"
              />
            </View>
          </View>

          <View style={styles.v12}>
            <View style={styles.a1}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.v121}>
                  <Image
                    source={require('/Users/mobiloitte/Move2Earn/src/assets/images/Dollar.png')}
                    style={{height: 12, width: 12}}
                  />
                </View>
                <View style={styles.v122}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    30/100
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                alignSelf: 'center',
                height: height * 0.01,
                width: width * 0.2,
                // backgroundColor: "indigo",
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Progress.Bar
                progress={0.3}
                width={100} 
                height={5}
                color="green"
              />
            </View>
          </View>
          <View style={styles.v14}>
            <TouchableOpacity></TouchableOpacity>
          </View>
        </View>
        <View style={{height: 22}}>
          <Image
            source={require('../assets/images/Line/Line.png')}
            style={{
              height: height * 0.002,
              width: width * 0.9,
              alignSelf: 'center',
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View>
          <TouchableOpacity onPress={()=>setCheck('Cycle')}>
            <Text style={{color: 'white'}}>MY SHOES</Text>
            </TouchableOpacity>
            

            <View style={styles.bar}>
            { check == 'Cycle' ?
          <Image
            source={require('../assets/images/BAR/bar.png')}
            style={{height: 4, width: 154}}
          />
            :null}
        </View>
        {/* : <View style={styles.bar}></View>} */}
          </View>
          <View style={{height:height*0.03,width:width*0.2,}}>
          <TouchableOpacity onPress={()=>setCheck('Shoes')}>
            <Text style={{color: 'white'}}>MY CYCLE</Text>
            </TouchableOpacity>
            { check == 'Shoes' ?
            <View style={styles.bar}>
          <Image
            source={require('../assets/images/BAR/bar.png')}
            style={{height: 4, width: 154}}
          />
        </View>
        : <View style={styles.bar}></View>}
          </View>
        </View>

       
        <View >
        { check == 'Shoes' ?
          <FlatList
          numColumns={2}
            data={image1}
            showsVerticalScrollIndicator={false}
           // horizontal={true}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity>
                    <View style={styles.Shoes}>
                      <ImageBackground
                        source={item.ImageBackground}
                        style={{height: 300, width: 200, alignSelf: 'center'}}>
                        <View
                          style={{
                            height: height * 0.18,
                            width: width * 0.66,
                            justifyContent: 'center',
                          }}>
                          <Image
                            source={item.image}
                            style={{height: 10, alignSelf: 'center'}}
                          />
                        </View>
                        <View
                          style={{
                            height: height * 0.01,
                            justifyContent: 'center',
                            width: width * 0.44,
                          }}>
                          <Image
                            source={item.image1}
                            style={{height: 100, alignSelf: 'center',resizeMode:'contain'}}
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            height: height * 0.14,
                            width: width * 0.45,
                            alignSelf:'center',
                            top: 68,
                            //backgroundColor:'green'
                          }}>
                          <View style={{ height: height * 0.14,
                            width: width * 0.09,alignSelf:'center',}}>
                            <Text style={{color:'white',}}>{item.text1}</Text>
                          </View>
                          <View >
                            <Text style={{color:'#1EB808',width:33}} >{item.number1}</Text>
                          </View>
                          <View style={{ height: height * 0.022,
                            width: width * 0.09,alignContent:'center'}}>
                            <Text style={{color:'white',}}>{item.text2}</Text>
                          </View>
                          <View>
                            <Text style={{color:'#1EB808',width:52}}>{item.number2}</Text>
                          </View>
                        </View>
                      </ImageBackground>
                      
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
         :
         <View >
          
          <FlatList
          numColumns={2}
            data={images2}
            showsVerticalScrollIndicator={false}
           // horizontal={true}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity>
                    <View style={styles.Shoes}>
                      <ImageBackground
                        source={item.ImageBackground}
                        style={{height: 300, width: 200, alignSelf: 'center'}}>
                        <View
                          style={{
                            height: height * 0.18,
                            width: width * 0.66,
                            justifyContent: 'center',
                          }}>
                          <Image
                            source={item.image}
                            style={{height: 10, alignSelf: 'center'}}
                          />
                        </View>
                        <View
                          style={{
                            height: height * 0.01,
                            justifyContent: 'center',
                            width: width * 0.44,
                          }}>
                          <Image
                            source={item.image1}
                            style={{height: 100, alignSelf: 'center'}}
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            //justifyContent: 'space-evenly',
                            height: height * 0.14,
                            width: width * 0.47,
                            //alignSelf:'center',
                            top: 68,
                            //backgroundColor:'green'
                          }}>
                          <View style={{ height: height * 0.022,
                            width: width * 0.13,alignContent:'center'}}>
                            <Text style={{color:'white',textAlign:'center'}}>{item.text1}</Text>
                          </View>
                          <View >
                            <Text style={{color:'#1EB808',width:33}} >{item.number1}</Text>
                          </View>
                          <View style={{ height: height * 0.022,
                            width: width * 0.11,alignContent:'center'}}>
                            <Text style={{color:'white',}}>{item.text2}</Text>
                          </View>
                          <View>
                            <Text style={{color:'#1EB808',width:43}}>{item.number2}</Text>
                          </View>
                        </View>
                      </ImageBackground>
                      
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
          
          
        </View>
        }
        </View>
      </ImageBackground>
    
    </View>
   
  );
};

export default MyShoes;

const styles = StyleSheet.create({
  safe: {
    height: height * 0.01,
    width: width * 1,
    backgroundColor: 'white',
  },
  main: {
    height: height * 1,
    width: width * 0.8,
    //backgroundColor: 'brown',
  },
  image: {
    height: 44,
    width: 54,
  },
  v1: {
    height: height * 0.12,
    width: width * 1,
    //backgroundColor: "red",
    flexDirection: 'row',
  },
  v11: {
    height: height * 0.09,
    width: width * 0.16,
    //  backgroundColor: 'yellow',
    // alignSelf: "flex-end",
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  v12: {
    height: height * 0.08,
    width: width * 0.426,
    //backgroundColor: 'pink',
  },

  a1: {
    height: height * 0.07,
    width: width * 0.3,
    // backgroundColor:'green',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  bgImage: {
    height: height * 1,
    width: width * 1,
  },
  v121: {
    backgroundColor: 'white',

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: 30,
    width: 30,
  },

  v122: {
    height: height * 0.03,
    width: width * 0.2,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    height: height * 0.04,
    width: width * 0.19,
    //backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Shoes: {
    flexDirection: 'row',
    height: height * 0.276,
    width: width * 0.42,
    marginLeft:width*0.076,
    //backgroundColor:'red',
    justifyContent: 'space-evenly',
    //alignSelf:'center'
  },
  Cycle: {
    flexDirection: 'row',
    height: height * 0.276,
    width: width * 0.51,
    //backgroundColor:'red',
   // justifyContent: 'center',
    alignSelf:'center'
  },
  
});
