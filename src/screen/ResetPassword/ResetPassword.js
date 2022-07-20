import { StyleSheet, Text, View, Dimensions, Modal, Image, ImageBackground, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { IMAGEPATH } from '../Icon/Icon';
const { height, width } = Dimensions.get('window');

const ResetPassword = (props) => {

    //**For-Password */
    const [password, setpassword] = useState('');

    const [errorPassword, setErrorPassword] = useState(null);
    //**For-ConfirmPassword */
    const [cppassword, setcppassword] = useState('');
    const [checkConfirmPassword, setCheckConfirmPassword] = useState();
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);
    //***Step-2 */
    //**For-Password */

    const passwordValidate = password => {
        var Regex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
        if (password === '' || password === undefined || password === null) {
            setErrorPassword('*Please enter password');
        } else if (!Regex.test(password)) {
            setErrorPassword('*Please enter valid password');
        } else {
            setErrorPassword(null);
        }
    }
    //**For-ConfirmPassword */

    const cppasswordValidate = cppassword => {
        var Regex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
        if (cppassword === '' || cppassword === undefined || cppassword === null) {
            setErrorConfirmPassword('*Please enter password');
        } else if (!Regex.test(cppassword)) {
            setErrorConfirmPassword('*Please enter valid password');
        } else {
            setErrorConfirmPassword(null);
        }
    }
    //***Step-3 */

    const validate = () => {
        var Rgex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

        const flag = true;

        if (password === '') {
            setErrorPassword('*Please enter password');
            return !flag;
        }
        if (password === '' || password === undefined || password === null) {
            setErrorPassword('*Please enter password');
            return !flag;
        }
        if (!Rgex.test(password)) {
            setErrorPassword('*Please enter valid password');
            return !flag;
        } else setErrorPassword(null);

        if (password !== cppassword) {
            setErrorPassword('*password and confirm password must be equal');
            return !flag;
        } else setErrorPassword(null);

        return flag;
    };
    /***Step-4 */
    const onSubmit = () => {
        if (validate()) {
            alert('success');
            // props.navigation.navigate('Wallet');

        } else {
            alert('Validation Failed');
        }
    };
    return (
        <View style={styles.mainContainer}>
            <ImageBackground style={styles.ImageBackground}
                source={IMAGEPATH.SPLASH_BACKGROUND} >
                <StatusBar barStyle="light-content"></StatusBar>
                <View style={styles.fakeVIew}></View>
                <View style={styles.backView}>
                    <TouchableOpacity >
                        <Image source={IMAGEPATH.BACK_ICON} />
                    </TouchableOpacity>
                </View>
                <View style={styles.loginMainVIew}></View>
                <View style={styles.loginSecondView} >
                    <ImageBackground style={styles.backgroundImageSTyle}
                        source={IMAGEPATH.BGRESET_ICON}>
                        {/* <View style={styles.fakeVIew2}></View> */}
                        <View style={styles.forgetView}>
                            <Text style={styles.forgetTextStyle}>Reset password</Text>
                        </View>
                        <View style={styles.fakeVIew2}></View>
                        <View style={styles.textField}>
                            <View style={styles.emailText}>{/**EmailView Start */}
                                <Text style={styles.emailStyle}>New Password</Text>
                            </View>

                            <View style={styles.innerView}>
                                <ImageBackground style={styles.innerShadow}
                                    source={IMAGEPATH.TFBG_ICON}>

                                    <View style={styles.emailIcon}>
                                        <Image source={IMAGEPATH.LOCK_ICON} />
                                    </View>
                                    <View style={styles.emailTextField}>
                                        <TextInput
                                            placeholder='Enter Your passowrd'
                                            placeholderTextColor={'#CDC2C2'}
                                            style={{ color: '#CDC2C2' }}
                                            maxLength={60}
                                            keyboardType="email-address"
                                            onChangeText={(txt) => { setpassword(txt), passwordValidate(txt) }}
                                        />
                                    </View>
                                </ImageBackground>

                            </View>
                            {errorPassword !== null ? (
                                <View style={{ height: height * 0.04, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
                                    <Text style={{ color: 'red', fontSize: 14 }}>{errorPassword}</Text>
                                </View>
                            ) : null}


                        </View>
                        <View style={styles.textField}>
                            <View style={styles.emailText}>{/**EmailView Start */}
                                <Text style={styles.emailStyle}>Confirm Password</Text>
                            </View>

                            <View style={styles.innerView}>
                                <ImageBackground style={styles.innerShadow}
                                    source={IMAGEPATH.TFBG2_ICON}>

                                    <View style={styles.emailIcon}>
                                        <Image source={IMAGEPATH.LOCK_ICON} />
                                    </View>
                                    <View style={styles.emailTextField}>
                                        <TextInput
                                            placeholder='Enter Your passowrd'
                                            placeholderTextColor={'#CDC2C2'}
                                            style={{ color: '#CDC2C2' }}
                                            maxLength={60}
                                            keyboardType="email-address"
                                            onChangeText={(txt) => { setcppassword(txt), cppasswordValidate(txt) }}
                                        />
                                    </View>
                                </ImageBackground>

                            </View>
                            {errorConfirmPassword !== null ? (
                                <View style={{ height: height * 0.04, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
                                    <Text style={{ color: 'red', fontSize: 14 }}>{errorConfirmPassword}</Text>
                                </View>
                            ) : null}


                        </View>
                        <View style={styles.fakeVIew4}></View>
                        <View style={styles.loginButtonVIew}>
                            <TouchableOpacity onPress={() =>props.navigation.navigate('SelectGender')}
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

export default ResetPassword

const styles = StyleSheet.create({
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
    loginButtonVIew1: {
        height: height * 0.08,
        width: width * 0.85,
        //  borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    loginButtonVIew: {
        height: height * 0.10,
        width: width * 0.88,
        //  borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    fakeVIew4: {
        height: height * 0.09,

    },
    emailTextField: {
        height: height * 0.054,
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
    textField: {
        height: height * 0.14,
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
    fakeVIew2: {
        height: height * 0.03,

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
       // borderWidth: 1,
        justifyContent: 'center'
    },
    backgroundImageSTyle: {
        alignSelf: "center",
        height: height * 1,
        width: width * 1,
    },
})