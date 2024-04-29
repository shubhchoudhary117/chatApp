import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../../constants/colors'

const ContinueVerifyPhoneScreen = () => {
    return <>
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.continueVerifyPhonScreen}>
                <Text style={styles.screenHeading}>Verify phone number</Text>

                <Image style={styles.verifyPhoneImage} source={require("../../../assets/otpVerification/phoneVerify.png")} />

                <Text style={styles.verifyPhoneHeading}>To automatically verify with a
                    missed call to your phone
                </Text>

                <Text style={{ textAlign: 'center', padding: 20, paddingTop: 25, fontSize: 16 }}>
                    <Text style={{ color: '#000000', fontWeight: "700" }}>Allow WhatsApp to manage this call </Text> so
                    we can call your phone number and end
                    the call automatically
                </Text>

                <Text style={{ textAlign: 'center', padding: 20, paddingTop: 0, fontSize: 16 }}>
                    <Text style={{ color: '#000000', fontWeight: "700" }}>
                        Allow WhatsApp to do a one-time check </Text>
                    and access your call log so we can
                    confirm that you received the call.
                </Text>

                <Text style={{ textAlign: 'center', padding: 20, paddingTop: 0, fontSize: 16, lineHeight: 22 }}>
                    Learn more about how you can manage your
                    phone verification permissions.
                </Text>

                <TouchableOpacity style={styles.continuebtn}>
                    <Text style={{ fontSize: 16, color: '#ffffff', textTransform: 'uppercase' }}>
                        CONTINUE
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.continuWithSmsBtn}>
                    <Text style={{ color: colors.appgreen, fontSize: 16 }}>VERIFY WITH SMS</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>


    </>
}

const styles = StyleSheet.create({
    continueVerifyPhonScreen: {
        flex: 1,
        padding: 20,
        paddingTop: 50
    },
    screenHeading: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '700',
        color: colors.appgreen,
        marginTop: 40,
        lineHeight:30
    }, 
    verifyPhoneImage: {
        width: 72,
        height: 72,
        alignSelf: 'center',
        marginTop: 33
    },
    verifyPhoneHeading: {
        fontSize: 22,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
        lineHeight: 33,
        paddingLeft: 15,
        paddingRight:15,
        marginTop:30,
        paddingBottom:20
    },
    continuebtn: {
        width: 316,
        height: 43,
        marginTop: 30,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.appgreen,
        borderRadius:12
    },
    continuWithSmsBtn: {
        width: 316,
        height: 43,
        marginTop: 20,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius:12,
        borderWidth:1,
        borderColor:"#858587",
        
    }
})

export default ContinueVerifyPhoneScreen
