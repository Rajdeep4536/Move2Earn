import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, StatusBar, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { IMAGEPATH } from '../Icon/Icon';
const { height, width } = Dimensions.get('window');
const Login = (props) => {
    const [error, setError] = useState(false);
    //****Step-1 */
    //***For-Email */
    const [Email, setEmail] = useState('');
    const [checkEmail, setCheckEmail] = useState();
    const [errorEmail, setErrorEmail] = useState(null);
    //**For-Password */
    const [Password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState();
    const [errorPassword, setErrorPassword] = useState(null);
    //***Step-2 */
    //**for-Email */
    const _emailValidate = email => {
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email === '' || email === undefined || email === null) {
            setErrorEmail('*Plese enter email,');
        }
        if (!emailRegex.test(email)) {
            setErrorEmail('*Plese enter valid email.');

        } else {
            setErrorEmail(null);
        }
    };
    //**For-Password */
    const _passwordvalidate = pass => {
        var passwordRegex =
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
        if (pass === '') {
            setErrorPassword('*Please enter password.');
            setCheckPassword(false)
        } else if (/([A-Z]+)/g.test(pass) && pass.length < 8) {
            setErrorPassword(
                'Please enter a special character and length must be 8 digit.',
            );
            setCheckPassword(false)
        } else if (!passwordRegex.test(pass)) {
            setErrorPassword('*Please enter valid password.');
            setCheckPassword(false)
        } else {
            setErrorPassword(null);
            setCheckPassword(true)
        }
    };
    //***Step-3 */
    const validate = props => {
        let flag = true;
        if (Email === '') {
            setErrorEmail('Please enter email.');
            flag = false;
        }
        if (Password === '') {
            setErrorPassword('Please enter  password .');
            flag = false;
        }
        return flag;
    };
    /***Step-4 */
    const onSubmit = () => {
        if (validate()) {
            alert('success');
            props.navigation.navigate('Wallet');

        } else {
            alert('Validation Failed');
        }
    };

    return (
       
        <View style={styles.mainContainer}>
        <ScrollView>
            <ImageBackground style={styles.ImageBackground}
                source={IMAGEPATH.SPLASH_BACKGROUND} >
                <StatusBar barStyle="light-content"></StatusBar>
                <View style={styles.fakeVIew}></View>
                {/* <View style={styles.charchterView} > */}
                <View style={{ height: height * 1, width: width * 1, alignSelf: "center",  alignItems: 'center' }}>
                    <ImageBackground style={styles.CHARACHTER_ICON}
                        source={IMAGEPATH.CHARACHTER_ICON}>
                        {/* </View> */}
                        <View style={styles.loginMainVIew}></View>
                        <View style={{ height: height * 1, width: width * 1, alignSelf: "center",  alignItems: 'center' }}>
                            <View style={styles.loginSecondView} >
                                <ImageBackground style={styles.backgroundImageSTyle}
                                    source={IMAGEPATH.BGRESET_ICON}>
                                    <View style={styles.fakeVIew2}></View>
                                    <View style={styles.LOloMainVIewL}>{/***LogoView */}
                                        <View style={styles.loginView}>
                                            <Text style={styles.TextStyle}>LOGIN</Text>
                                        </View>
                                        <View style={styles.BikeImageView}>
                                            <Image style={styles.bikeLogo}
                                                source={IMAGEPATH.SPLASH_LOGO} />
                                        </View>

                                    </View>{/**EndLogo */}
                                    <View style={styles.fakeVIew2}></View>
                                    <View style={styles.emailText}>{/**EmailView Start */}
                                        <Text style={styles.emailStyle}>Email</Text>
                                    </View>
                                    <View style={styles.textField}>

                                        <View style={styles.innerView}>
                                            <ImageBackground style={styles.innerShadow}
                                                source={IMAGEPATH.LOGIN_SHADOW}>

                                                <View style={styles.emailIcon}>
                                                    <Image source={IMAGEPATH.EMAIL_ICON} />
                                                </View>
                                                <View style={styles.emailTextField}>
                                                    <TextInput
                                                        placeholder='Enter email address'
                                                        placeholderTextColor={'#CDC2C2'}
                                                        style={{ color: '#CDC2C2' }}
                                                        maxLength={60}
                                                        keyboardType="email-address"
                                                        onChangeText={(txt) => { setEmail(txt), _emailValidate(txt) }}
                                                    />
                                                </View>
                                            </ImageBackground>

                                        </View>
                                        {errorEmail !== null ? (
                                            <View style={{ height: height * 0.03, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
                                                <Text style={{ color: 'red', fontSize: 14 }}>{errorEmail}</Text>
                                            </View>
                                        ) : null}




                                    </View>{/**email View end */}


                                    <View style={styles.fakeVIew3}></View>
                                    <View style={styles.emailText}>{/**PasswordView Start */}
                                        <Text style={styles.emailStyle}>Password</Text>
                                    </View>
                                    <View style={styles.textField}>

                                        <View style={[styles.innerView, { borderColor: error ? 'red' : '#006d41' }]}>
                                            <ImageBackground style={[styles.innerShadow, { borderColor: error ? 'red' : '#006d41', borderWidth: '1px' }]}
                                                source={IMAGEPATH.LOGIN_SHADOW}>

                                                <View style={styles.emailIcon}>
                                                    <Image source={IMAGEPATH.LOCK_ICON} />
                                                </View>
                                                <View style={styles.emailTextField}>
                                                    <TextInput
                                                        placeholder='Password'
                                                        placeholderTextColor={'#CDC2C2'}
                                                        style={{ color: '#CDC2C2' }}
                                                        maxLength={18}
                                                        keyboardType="default"
                                                        //secureTextEntry="true"
                                                        onChangeText={(txt) => { setPassword(txt), _passwordvalidate(txt) }}

                                                    />
                                                </View>
                                            </ImageBackground>

                                        </View>

                                        {errorPassword !== null ? (
                                            <View style={{ height: height * 0.03, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
                                                <Text style={{ color: 'red', fontSize: 14 }}>{errorPassword}</Text>
                                            </View>
                                        ) : null}


                                    </View>{/**password VIew end */}

                                    <View style={styles.fakeVIew4}></View>
                                    {/***Forget PAssword  View */}
                                    <View style={styles.forgetPAsswordView}>
                                        <TouchableOpacity onPress={() => props.navigation.navigate('ForgetPassword')}>
                                            <Text style={styles.forgetText}>
                                                Forgot your password?
                                            </Text>
                                        </TouchableOpacity>

                                    </View>{/**FOrget Password View end */}
                                    <View style={styles.fakeVIew3}></View>
                                    <View style={styles.loginButtonVIew}>
                                        <TouchableOpacity onPress={() => onSubmit()}
                                            style={styles.loginButtonVIew1}>
                                            <ImageBackground style={styles.borderStyle}
                                                source={IMAGEPATH.BORDER_COLOR} >
                                                <View style={styles.loginTextView}>
                                                    <Text style={styles.loginTextStyle}>LOGIN</Text>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.fakeVIew3}></View>
                                    <View style={styles.registerVIew}>
                                        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                                            <Text style={styles.registerStyle}>Register</Text>
                                        </TouchableOpacity>

                                    </View>


                                </ImageBackground>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

            </ImageBackground>
            </ScrollView>

        </View>
       
    )
}

export default Login

const styles = StyleSheet.create({
    registerVIew: {
        height: height * 0.04,
        width: width * 0.40,
        //borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    registerStyle: {
        fontSize: 16,
        color: '#1EB808',
        fontFamily: 'Sen-normal',
        textAlign: "center",
        fontWeight: "400"
    },
    loginTextView: {
        height: height * 0.04,
        width: width * 0.40,
        // borderWidth: 1,
        alignSelf: 'center',
        // justifyContent:'center'
    },
    loginTextStyle: {
        fontSize: 20,
        color: '#FFFFFF',
        fontFamily: 'Sen-regular',
        textAlign: "center",
        fontWeight: "700"
    },
    borderStyle: {
        //resizeMode: 'contain',
        height: 69,
        width: 330,
        alignSelf: 'center',
        position: 'absolute',
        justifyContent: 'center'
    },
    loginButtonVIew: {
        height: height * 0.10,
        width: width * 0.88,
        //  borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    loginButtonVIew1: {
        height: height * 0.08,
        width: width * 0.85,
        //  borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    forgetText: {
        fontSize: 14,
        color: '#FFFFFF',
        fontFamily: 'Roboto-regular',
        textAlign: "center"
    },
    forgetPAsswordView: {
        height: height * 0.04,
        width: width * 0.60,
        // borderWidth: 1,
        alignSelf: "center",
        //justifyContent: "center"
    },
    emailTextField: {
        height: height * 0.03,
        width: width * 0.60,
        // borderWidth: 1,
        alignSelf: "center",
        justifyContent: "center"
    },
    emailIcon: {
        height: height * 0.03,
        width: width * 0.10,
        // borderWidth: 1,
        alignSelf: "center",
        justifyContent: "center"
    },
    innerShadow: {
        height: height * 0.07,
        width: width * 0.988,
        alignSelf: 'center',
        position: "absolute",
        //resizeMode:'contain'
        flexDirection: 'row',
        justifyContent: "center"
    },
    innerView: {
        height: height * 0.07,
        width: width * 0.87,
        // borderWidth: 1,
        borderRadius: 100,
        alignSelf: 'center',
        borderColor: 'white',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.35,
        shadowOffset: {
            width: 0.8,
            height: 0.5,
        },
        justifyContent: 'center',
        alignItems: 'center'
        //shadowColor:"#000000",
        // backgroundColor:'',

    },
    emailBackground: {
        resizeMode: 'contain',
        //alignSelf: 'flex-start',
        height: 79,
        width: 389
    },
    textField: {
        height: height * 0.08,
        width: width * 0.89,
        //  borderWidth: 1,
        borderColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    emailStyle: {
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Roboto-regular'
    },
    emailText: {
        height: height * 0.05,
        width: width * 0.89,
        // borderWidth: 1,
        borderColor: 'white',
        alignSelf: 'center',

        justifyContent: 'center'
    },
    bikeLogo: {
        width: 90,
        height: 51,
        resizeMode: "contain"
    },
    LOloMainVIewL: {
        height: height * 0.07,
        width: width * 0.99,
        // borderWidth: 1,
        // borderColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loginView: {
        height: height * 0.04,
        width: width * 0.68,
        // borderWidth: 1,
        // borderColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    BikeImageView: {
        height: height * 0.06,
        width: width * 0.22,
        // borderWidth: 1,
        // borderColor: 'white',
        alignSelf: 'center'
    },


    TextStyle: {
        color: '#FFFFFF',
        fontFamily: 'Roboto-regular',
        fontSize: 30,
        fontWeight: '700'

    },
    mainContainer: {
        // height: '100%',
        // width: '100%',
        flax:1
        //  justifyContent: 'center'
    },
    ImageBackground: {
        height: '100%',
        width: "100%"
    },
    fakeVIew: {
        height: height * 0.07,

    },
    fakeVIew2: {
        height: height * 0.04,

    },
    fakeVIew3: {
        height: height * 0.00,

    },
    fakeVIew4: {
        height: height * 0.02,

    },
    charchterView: {
        height: height * 0.55,
        width: width * 0.72,
        // backgroundColor:"white",
        alignSelf: 'center',
        justifyContent: 'center',
        // position: 'relative'
    },
    CHARACHTER_ICON: {
        height: 546,
        width: 392.65,
        // alignSelf: 'flex-start',
        //  resizeMode: "contain",
        // justifyContent:"center",
        alignItems: "center"
    },
    loginMainVIew: {
        height: height * 0.29,
        width: width * 0.99,
        alignSelf: "center",
        justifyContent: 'center',
        // backgroundColor:'green'
    },
    loginSecondView: {
        height: height * 0.75,
        width: width * 1,
        alignSelf: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
       //  borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    backgroundImageSTyle: {
        alignSelf: "center",
        height: "100%",
        width: width * 1,
        alignItems: "center"
    },
    linearGradient: {
        flex: 1,
        //  paddingLeft: 15,
        // paddingRight: 15,
        borderRadius: 100,
        shadowColor: "rgba(0, 0, 0, 0.25)"
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
})