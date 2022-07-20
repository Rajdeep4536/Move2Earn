import { StyleSheet, TouchableOpacity, SafeAreaView,StatusBar, Dimensions, Image, View, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IMAGEPATH } from "../Icon/Icon";

const { height, width } = Dimensions.get('window');
const Splash = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setTimeout(function () {
            //   alert('This is Splash Screen');
            props.navigation.navigate('Register')
            setIsVisible(true);
        }, 3000);
    }, []);

    return (
        <View style={styles.main}>
            <ImageBackground style={styles.backgroundStyles}

                source={IMAGEPATH.SPLASH_BACKGROUND}>
                    <StatusBar barStyle="light-content"></StatusBar>
                <View style={styles.Image}>
                    
                        <Image style={styles.SPLASH_LOGO}
                        source={IMAGEPATH.SPLASH_LOGO} />
                   
                </View>
            </ImageBackground>
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    backgroundStyles: {
        height: height * 1,
        width: width * 1
    },
    main: {
        height: height * 1,
        width: width * 1,
        // backgroundColor: 'UIColor(red: 0.961, green: 0.961, blue: 0.961, alpha: 1)'
    },
    Image: {
        height: height * 0.25,
        width: width * 0.65,
        // backgroundColor: 'pink',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        // marginHorizontal: 10,
        marginVertical: 280,
        resizeMode:"contain"
       
    },
    SPLASH_LOGO:{
        resizeMode:'contain',
        height:213,
        width:202
      //  position:'absolute'
    }
});