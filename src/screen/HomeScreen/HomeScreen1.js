import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,TouchableOpacity
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {FlatListSlider} from 'react-native-flatlist-slider';
import { IMAGEPATH } from "../Icon/Icon";
const {height, width} = Dimensions.get('screen');
const List = [
  {
    key: '1',
    img: require('../../assets/images/Park/park.png'),
  },
  {
    key: '2',
    img: require('../../assets/images/Park/park.png'),
  },
  {
    key: '3',
    img: require('../../assets/images/Park/park.png'),
  },
];
 const HomeScreen1 = (props) => (
  <View style={styles.container}>
    <ImageBackground  source={IMAGEPATH.SPLASH_BACKGROUND}  style={styles.image}>
      <SafeAreaView style={{height:height*1,width:width*1}}>
        <View style={styles.main}>
        <View style={styles.upperPart}>
        <View style={{flexDirection:'column'}}>
          <Text style={styles.text1}>Hello! Umair Siddiqui</Text>
          <Text style={styles.text2}>Let’s Move2Earn</Text>
        </View>
          <View style={styles.bell}>
          <Image  source={IMAGEPATH.BELL1_ICON}  />
          </View>
          <View style={{height:height*0.08,justifyContent:'center'}}>
          <Image  source={IMAGEPATH.MEN1_ICON} style={styles.person} /> 
          </View>
          </View>
        
         <View style={styles.park}>
         <FlatListSlider
            data={List}
            imageKey={'img'}
            local
            height={163}
            width={384}
            timer={5000}
            onPress={item => alert(JSON.stringify(item))}
            //contentContainerStyle={{paddingHorizontal: 2}}
            indicatorContainerStyle={{position: 'absolute', bottom:-10}}
            indicatorActiveColor={'#1EB808'}
            indicatorInActiveColor={'grey'}
            indicatorActiveWidth={30}
            animation
          />


           
         </View>
         

          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          <View style={styles.Square}>
          <ImageBackground source={IMAGEPATH.SQUARE_ICON} style={{height:height*0.13,width:width*0.25,}}> 
          <View style={{height:height*0.076,justifyContent:'center'}}  >
          <Image source={IMAGEPATH.RUNNING_ICON}  style={styles.Running}  /> 
          </View>
          <Text style={{color:'white',textAlign:'center'}}>
            Running
          </Text>
          </ImageBackground>
          </View>
          <View style={styles.Square}>
          <ImageBackground source={IMAGEPATH.SQUARE_ICON} style={{height:height*0.13,width:width*0.25,}}> 
          <View style={{height:height*0.074,justifyContent:'center'}}  >
          <Image source={IMAGEPATH.CYCLING_ICON}  style={styles.Running}  /> 
          </View>
          <Text style={{color:'white',textAlign:'center'}}>
           Cycling
          </Text>
          </ImageBackground>
          </View>
          <View style={styles.Square1}>
          <ImageBackground source={IMAGEPATH.SQUARE_ICON} style={{height:height*0.13,width:width*0.25,}}> 
          <View style={{height:height*0.074,justifyContent:'center'}}  >
          <Image source={IMAGEPATH.WALKING_ICON} style={styles.Running}  /> 
          </View>
          <Text style={{color:'white',textAlign:'center'}}>
           Walking
          </Text>
          </ImageBackground>
          </View>
          
          </View>
          <View style={{height:height*0.07}}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:18,height:height*0.03,fontFamily:''}}>
              Finished Tasks
            </Text>
            <Text style={{color:'grey'}}>
              Day Time
            </Text>
          </View>
          <View >
            <ImageBackground source={IMAGEPATH.RECTANGLE1_ICON} style={styles.RECTANGLE1_ICON}>
            <View style={{flexDirection:'row',height:height*0.06,width:width*0.4,justifyContent:'center',alignContent:'center',}}>
            <View style={{height:height*0.08,width:width*0.1,justifyContent:'center',}}>
            <Image source={IMAGEPATH.RUNNING_ICON} style={styles.Run1}/>
            </View>
            <View style={{height:height*0.08,width:width*0.2,justifyContent:"center",}} >
            <Text style={{color:'white',fontWeight:'bold',fontSize:12,}}>0/150 min</Text>
            </View>
            </View>
            <View style={{flexDirection:'row',height:height*0.05,width:width*0.4,justifyContent:'center',alignContent:'center',}}>
            <View style={{height:height*0.05,width:width*0.1,justifyContent:'center',}}>
            <Image source={IMAGEPATH.RUNNING_ICON} style={styles.Run1}/>
            </View>
            <View style={{height:height*0.05,width:width*0.2,justifyContent:"center",}} >
            <Text style={{color:'white',fontWeight:'bold',fontSize:12,}}>0/150 min</Text>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.BGGREEN_ICON}>
              <ImageBackground source={IMAGEPATH.BGGREEN_ICON} style={styles.bgGreen}>
             <View style={{height:height*0.036,width:width*0.22,justifyContent:'center',}}>
               <Text style={styles.ViewAll}>
               View all
               </Text>
             </View>
              </ImageBackground>
            </View>
            <View style={{height:height*0.096,width:width*0.68,alignSelf:'center',alignItems:'center',bottom:75,paddingRight:86}}>
            <AnimatedCircularProgress
  size={110}
  width={22}
  fill={60}
  backgroundWidth={13}
  rotation={300}
  tintColor="#1EB808"
    backgroundColor="#4C536E"
  padding={10}
  onAnimationComplete={() => console.log('onAnimationComplete')}
  
  />


            </View>
        </View>

            </ImageBackground>
          </View>
          <View>
            <ImageBackground source={IMAGEPATH.LONGEST_ICON} style={styles.LONGEST_ICON} >
            <View style={{flexDirection:'row'}}>
              <View style={{height:height*0.099,justifyContent:'center',width:width*0.17,alignItems:'center',}}>
                <Image  source={IMAGEPATH.LOCATION_ICON} style={styles.LOCATION_ICON} />
              </View>
              <View style={{height:height*0.099,justifyContent:'center',width:width*0.3,alignItems:'center',}}>
                <Text style={{fontWeight:'bold',color:'white'}}>
                  Longest Distance
                </Text>
              </View>
              <View style={{height:height*0.099,justifyContent:'center',width:width*0.6,alignItems:'center',}}>
                <Text style={{fontWeight:'bold',color:'white'}}>
                 3.2 Km
                </Text>
              </View>
              </View>
            </ImageBackground>
          </View>
          <View>
           <ImageBackground source={IMAGEPATH.TAB_ICON} style={styles.TAB_ICON}>
           <View style={{flexDirection:'row'}}>
           <TouchableOpacity onPress={()=>props.navigation.navigate('MyShoes')}>
           <View style={{height:height*0.099,justifyContent:'center',width:width*0.39,alignItems:'center',}}>
             <Image  source={IMAGEPATH.HOME_ICON} style={styles.HOME_ICON}/>
           </View>
           </TouchableOpacity>
           <TouchableOpacity>
           <View style={{height:height*0.099,justifyContent:'center',width:width*0.28,alignItems:'center',}}>
            <ImageBackground source={IMAGEPATH.HEXAGON_ICON} style={styles.Hexagon_ICON}>
            <View style={{height:height*0.065,justifyContent:'center',width:width*0.12,alignItems:'center',}}>
            <Image source={IMAGEPATH.RUNNING_ICON}  style={styles.Running1}/>
            </View>
            </ImageBackground>
           </View>
           </TouchableOpacity>
           <TouchableOpacity>
           <View style={{height:height*0.099,justifyContent:'center',width:width*0.35,alignItems:'center',}}>
             <Image  source={IMAGEPATH.BLOCKS_ICON} style={styles.HOME_ICON}/>
           </View>
           </TouchableOpacity>
           </View>
           </ImageBackground>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
  },
  main: {
    alignSelf: 'center',
    height: height * 1,
    width: width * 0.9,
    //backgroundColor:'red',
  },
  image: {
    height: height * 1,
    width: width * 1,
 // backgroundColor:'green'
    //justifyContent: "center"
  },
  upperPart:{
    flexDirection:'row',
    height:height*0.07,//backgroundColor:'green'
  },
  text1: {
    fontWeight: 'bold',
    color: 'white',
    height: height * 0.03,
    width: width * 0.7,
    //fontSize:45

    //alignSelf:'center',
  },
  text2: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 23,
  },
  bell:{
    width:width*0.099,
    alignSelf:'center',
  },
person:{
height:35,
width:35,
alignSelf:'center',//backgroundColor:'red'
},
park:{
  height: height * 0.246,
  width: width * 0.89,
  justifyContent: 'center',
  alignSelf: 'center',
  //backgroundColor: 'cyan',

},
Square:{
//resizeMode:'contain',
height:height*0.12,
width:width*0.34,//backgroundColor:'red'
},
Square1:{
  //resizeMode:'contain',
  height:height*0.13,
  width:width*0.25,//backgroundColor:'red'
  },

Running:{
alignSelf:'center',
//resizeMode:'contain'
},
RECTANGLE1_ICON:{
height:156,
width:323,
alignSelf:'center',
resizeMode:'contain',
//backgroundColor:'yellow'
},
Run1:{
  height:20,
  width:20,
  resizeMode:'contain',
  alignSelf:'center',
},
BGGREEN_ICON:{
  height:height*0.07,
  width:width*0.36,
  justifyContent:'center',
  //backgroundColor:'yellow'
},
bgGreen:{
  height:40,
  width:80,
  resizeMode:'contain',
  alignSelf:'center',
},
ViewAll:{
  textAlign:'center',
  color:'white',
  fontWeight:'bold'
},
LONGEST_ICON:{
height:80,
//width:85,

},
LOCATION_ICON:{
height:26,width:24,justifyContent:'center',
},
TAB_ICON:{
  height:height*0.1,
  borderRadius:24,
  width:width*1,alignSelf:'center',
  resizeMode:'contain'
},
Hexagon_ICON:{
  height:53,
  width:47
},
Running1:{
  height:24,
  width:28,
  resizeMode:'contain',

}

});

export default HomeScreen1;
