import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const CallHistoryRowCard = () => {
    return <>
        <View style={chStyle.callHistoryRow}>
            <View style={chStyle.rowContainer}>
                <View style={chStyle.leftContent}>
                    <Image style={chStyle.callerImage} source={require('../../../assets/UsersPhotos/shubham.jpg')} />
                    <View style={chStyle.userDetails}>
                        <Text style={chStyle.missedCallerName}>Shubham</Text>
                        <View style={{ marginTop: 3, flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={chStyle.callIcon} source={require('../../../assets/callScreenIcons/callIcon.png')} />
                            <Text>Missed</Text>
                        </View>
                    </View>
                </View>

                <View style={chStyle.rightContent}>
                    <Text style={chStyle.callTime}>Today</Text>
                    <View>
                        <Image style={chStyle.infoIcon} source={require('../../../assets/callScreenIcons/infoIcon.png')} />
                    </View>
                </View>
            </View>
        </View>

    </>
}



const chStyle = StyleSheet.create({

    callHistoryRow: {
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        paddingLeft: 8
    },
    rowContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20
    },
    leftContent: {
        flexDirection: 'row'
    },
    callerImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    userDetails: {
        marginLeft: 15,
    },
    missedCallerName:{
        color:'#FF0000'
    },
    username: {
        fontSize: 17,
        color: '#000000',
        fontWeight: '600'
    },
    callIcon: {
        marginRight: 5
    },
    rightContent: {
        flexDirection: 'row'
    },
    callTime: {
        fontSize: 15,
        marginRight: 8
    }

})
export default CallHistoryRowCard
