
import React from 'react'
import colors from '../../../constants/colors';
import { View,Image,Text, StyleSheet,TouchableOpacity } from 'react-native';

const WelcomeScreen = () => {
  return <>
  
  <View style={styles.container}>
      <Image source={require("../../../assets/welcomePageImage.png")} style={styles.welcomePageImage} />
      <Text style={styles.welcomeHeadline}>Welcome to WhatsApp Clone</Text>
      <Text style={styles.description}>
        Read our{' '}
        <Text style={styles.link} >
          Privacy Policy
        </Text>
        . {'Tap "Agree & Continue" to accept the '}
        <Text style={styles.link} >
          Terms of Service
        </Text>
        .
      </Text>

     {/* agree and continue button --------- */}
    <TouchableOpacity style={styles.agreeAndContinueBtn}>
      <Text style={styles.agreeAndContinueBtnText}>Agree and Continue</Text>
    </TouchableOpacity>
    {/* end of agree and continue button --------- */}

    {/* select language secton ---------- */}
    <View style={SelectLanguageSectionStyles.selectLanguageSecton}>
      <View style={SelectLanguageSectionStyles.selectLanguageSectonContainer}>
        <Image style={SelectLanguageSectionStyles.languageIcon}  source={require("../../../assets/WelcomePageIcons/languageIcon.png")}/>
        <Text style={SelectLanguageSectionStyles.languageHeading}>English</Text>
        <Image style={SelectLanguageSectionStyles.dropArrowIcon} source={require('../../../assets/WelcomePageIcons/arrowIcon.png')}/>
      </View>
    </View>
       
  
    </View>
  
  </>
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
    welcomePageImage: {
      width: '100%',
      height: 330,
      borderRadius: 60,
      marginBottom: 80,
    },
    welcomeHeadline: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 20,
    },
    description: {
      fontSize: 14,
      textAlign: 'center',
      marginBottom: 80,
      color: colors.gray,
    },
    link: {
      color: colors.primary,
    },
    button: {
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: "green",
      fontSize: 22,
      fontWeight: '500',
    },
    agreeAndContinueBtn:{
      width: '80%',
      height:50,
      alignSelf:'center',
      display:'flex',
      alignItems: 'center',
      flexDirection:"row",
      justifyContent:'center',
      backgroundColor:"#1DAB61",
      borderRadius:10
    },
    agreeAndContinueBtnText:{
      color: colors.white,
      fontSize: 22,
      fontWeight: '500',
      textTransform:'uppercase'
    }
  });


const SelectLanguageSectionStyles=StyleSheet.create({
  selectLanguageSecton:{
    width:'100%',
    marginTop:30
  },
  selectLanguageSectonContainer:{
    width:'90%',
    alignSelf:'center',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  languageIcon:{
    width:28,
    height:28
  },
  languageHeading:{
    fontSize:20,
    color:'#1DAB61',
    marginLeft:8,
    marginRight:8,
  
  }
})

export default WelcomeScreen
