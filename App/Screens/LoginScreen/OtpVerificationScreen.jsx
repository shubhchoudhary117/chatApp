import React, { useState } from 'react'
import {
    KeyboardAvoidingView,
    TextInput, StyleSheet, Text, View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    Modal
} from 'react-native'
import colors from '../../../constants/colors'

const OtpVerificationScreen = () => {
    const [userOtp, setUserOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [VisibleVerifyPhoneModal, setVisibleVerifyPhoneModal] = useState(false);
    // detect device for keyboard alignment
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;


    // create some API calling Function 

    // verify otp function 
    const onVerifyOtp = () => {
        setVisibleVerifyPhoneModal(true)
        if (userOtp !== '') {

            //     setLoading(true);

            //     setTimeout(() => {

            //         setLoading(false)
            //     }, 3000);
            // } else {
            //     Alert.alert('Error', 'erroe')
            // }
        }
    }
    return <>

        <KeyboardAvoidingView enabled
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={keyboardVerticalOffset}
            style={styles.keyboardAvoidingView}>

            {/* Create loader  --------- */}
            {loading && (
                <View style={[StyleSheet.absoluteFill, styles.loading]}>
                    <ActivityIndicator size="large" color={colors.primary} />
                    <Text style={{ fontSize: 18, padding: 10 }}>Verifying Code...</Text>
                </View>
            )}

            {/* end of loader ------------ */}

            <View style={styles.otpVerificationScreenContainer}>
                <View style={styles.otpVerifyContainer}>
                    <Text style={styles.enteredMobile}>verify +917447006318</Text>

                    <Text style={styles.verifyOtpInstruction}>
                        {"Waiting to automatically detect an SMS sent to"}

                        {".\n + 91 97 7040 2243"}
                        <Text style={{ color: colors.primary }}>{" Wrong Number"} </Text>
                    </Text>

                    <View style={styles.otpInputWrapper}>
                        <TextInput
                            value={userOtp}
                            keyboardType='number-pad'
                            style={styles.otpInputField}
                            onChangeText={(otp) => setUserOtp(otp)}
                            maxLength={6}
                            autoFocus={true}
                        />
                    </View>

                    <Text style={styles.otpEnterMessage}>Enter 6 digit Code</Text>

                    <View style={styles.resendOtpOptions}>
                        {/* Option 1 -------------- */}
                        <View style={styles.option}>
                            <View style={styles.option1Left}>
                                <Image style={styles.optionIcon} source={require("../../../assets/otpVerification/resend.png")} />
                                <Text style={styles.optionText}>Resend SMS</Text>
                            </View>
                            <Text style={styles.optionText}>1.02</Text>
                        </View>
                        {/* end of option 1  */}
                        <View style={styles.sapratoer}></View>
                        {/* Option 1 -------------- */}
                        <View style={styles.option}>
                            <View style={styles.option1Left}>
                                <Image style={styles.optionIcon} source={require("../../../assets/otpVerification/call.png")} />
                                <Text style={styles.optionText}>Call me</Text>
                            </View>
                            <Text style={styles.optionText}>1.02</Text>
                        </View>
                        {/* end of option 1  */}
                    </View>
                    {/* end of resend otp options section  */}

                    {/* "Next" button */}
                    <View style={styles.viewBottom}>
                        <TouchableOpacity
                            onPress={onVerifyOtp}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                    {/* end of bottom view button  */}

                </View>

                {/* Creating Coustom Alert message modal  ----------------*/}
               
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={VisibleVerifyPhoneModal}
                        onRequestClose={() => {
                            setVisibleVerifyPhoneModal(!VisibleVerifyPhoneModal);
                        }}
                    >
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                style={{
                                    width: 316, backgroundColor: '#fff', elevation: 3,
                                    padding: 20,paddingRight:30,borderRadius:8
                                }}>
                                <Text>We will be verify the phone number:</Text>
                                <Text style={{ fontSize: 18, fontWeight: '700', color: '#000000', marginTop: 12 }}>+917447006318</Text>
                                <Text style={{fontSize:14,color:"#858587",marginTop:10}}>{"Is this Ok, or would you like to edit thember"}</Text>

                                    <View style={{
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                        marginTop:20}}>
                                        <View><Text style={{fontSize:15,fontWeight:'600',color:'#1DAB61'}}>Edite</Text></View>
                                        <View><Text onPress={()=>setVisibleVerifyPhoneModal(!VisibleVerifyPhoneModal)}  style={{fontSize:15,fontWeight:'600',color:'#1DAB61'}}>ok</Text></View>
                                    </View>
                            
                            </View>
                        </View>
                    </Modal>

                    <View>

                    </View>
                </View>
                {/* end of Coustom Alert -------------------------------- */}
          
            {/* end of otpVerificationScreenContainer */}
        </KeyboardAvoidingView>
    </>
}

const styles = StyleSheet.create({
    keyboardAvoidingView: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.background,
    },
    otpVerificationScreenContainer: {
        flex: 1,
        paddingTop: 30,

    },
    otpVerifyContainer: {
        flex: 1,
        marginTop: 50,
    },
    enteredMobile: {
        fontSize: 18,
        fontWeight: '700',
        color: "#1DAB61",
        textTransform: 'capitalize',
        textAlign: 'center'
    },
    verifyOtpInstruction: {
        fontSize: 14,
        paddingTop: 10,
        marginTop: 10,
        textAlign: 'center',
        lineHeight: 25
    },
    otpInputWrapper: {
        width: '60%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    otpInputField: {
        width: '100%',
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        textAlign: 'center',
        letterSpacing: 10,
        fontWeight: '600',
        fontSize: 18
    },
    otpEnterMessage: {
        paddingTop: 10,
        textAlign: 'center',
        fontWeight: '500',
        color: '#858587'
    },
    resendOtpOptions: {
        flex: 1,
        alignSelf: 'center',
        padding: 20
    },
    option: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    option1Left: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'

    },
    optionIcon: {
        width: 18,
        height: 18
    },
    optionText: {
        fontSize: 16,
        marginLeft: 10,
        color: '#858587',
        fontWeight: '500'
    },
    sapratoer: {
        marginTop: 20,
        height: 1,
        backgroundColor: '#DBDBDB'
    },
    viewBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200
    },
    button: {
        width: 120,
        height: 50,
        alignItems: 'center',
        backgroundColor: colors.lightGray,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#1DAB61',
        justifyContent: 'center',
    },
    buttonText: {
        color: colors.white,
        fontSize: 22,
        fontWeight: '500',
        textTransform: 'uppercase'
    },
    loading: {
        zIndex: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }


})

export default OtpVerificationScreen
