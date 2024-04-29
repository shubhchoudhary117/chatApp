import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const SettingsHomeScreen = () => {
    return <>
        <SafeAreaView>
            <ScrollView>
                {/* Updates section --------------- */}
                <View style={styles.settingsSearchSection}>

                    {/* Search bar and heading section ------------- */}
                    <View style={styles.settingsSectionActions}>
                        <Text style={styles.settingsHeading}>Settings</Text>
                        <View style={styles.searchInputGroup}>
                            <Image style={styles.searchIcon} source={require("../../../../assets/settingsScreenPhotos/searchIcon.png")} />
                            <TextInput style={styles.searchInput} placeholder='Search' />
                        </View>
                    </View>
                    {/*searchbar and heading section ----------------- */}
                </View>


                {/* Profile box --------------------- */}
                <View style={styles.userProfileBox}>
                    {/* Profile info --------------------- */}
                    <View style={styles.profileInfo}>
                        <View style={styles.profileInfoContainer}>
                            <View style={styles.profileInfoLeft}>
                                <Image style={styles.profileImage} source={require('../../../../assets/UsersPhotos/shubham.jpg')} />
                                <View style={styles.profileContent}>
                                    <Text style={styles.profileUsername}>Shubham choudhary</Text>
                                    <Text style={styles.profileDescription}>Hey there! I am using sky...</Text>
                                </View>
                            </View>
                            <View style={styles.profileInfoRight}>
                                <Image source={require('../../../../assets/settingsScreenPhotos/qrIcon.png')} />
                            </View>

                        </View>
                    </View>
                    {/* end of profile info ------------- */}

                    {/* Seprator ------------------------ */}
                    <View style={styles.saprator}></View>
                    {/* endof saprator--------------- */}

                    <View style={styles.profileAvtarContent}>
                        <View style={styles.profielAvtarLeft}>
                            <View style={styles.profileAvtarWrapper}>
                                <Image source={require('../../../../assets/settingsScreenPhotos/avtarIcon.png')} />
                            </View>
                            <Text style={styles.avtarHeading}>Avtar</Text>
                        </View>
                        <View style={styles.profielAvtarRight}>
                            <Image style={styles.profielAvtarNextIcon} source={require('../../../../assets/settingsScreenPhotos/nextIcon.png')} />
                        </View>

                    </View>
                </View>
                {/* end of profile box --------------------- */}

                {/* setting list card ------------------------- */}
                <View style={sStyles.settingListCard}>
                    {/* setting ------------------------ */}
                    <View style={sStyles.setting}>
                        <View style={sStyles.settingLeftContent}>
                            <View style={[sStyles.settingIconWrapper,{backgroundColor:'#2CD15F'}]} >
                                <Image source={require('../../../../assets/settingsScreenPhotos/broadcastIcon.png')} />
                            </View>
                            <Text style={sStyles.settingName}>Broadcast List</Text>
                        </View>
                        <View style={sStyles.settingRightContent}>
                            <Image style={sStyles.openSettingIconImg} source={require('../../../../assets/settingsScreenPhotos/nextIcon.png')} />
                        </View>

                    </View>
                    {/* end of setting ------------------ */}

                     {/* setting ------------------------ */}
                     <View style={sStyles.setting}>
                        <View style={sStyles.settingLeftContent}>
                            <View style={[sStyles.settingIconWrapper,{backgroundColor:'#FFC700'}]} >
                                <Image source={require('../../../../assets/settingsScreenPhotos/broadcastIcon.png')} />
                            </View>
                            <Text style={sStyles.settingName}>Starred Message</Text>
                        </View>
                        <View style={sStyles.settingRightContent}>
                            <Image style={sStyles.openSettingIconImg} source={require('../../../../assets/settingsScreenPhotos/nextIcon.png')} />
                        </View>

                    </View>
                    {/* end of setting ------------------ */}

                     {/* setting ------------------------ */}
                     <View style={sStyles.setting}>
                        <View style={sStyles.settingLeftContent}>
                            <View style={[sStyles.settingIconWrapper,{backgroundColor:'#0AAC9F'}]} >
                                <Image source={require('../../../../assets/settingsScreenPhotos/linkedIcon.png')} />
                            </View>
                            <Text style={sStyles.settingName}>Linked Devices</Text>
                        </View>
                        <View style={sStyles.settingRightContent}>
                            <Image style={sStyles.openSettingIconImg} source={require('../../../../assets/settingsScreenPhotos/nextIcon.png')} />
                        </View>

                    </View>
                    {/* end of setting ------------------ */}
                </View>
                {/* end of setting card --------------------- */}



                 {/* setting list card ------------------------- */}
                 <View style={sStyles.settingListCard}>
                    {/* setting ------------------------ */}
                    <View style={sStyles.setting}>
                        <View style={sStyles.settingLeftContent}>
                            <View style={[sStyles.settingIconWrapper,{backgroundColor:'#0079FF'}]} >
                                <Image source={require('../../../../assets/settingsScreenPhotos/accountIcon.png')} />
                            </View>
                            <Text style={sStyles.settingName}>Account</Text>
                        </View>
                        <View style={sStyles.settingRightContent}>
                            <Image style={sStyles.openSettingIconImg} source={require('../../../../assets/settingsScreenPhotos/nextIcon.png')} />
                        </View>

                    </View>
                    {/* end of setting ------------------ */}

                     {/* setting ------------------------ */}
                     <View style={sStyles.setting}>
                        <View style={sStyles.settingLeftContent}>
                            <View style={[sStyles.settingIconWrapper,{backgroundColor:'#38A8DA'}]} >
                                <Image source={require('../../../../assets/settingsScreenPhotos/privacyIcon.png')} />
                            </View>
                            <Text style={sStyles.settingName}>privacy</Text>
                        </View>
                        <View style={sStyles.settingRightContent}>
                            <Image style={sStyles.openSettingIconImg} source={require('../../../../assets/settingsScreenPhotos/nextIcon.png')} />
                        </View>

                    </View>
                    {/* end of setting ------------------ */}

                     {/* setting ------------------------ */}
                     <View style={sStyles.setting}>
                        <View style={sStyles.settingLeftContent}>
                            <View style={[sStyles.settingIconWrapper,{backgroundColor:'#50CD67'}]} >
                                <Image source={require('../../../../assets/settingsScreenPhotos/whatsappIcon.png')} />
                            </View>
                            <Text style={sStyles.settingName}>chats</Text>
                        </View>
                        <View style={sStyles.settingRightContent}>
                            <Image style={sStyles.openSettingIconImg} source={require('../../../../assets/settingsScreenPhotos/nextIcon.png')} />
                        </View>

                    </View>
                    {/* end of setting ------------------ */}
                      {/* setting ------------------------ */}
                      <View style={sStyles.setting}>
                        <View style={sStyles.settingLeftContent}>
                            <View style={[sStyles.settingIconWrapper,{backgroundColor:'#F93F30'}]} >
                                <Image source={require('../../../../assets/settingsScreenPhotos/notificationIcon.png')} />
                            </View>
                            <Text style={sStyles.settingName}>notifications</Text>
                        </View>
                        <View style={sStyles.settingRightContent}>
                            <Image style={sStyles.openSettingIconImg} source={require('../../../../assets/settingsScreenPhotos/nextIcon.png')} />
                        </View>

                    </View>
                    {/* end of setting ------------------ */}
                      {/* setting ------------------------ */}
                      <View style={sStyles.setting}>
                        <View style={sStyles.settingLeftContent}>
                            <View style={[sStyles.settingIconWrapper,{backgroundColor:'#29BBA6'}]} >
                                <Image source={require('../../../../assets/settingsScreenPhotos/rupeeIcon.png')} />
                            </View>
                            <Text style={sStyles.settingName}>Payments</Text>
                        </View>
                        <View style={sStyles.settingRightContent}>
                            <Image style={sStyles.openSettingIconImg} source={require('../../../../assets/settingsScreenPhotos/nextIcon.png')} />
                        </View>

                    </View>
                    {/* end of setting ------------------ */}
                      {/* setting ------------------------ */}
                      <View style={sStyles.setting}>
                        <View style={sStyles.settingLeftContent}>
                            <View style={[sStyles.settingIconWrapper,{backgroundColor:'#33C758'}]} >
                                <Image source={require('../../../../assets/settingsScreenPhotos/storageIcon.png')} />
                            </View>
                            <Text style={sStyles.settingName}>storage and data</Text>
                        </View>
                        <View style={sStyles.settingRightContent}>
                            <Image style={sStyles.openSettingIconImg} source={require('../../../../assets/settingsScreenPhotos/nextIcon.png')} />
                        </View>

                    </View>
                    {/* end of setting ------------------ */}
                </View>
                {/* end of setting card --------------------- */}

            </ScrollView>
        </SafeAreaView>


    </>
}

const sStyles = StyleSheet.create({
    settingListCard: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 20,
        paddingBottom:10
    },
    setting: {
        marginTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        paddingBottom: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 5,
        marginTop:14
    },
    settingLeftContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    settingIconWrapper: {
        width: 36,
        height: 36,
        backgroundColor: '#0079FF',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    settingName: {
        marginLeft: 12,
        fontSize: 21,
        fontWeight: '800',
        color: '#000000'
    }

})


const styles = StyleSheet.create({
    settingsSearchSection: {
        marginTop: 30,
        padding: 17
    },
    settingsHeading: {
        fontSize: 31,
        fontWeight: '900',
        color: '#000000',

    },
    searchInputGroup: {
        marginTop: 10,
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
    },
    // user profile styling
    userProfileBox: {
        width: '90%',
        alignSelf: 'center',
        paddingBottom: 5,
        backgroundColor: "#fff"
    },

    profileInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 8,
        paddingLeft: 15,
        paddingRight: 15,
    },
    profileInfoLeft: {
        flexDirection: 'row'
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    profileContent: {
        marginLeft: 8
    },
    profileUsername: {
        fontSize: 20,
        fontWeight: '800',
        color: '#000000'
    },
    profileDescription: {
        fontSize: 14,
        fontWeight: '400',
        color: '#8a8a8a'
    },
    saprator: {
        borderWidth: 0.7,
        borderColor: '#DBDBDB',
        marginTop: 10
    },
    profileAvtarContent: {
        marginTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        paddingBottom: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 5
    },
    profielAvtarLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileAvtarWrapper: {
        width: 36,
        height: 36,
        backgroundColor: '#0079FF',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avtarHeading: {
        marginLeft: 12,
        fontSize: 21,
        fontWeight: '800',
        color: '#000000'
    }

})
export default SettingsHomeScreen
