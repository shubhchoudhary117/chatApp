import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const StatusRow = () => {
    return <>
        <View style={styles.statusCard}>
            <View style={styles.statusCardContainer}>
                <View style={styles.statusCardImage}>
                    <Image style={styles.statusCardImg} source={require('../../../assets/UsersPhotos/samarth.png')} />
                </View>

                <View style={styles.statusContent}>
                    <Text style={styles.username}>Shubahm choudahry</Text>
                    <Text style={styles.statusTime}>10:19 ago</Text>
                </View>


            </View>
        </View>

    </>
}

const styles=StyleSheet.create({
    statusCard:{
        width:'100%',
        marginBottom:25
    },
    statusCardContainer:{
        width:'90%',
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    statusCardImage:{
        width:70,
        height:70,
        borderRadius:50
    },
    statusCardImg:{
        width:70,
        height:70,
        borderRadius:50
    },
    statusContent:{
        marginLeft:10
    },
    username:{
        fontSize:19,
        fontWeight:'800',
        color:'#000000'
    },
    statusTime:{
        marginTop:3,
        fontSize:15,
        fontWeight:'600',
        color:'#858587'
    }
})

export default StatusRow
