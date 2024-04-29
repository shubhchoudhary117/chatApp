import React, { useState } from 'react';
import {
    StyleSheet, TextInput, Text, View,
    TouchableOpacity, KeyboardAvoidingView, Platform,
    ActivityIndicator
} from 'react-native';
import MaskInput from 'react-native-mask-input';
import colors from '../../../constants/colors';

const MobileInputScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

    const GER_PHONE = [
        '+',
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
    ];

    // Define some API calling Function s

    // send otp on given number for varify mobile number
    const sendOTP = () => {
        if (phoneNumber != '') {
            setLoading(true);

            setTimeout(() => {
                setLoading(false)
            }, 3000);
        }else{
            console.warn("please enter mobile number")
        }

    }

    return (
        <KeyboardAvoidingView
            enabled
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={keyboardVerticalOffset}
            style={styles.container}
        >
            {/* Create loader  --------- */}
            {loading && (
                <View style={[StyleSheet.absoluteFill, styles.loading]}>
                    <ActivityIndicator size="large" color={colors.primary} />
                    <Text style={{ fontSize: 18, padding: 10 }}>Sending code...</Text>
                </View>
            )}

            {/* end of loader ------------ */}

            <View style={styles.MobileInputScreen}>
                <View style={styles.MobileInputScreenContainer}>
                    <Text style={styles.inputFormHeading}>Enter Your Phone Number</Text>
                    <Text style={styles.inputFormSubHeading}>Skychat will need to verify your phone number, What’s my number?</Text>
                    <View style={styles.countryListContainer}>
                        <Text style={styles.currentCountry}>India</Text>
                    </View>

                    {/* Input fields */}
                    <View style={styles.inputForm}>
                        <View style={styles.phoneDialog}>
                            <Text style={styles.codeText}>+    91 </Text>
                        </View>
                        <TextInput
                            keyboardType='phone-pad'
                            placeholder='Phone number'
                            placeholderTextColor='#858587'
                            style={styles.inputField}
                            value={phoneNumber}
                            onChangeText={(phone)=>setPhoneNumber(phone)}
                            maxLength={10}
                        />
                    </View>
                    {/* End of input fields */}

                    {/* "Next" button */}
                    <View style={styles.viewBottom}>
                        <TouchableOpacity
                            onPress={sendOTP}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                    {/* end of bottom view button  */}
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.background,
    },
    MobileInputScreen: {
        width: '100%',
        flexDirection: 'column',
        paddingTop: 80
    },
    MobileInputScreenContainer: {
        width: '100%',
        alignSelf: 'center',
        textAlign: 'center'
    },
    inputFormHeading: {
        fontSize: 19,
        color: '#1DAB61',
        textAlign: 'center',
        fontWeight: '700'
    },
    inputFormSubHeading: {
        alignSelf: 'center',
        textAlign: 'center',
        color: '#858587',
        paddingTop: 16,
        marginTop: 10,
        fontSize: 15,
        lineHeight: 22,
        fontWeight: '500'
    },
    countryListContainer: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#1DAB61',
        textAlign: 'center',
        marginTop: 15
    },
    currentCountry: {
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 16,
        color: '#000000',
        fontWeight:"600"
    },
    inputForm: {
        width: '70%',
        alignSelf: 'center',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    phoneDialog: {
        width: '25%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: "#1DAB61",
        borderBottomWidth: 1,
    },
    codeText: {
        fontSize: 18,
        color: '#000000',
        fontWeight: '600'
    },
    inputField: {
        width: '75%',
        marginLeft: 5,
        height: 50,
        borderBottomColor: "#1DAB61",
        borderBottomWidth: 1,
        paddingBottom: 5,
        fontSize: 18,
        color: '#000000',
        fontWeight: '600'
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
        textTransform:'uppercase'
    },
    loading: {
        zIndex: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MobileInputScreen;
