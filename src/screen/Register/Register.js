import { StyleSheet, Text, View, Dimensions, Image, ImageBackground, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { IMAGEPATH } from '../Icon/Icon';
const { height, width } = Dimensions.get('window');

const Register = (props) => {
    const [error, setError] = useState(false);
    //***For-Email */
    const [Email, setEmail] = useState('');
    const [checkEmail, setCheckEmail] = useState();
    const [errorEmail, setErrorEmail] = useState(null);
    //***For-Phone */
    const [Phone, setPhone] = useState('');
    const [checkPhone, setCheckPhone] = useState();
    const [errorPhone, setErrorPhone] = useState(null);
    //**For-Password */
    const [password, setpassword] = useState('');

    const [errorPassword, setErrorPassword] = useState(null);
    //**For-ConfirmPassword */
    const [cppassword, setcppassword] = useState('');
    const [checkConfirmPassword, setCheckConfirmPassword] = useState();
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);
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
    //**for-Phone */
    const _phoneValidate = phone => {
        var phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        if (phone === '' || phone === undefined || phone === null) {
            setErrorPhone('*Plese enter Phone number,');
        }
        if (!phoneRegex.test(phone)) {
            setErrorPhone('*Plese enter valid number.');

        } else {
            setErrorPhone(null);
        }
    };
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
        if (Email === '') {
            setErrorEmail('Please enter email.');
            flag = false;
        }
        if (Phone === '') {
            setErrorPhone('Please enter phone no.');
            flag = false;
        }

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
                <View style={styles.logoView}>
                    <Image style={styles.logoStyle}
                        source={IMAGEPATH.SPLASH_LOGO} />
                </View>
                <View style={styles.logoTxtView}>
                    <Text style={styles.logoTxt}>Welcome to Moonstep</Text>
                </View>
                <View style={styles.fakeVIew2}></View>
                <TouchableOpacity onPress={()=>props.navigation.navigate('ForgetPassword')}>
                <View style={styles.registerVIew}>
                    <Text style={styles.RegisterTExtStyle}>Register</Text>
                </View>
                </TouchableOpacity>
                {/* <View style={styles.fakeVIew3}></View> */}

                <View style={styles.textField}>
                    <View style={styles.emailText}>{/**EmailView Start */}
                        <Text style={styles.emailStyle}>Email</Text>
                    </View>

                    <View style={styles.innerView}>
                        <ImageBackground style={styles.innerShadow}
                            source={IMAGEPATH.LOGIN_SHADOW2}>

                            <View style={styles.emailIcon}>
                                <Image source={IMAGEPATH.EMAIL_ICON} style={{resizeMode:'contain'}}/>
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
                        <View style={{ height: height * 0.02, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
                            <Text style={{ color: 'red', fontSize: 14 }}>{errorEmail}</Text>
                        </View>
                    ) : null}

                </View>



                <View style={styles.fakeVIew4}></View>

                <View style={styles.textField}>
                    <View style={styles.emailText}>{/**EmailView Start */}
                        <Text style={styles.emailStyle}>Phone Number</Text>
                    </View>

                    <View style={styles.innerView}>
                        <ImageBackground style={styles.innerShadow}
                            source={IMAGEPATH.LOGIN_SHADOW2}>

                            <View style={styles.emailIcon}>
                                <Image source={IMAGEPATH.PHONE_ICON} />
                            </View>
                            <View style={styles.emailTextField}>
                                <TextInput
                                    placeholder='Enter phone number'
                                    placeholderTextColor={'#CDC2C2'}
                                    style={{ color: '#CDC2C2' }}
                                    maxLength={60}
                                    keyboardType="email-address"
                                    onChangeText={(txt) => { setPhone(txt), _phoneValidate(txt) }}
                                />
                            </View>
                        </ImageBackground>

                    </View>
                    {errorPhone !== null ? (
                        <View style={{ height: height * 0.02, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
                            <Text style={{ color: 'red', fontSize: 14 }}>{errorPhone}</Text>
                        </View>
                    ) : null}

                </View>




                <View style={styles.fakeVIew4}></View>

                <View style={styles.textField}>
                    <View style={styles.emailText}>{/**EmailView Start */}
                        <Text style={styles.emailStyle}>Password</Text>
                    </View>

                    <View style={styles.innerView}>
                        <ImageBackground style={styles.innerShadow}
                            source={IMAGEPATH.LOGIN_SHADOW2}>

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


                <View style={styles.fakeVIew4}></View>
                <View style={styles.emailText}>{/**EmailView Start */}
                    <Text style={styles.emailStyle}>Confirm Password</Text>
                </View>
                <View style={styles.textField}>

                    <View style={styles.innerView}>
                        <ImageBackground style={styles.innerShadow}
                            source={IMAGEPATH.LOGIN_SHADOW3}>

                            <View style={styles.emailIcon}>
                                <Image source={IMAGEPATH.LOCK_ICON} />
                            </View>
                            <View style={styles.emailTextField}>
                                <TextInput
                                    placeholder='Confirm Password'
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

                <View style={styles.fakeVIew3}></View>
                <View style={styles.loginButtonVIew}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('ForgetPassword')}
                        style={styles.loginButtonVIew1}>
                        <ImageBackground style={styles.borderStyle}
                            source={IMAGEPATH.BORDER_COLOR} >
                            <View style={styles.loginTextView}>
                                <Text style={styles.loginTextStyle}>Register</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ImageBackground>


        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    registerVIew: {
        //   borderWidth: 1,
        borderColor: 'white',
        height: height * 0.05,
        width: width * 0.55,
        alignSelf: "center",
        justifyContent: "center"
    },
    RegisterTExtStyle: {
        fontSize: 30,
        color: '#FFFFFF',
        fontFamily: 'Saira SemiCondensed',
        textAlign: "center",
        fontWeight: "700"
    },
    logoTxtView: {
        //  borderWidth: 1,
        borderColor: 'white',
        height: height * 0.03,
        width: width * 0.55,
        alignSelf: "center",
        justifyContent: "center"
    },
    logoTxt: {
        fontSize: 14,
        color: '#CDC2C2',
        fontFamily: 'Sen-normal',
        textAlign: "center",
        fontWeight: "400"
    },
    logoStyle: {
        height: 81,
        width: 144,
        alignSelf: 'center',
        resizeMode: "contain"
    },
    logoView: {
        // borderWidth:1,
        borderColor: 'white',
        height: height * 0.11,
        width: width * 0.55,
        alignSelf: "center",
        // justifyContent: "center"
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
    fakeVIew2: {
        height: height * 0.03,

    },
    fakeVIew3: {
        height: height * 0.01,

    },
    fakeVIew4: {
        height: height * 0.01,

    },
    emailTextField: {
        height: height * 0.05,
        width: width * 0.60,
        // borderWidth: 1,
        alignSelf: "center",
        justifyContent: "center"
    },
    emailIcon: {
        height: height * 0.03,
        width: width * 0.12,
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
        borderColor: 'white',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.35,
        shadowOffset: {
            width: 0.8,
            height: 0.5,
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
        height: height * 0.06,
        width: width * 0.88,
        //  borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    loginButtonVIew1: {
        height: height * 0.01,
        width: width * 0.85,
        //  borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
})