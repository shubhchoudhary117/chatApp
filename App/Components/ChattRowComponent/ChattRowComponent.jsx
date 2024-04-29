import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ChattRowComponent = ({ username, userPhoto }) => {

    
    return <>
        <View style={styles.chattUserDetaislRow}>
            <View style={styles.chattuserDetailsRowContainer}>
                <View style={styles.chattUserDetailsContainer}>
                    {/* user chat image */}
                    <View style={styles.chattUserImageWrapper}>
                        <Image
                            style={styles.chattUserImage}
                            source={userPhoto}
                        />
                    </View>
                    {/* end of chatt image-------- */}
                    <View style={styles.chattUserdetailsAndChattTime}>
                        <View style={styles.chattUserDetail}>
                            <Text style={styles.chattUsername}>{username}</Text>
                            <Text style={styles.currentChattMessage}>Hey</Text>
                        </View>
                        <View style={styles.chattTimeDetails}>
                            <Text style={styles.chattTime}>Yesterday</Text>
                            <Text style={styles.recivedChatts}>2</Text>
                        </View>
                    </View>


                </View>


            </View>
        </View>

    </>
}


const styles = StyleSheet.create({
    chattUserDetaislRow: {
        width: '100%',
        marginBottom: 24,
    },
    chattuserDetailsRowContainer: {
        width: '93%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    chattUserImageWrapper: {
        width: "16%",
        height: 60,
        borderRadius: 50,
    },
    chattUserImage: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    chattUserdetailsAndChattTime: {
        width: '84%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderTopWidth: 1,
        borderTopColor: "#DBDBDB",
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#DBDBDB',
        paddingTop: 12,
        paddingBottom: 25,
    },
    chattUserDetailsContainer: {
        flexDirection: 'row', // Use flexDirection to specify the direction of the main axis
        alignItems: 'center',

    },
    chattUserDetail: {
        paddingLeft: 5,
        marginLeft: 10
    },
    chattUsername: {
        fontSize: 23,
        fontWeight: '800',
        color: '#000000',
        lineHeight: 26
    },
    currentChattMessage: {
        fontSize: 16,
        fontWeight: '400',
        color: '#858587',
        paddingTop:3
    },

    chattTimeDetails: {
        paddingRight: 3,
        flexDirection: 'column', // Align items horizontally
        alignItems: 'center', // Align items vertically
        justifyContent: 'center', // Center items horizontally
    },
    chattTime: {
        fontSize: 14,
        fontWeight: '600',
        color: '#858587'
    },
    recivedChatts: {
        width: 25,
        height: 25,
        backgroundColor: "#0079FF",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        color: '#ffffff',
        textAlign: 'center', // Align text horizontally center
        textAlignVertical: 'center', // Align text vertically center,
        fontSize: 16,
        marginTop: 5
    }
})

export default ChattRowComponent
