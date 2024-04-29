import React from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const GroupsScreen = () => {
    return <>

        <SafeAreaView>
            <ScrollView>
                {/* groups section header section */}
                <View style={styles.groupsScreenHeader}>
                    <View style={styles.headerSelectChattsIcon}>
                        <Image source={require('../../../assets/HomeScreenPhotos/selectIcon.png')} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../../assets/HomeScreenPhotos/cameraIcon.png')} />
                        <Image style={{ marginLeft: 25 }} source={require('../../../assets/HomeScreenPhotos/plusIcon.png')} />
                    </View>
                </View>
                {/* groups screen heading wrapper */}

                {/* Heading view ------------------- */}
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <Text style={styles.groupsScreenHeading}>Communities</Text>
                </View>

                {/* New group action card --------------- */}
                <View style={styles.addNewGroupSection}>
                    <View style={styles.addGroupImageWrapper}>
                        <Image style={styles.addGroupImg} source={require('../../../assets/groupsScreenIcons/communityIcon.png')} />
                    </View>
                    <Text style={styles.addNewGroupHeading}>New Group</Text>
                </View>

                {/* end of group action card ------------- */}

                <View style={styles.ourGroupsSection}>
                    <View style={styles.ourGroupRow}>
                        <View style={styles.rowLeft}>
                            <View style={styles.groupImageWrapper}>
                                <Image style={styles.groupImg} source={require('../../../assets/groupsScreenIcons/miraigate.jpeg')} />
                            </View>
                            <View style={styles.groupDetails}>
                                <Text style={styles.groupName}>MiraiGate Technologies</Text>
                                <Text style={styles.groupDesc}>Shubham: Talent is cheaper than
                                    table salt. what Separates the t..</Text>
                            </View>

                        </View>
                        <View style={styles.rowRight}>
                            <Text style={styles.groupTime}>Yesterday</Text>
                        </View>
                    </View>

                </View>


            </ScrollView>
        </SafeAreaView>

    </>
}


const styles = StyleSheet.create({
    groupsScreenHeader: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,

    },
    groupsScreenHeading: {
        fontSize: 31,
        fontWeight: '800',
        color: '#000000',
        marginTop: 20
    },
    addNewGroupSection: {
        width: '90%',
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: 'center',
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 17,
        borderRadius: 8,
        paddingTop: 20,
        paddingBottom: 20
    },
    addNewGroupHeading: {
        fontSize: 19,
        fontWeight: '800',
        color: '#000000',
        marginLeft: 10
    },
    // Our Groups List ----------------------
    ourGroupsSection: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: '#fff',
        padding:10,
        paddingTop:15,
        paddingBottom:15,
        borderRadius:8
    },
    ourGroupRow: {
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'space-between'
    },
    rowLeft: {
        flexDirection: 'row',
        maxWidth: '67%',
    },
    groupImageWrapper: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: '#d3d3d3',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    groupImg: {
        width: 68,
        height: 68,
        borderRadius: 50
    },
    groupDetails:{
        marginLeft:10
    },
    groupName:{
        fontSize:18,
        fontWeight:'800',
        color:'#000000'
    },
    groupDesc:{
        fontSize:15,
        color:'#858587',
        lineHeight:21
    },
    groupTime:{
        fontSize:14,
        color:'#858587'
    }
})

export default GroupsScreen
