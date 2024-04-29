import React from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import StatusRow from '../../Components/StatusRow/StatusRow'

const UpdatesScreen = () => {
    return <>

        <SafeAreaView style={styles.updatesSectionView}>
            {/* Header section --------------- */}
            <View style={ushStyle.updatesSectionHeader}>
                <View style={ushStyle.headerContainer}>
                    <Image style={ushStyle.menuIcon} source={require('../../../assets/updatesScreenIcons/menuIcon.png')} />
                </View>
            </View>
            {/* end of header section --------- */}

           
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {/* Updates section --------------- */}
            <View style={usStyle.userUpdatesSearchSection}>

                {/* Search bar and heading section ------------- */}
                <View style={usStyle.userUpdatesSectionActions}>
                    <Text style={usStyle.updatesHeading}>Updates</Text>
                    <View style={usStyle.searchInputGroup}>
                        <Image style={usStyle.searchIcon} source={require("../../../assets/updatesScreenIcons/searchIcon.png")} />
                        <TextInput style={usStyle.searchInput} placeholder='Search' />
                    </View>
                </View>
                {/*searchbar and heading section ----------------- */}
            </View>

           
            <View style={ssStyle.statusSection}>
                <View style={ssStyle.statusSectionContainer}>
                    <Text style={ssStyle.statusHeading}>Status</Text>

                    {/* My Status box --------------------- */}
                    <View style={ssStyle.myStatusBox}>
                        <View style={ssStyle.myStatusBoxContainer}>
                            {/* Left details of status box */}
                            <View style={ssStyle.myStatusBoxLeft}>
                                <View style={ssStyle.statusPhotoWrapper}>
                                    <Image style={ssStyle.statusPhoto} source={require('../../../assets/UsersPhotos/shubham.jpg')} />
                                </View>
                                <View style={ssStyle.userDetails}>
                                    <Text style={ssStyle.myStatusHeading}>My Status</Text>
                                    <Text style={ssStyle.myStatusSubHeading}>Add to My Status</Text>
                                </View>
                            </View>
                            {/* end of left details */}
                            <View style={ssStyle.myStatusBoxRight}>
                                <View style={ssStyle.statusActionIconWrapper}>
                                    <Image style={ssStyle.statusActionIcon} source={require('../../../assets/updatesScreenIcons/cameraIcon.png')} />
                                </View>
                                <View style={ssStyle.statusActionIconWrapper}>
                                    <Image style={ssStyle.statusActionIcon} source={require('../../../assets/updatesScreenIcons/editeIcon.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* end of myStatus Box ------------- */}

                    {/* My Contacts Status list ------------- */}
                    <View style={ssStyle.allStatusSection}>
                        <Text style={ssStyle.recentUpdatesHeading}>Recent Updates</Text>
                        <View style={ssStyle.allStatusContainer}>
                            <StatusRow/>
                            <StatusRow/>
                            <StatusRow/>
                            <StatusRow/>
                            <StatusRow/>
                            <StatusRow/>
                            <StatusRow/>
                            <StatusRow/>
                            <StatusRow/>
                            <StatusRow/>
                            <StatusRow/>
                        </View>
                        
                    </View>




                </View>
            </View>
            </ScrollView>
        </SafeAreaView>


    </>
}

const ssStyle = StyleSheet.create({
    statusSectionContainer: {
        marginTop: 0,
    },
    statusHeading: {
        fontSize: 20,
        color: '#000000',
        fontWeight: '900',
        lineHeight: 30,
        padding: 17
    },
    myStatusBox: {
        width: '100%',
        padding: 14,
        backgroundColor: '#fff'
    },
    myStatusBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    myStatusBoxLeft: {
        paddingLeft: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    statusPhotoWrapper: {
        width: 70,
        height: 70,
        borderRadius: 50,
        position: 'relative'
    },
    statusPhoto: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    myStatusHeading: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000',
        lineHeight: 28
    },
    userDetails: {
        marginLeft: 10
    },
    myStatusSubHeading: {
        fontSize: 16,
        lineHeight: 22,
        paddingTop: 5
    },
    myStatusBoxRight: {
        flexDirection: 'row',

    },
    statusActionIconWrapper: {
        width: 45,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: "#F3F2F7",
        marginRight: 20
    },
    recentUpdatesHeading:{
        fontSize:16,
        fontWeight:'400',
        color:'#858587',
        lineHeight:32,
        marginLeft:20
    },
    allStatusContainer:{
        paddingTop:14
    }
})

const usStyle = StyleSheet.create({
    userUpdatesSearchSection: {
        marginTop: 5,
        padding: 17
    },
    updatesHeading: {
        fontSize: 31,
        fontWeight: '900',
        color: '#000000',

    },
    searchInputGroup: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E4E3E8',
        borderRadius: 8,
        padding: 3
    },
    searchIcon: {
        marginLeft: 12,
    },
    searchInput: {
        height: 40,
        paddingLeft: 12,
        fontSize: 16
    }

})

const styles = StyleSheet.create({
    updatesSectionView: {

    },
    scrollViewContent: {
        flexGrow: 1, // Make sure the content can grow to fill the ScrollView
    },
})

// updates section header styling
const ushStyle = StyleSheet.create({
    updatesSectionHeader: {
        backgroundColor: 'fff'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    menuIcon: {
        marginRight: 13,
        marginTop:10
    }
})

export default UpdatesScreen
