import { StyleSheet, Text, View, Dimensions, Modal, Image, ImageBackground, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { IMAGEPATH } from '../Icon/Icon';
const { height, width } = Dimensions.get('window');

const ForgetPassword = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    const showModal = () => {
        setModalVisible(true);
        setTimeout(() => {
            setModalVisible(false);
        }, 2000);
    };


    const [Email, setEmail] = useState('');
    const [checkEmail, setCheckEmail] = useState();
    const [errorEmail, setErrorEmail] = useState(null);
    const [Password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState();
    const [errorPassword, setErrorPassword] = useState(null);
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
            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        if (pass === '') {
            setErrorPassword('*Please enter code.');
            setCheckPassword(false)
        }  else if (!passwordRegex.test(pass)) {
            setErrorPassword('*Please enter valid code.');
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
            setErrorPassword('Please enter code .');
            flag = false;
        }
        return flag;
    };
    /***Step-4 */
    const onSubmit = () => {
        if (validate()) {
            alert('success');
            props.navigation.navigate('ResetPassword');

        } else {
            alert('Validation Failed');
        }
    };
    return (
        <View style={styles.mainContainer}>
            <ImageBackground style={styles.ImageBackground}
                source={IMAGEPATH.SPLASH_BACKGROUND} >
                <StatusBar barStyle="light-content"></StatusBar>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modalMainView}>
                        <View style={styles.modalSecondView}>


                        </View>
                        <View style={styles.modalThirdView}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}
                                style={styles.MOdalTOuchable}>
                                <Text style={styles.MOdalTExtStyle} >Code Send Successfully</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </Modal>
                <View style={styles.fakeVIew}></View>
                <View style={styles.backView}>
                    <TouchableOpacity>
                        <Image source={IMAGEPATH.BACK_ICON} />
                    </TouchableOpacity>
                </View>
                <View style={styles.fakeVIew2}></View>
                <View style={styles.forgetView}>
                    <Text style={styles.forgetTextStyle}>Forget password</Text>
                </View>

                <View style={styles.fakeVIew2}></View>
                <View style={styles.textField}>
                    <View style={styles.emailText}>{/**EmailView Start */}
                        <Text style={styles.emailStyle}>Email</Text>
                    </View>

                    <View style={styles.innerView}>
                        <ImageBackground style={styles.innerShadow}
                            source={IMAGEPATH.LOGIN_SHADOW2}>

                            <View style={styles.emailIcon}>
                                <Image
                                    source={IMAGEPATH.EMAIL_ICON} />
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
                        <View style={{ height: height * 0.04, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
                            <Text style={{ color: '#FA5050', fontSize: 14 }}>{errorEmail}</Text>
                        </View>
                    ) : null}

                </View>



                <View style={styles.loginMainVIew}></View>
                <View style={styles.loginSecondView} >
                    <ImageBackground style={styles.backgroundImageSTyle}
                        source={IMAGEPATH.SHADOW_BACKGROUND}>


                        <View style={styles.textField}>
                            <View style={styles.emailText}>{/**EmailView Start */}
                                <Text style={styles.emailStyle}>Enter code</Text>
                            </View>

                            <View style={styles.innerView}>
                                <ImageBackground style={styles.innerShadow}
                                    source={IMAGEPATH.LOGIN_SHADOW2}>

                                    <View style={styles.emailIcon1}>
                                        <Image source={IMAGEPATH.LOCK_ICON} />
                                    </View>
                                    <View style={styles.emailTextField1}>
                                        <TextInput
                                            placeholder=''
                                            placeholderTextColor={'#CDC2C2'}
                                            style={{ color: '#CDC2C2' }}
                                            maxLength={60}
                                            keyboardType="email-address"
                                            onChangeText={(txt) => { setPassword(txt), _passwordvalidate(txt) }}
                                        />
                                    </View>
                                    <View style={styles.sendCodeView}>
                                        <TouchableOpacity onPress={() => { showModal(); }}>
                                            <ImageBackground style={styles.codeImageSTyle}
                                                source={IMAGEPATH.CODE_ICON} >
                                                <View style={styles.sendView}>
                                                    <Text style={styles.sendCOdeTExt}>Send code</Text>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>

                            </View>
                            {errorPassword !== null ? (
                                <View style={{ height: height * 0.04, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
                                    <Text style={{ color: '#FA5050', fontSize: 14 }}>{errorPassword}</Text>
                                </View>
                            ) : null}


                        </View>
                        <View style={styles.fakeVIew4}></View>
                        <View style={styles.loginButtonVIew}>
                            <TouchableOpacity onPress={() => onSubmit()}
                                style={styles.loginButtonVIew1}>
                                <ImageBackground style={styles.borderStyle}
                                    source={IMAGEPATH.BORDER_COLOR} >
                                    <View style={styles.loginTextView}>
                                        <Text style={styles.loginTextStyle}>Submit</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>







                    </ImageBackground>

                </View>


            </ImageBackground>

        </View>
    )
}

export default ForgetPassword

const styles = StyleSheet.create({
    MOdalTExtStyle:{
        color:'#FFFFFF',
        fontSize:16,
        // fontFamily:"sen-regular",
        fontWeight:'400',
        textAlign:"center"
        
    },
    MOdalTOuchable: {
        height: height * 0.04,
        width: width * 0.49,
        alignSelf: 'center',
        backgroundColor: '#474747',
        justifyContent: 'center',
        borderRadius: 19,
        alignItems: "center"
    },
    modalMainView: {

        backgroundColor: 'transparent',
        height: height * 1,
        width: width * 1,
        alignSelf: 'center',

    },
    modalSecondView: {
        backgroundColor: 'transparent',
        height: height * 0.50,
        width: width * 1,
        alignSelf: 'center',
    },
    modalThirdView: {
        // backgroundColor:'yellow',
        height: height * 0.50,
        width: width * 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    sendView: {
        justifyContent: 'center',
        // borderWidth: 1,
        height: height * 0.04,
        width: width * 0.18,
        alignSelf: 'center',

    },
    sendCOdeTExt: {
        fontSize: 12,
        color: '#FFFFFF',
        fontFamily: 'Roboto-regular',
        textAlign: 'center',
        fontWeight: '700'
    },
    codeImageSTyle: {
        alignSelf: 'center',
        //resizeMode:'contain',
        height: height * 0.05,
        width: width * 0.25,

        // justifyContent:'center'
    },
    sendCodeView: {
        height: height * 0.05,
        width: width * 0.25,
        // borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',

        marginTop: 10
    },
    backgroundImageSTyle: {
        alignSelf: "center",
        height: height * 1,
        width: width * 1,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    loginMainVIew: {
        height: height * 0.01,
        width: width * 0.99,
        alignSelf: "center",
        justifyContent: 'center',
        // backgroundColor:'green'
    },
    loginSecondView: {
        height: height * 1,
        width: width * 1,
        alignSelf: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        //   borderWidth: 1,
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.12,
        shadowOffset: {
            width: 0.1,
            height: 0.2,
        },
    },

    forgetView: {
        height: height * 0.05,
        width: width * 0.62,
        // borderWidth:1,
        borderColor: 'white',
        alignItems: 'center'
    },
    forgetTextStyle: {
        fontSize: 30,
        color: '#FFFFFF',
        fontFamily: 'Saira SemiCondensed',
        textAlign: "center",
        fontWeight: "700"
    },
    backView: {
        height: height * 0.04,
        width: width * 0.15,
        // borderWidth:1,
        borderColor: 'white',
        alignItems: 'center'
    },

    mainContainer: {
        height: '100%',
        width: '100%',
        // justifyContent:'center'
    },
    ImageBackground: {
        height: '100%',
        width: "100%"
    },
    fakeVIew: {
        height: height * 0.07,

    },
    fakeVIew4: {
        height: height * 0.09,

    },
    fakeVIew2: {
        height: height * 0.04,

    },
    emailTextField: {
        height: height * 0.054,
        width: width * 0.64,
        //  borderWidth: 1,
        alignSelf: "center",
        justifyContent: "center"
    },
    emailTextField1: {
        height: height * 0.054,
        width: width * 0.42,
        //  borderWidth: 1,
        alignSelf: "center",
        justifyContent: "center"
    },
    emailIcon: {
        height: height * 0.03,
        width: width * 0.10,
        //  borderWidth: 1,
        alignSelf: "center",
        justifyContent: "center"
    },
    emailIcon1: {
        height: height * 0.03,
        width: width * 0.10,
        //  borderWidth: 1,
        alignSelf: "center",
        justifyContent: "center"
    },
    innerShadow: {
        height: height * 0.10,
        width: width * 0.988,
        alignSelf: 'center',
        position: "absolute",
        //resizeMode:'contain'
        flexDirection: 'row',
        justifyContent: "center"
    },
    innerView: {
        height: height * 0.08,
        width: width * 0.87,
        // borderWidth: 1,
        borderRadius: 100,
        alignSelf: 'center',
        // borderColor: 'white',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.12,
        shadowOffset: {
            width: 0.1,
            height: 0.2,
        },
        justifyContent: 'center'
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
        height: height * 0.13,
        width: width * 0.89,
        //borderWidth: 1,
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
        height: height * 0.04,
        width: width * 0.89,
        // borderWidth: 1,
        borderColor: 'white',
        alignSelf: 'center',

        justifyContent: 'center'
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
})

