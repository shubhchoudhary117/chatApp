import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'

const UserProfileScreen = () => {
    const [lockChatIsEnable, setLockChatIsEnabled] = useState(false);
    const toggleLockChatSwitch = () => setLockChatIsEnabled(previousState => !previousState);


    return <>
        <SafeAreaView style={styles.userProfileScreen}>


            {/* Header section ------------------- */}
            <View style={styles.userProfileHeader}>
                <View style={styles.userProfileHeaderContainer}>
                    <Image style={styles.headerBackIcon} source={require('../../../assets/userProfilePhotos/backIcon.png')} />
                    <Text style={styles.headerHeading}>Contact Info</Text>
                    <Text style={styles.editeBtn}>Edite</Text>
                </View>
            </View>
            {/* end of header section ------------------- */}

            <ScrollView>

                {/* User Profile Avtar Section----------------- */}
                <View style={userProfielAvtarStyle.userProfileBox}>
                    <Image style={userProfielAvtarStyle.avtarImage} source={require('../../../assets/UsersPhotos/shubham.jpg')} />
                    <Text style={userProfielAvtarStyle.username}>Shubham choudhary</Text>
                    <Text style={userProfielAvtarStyle.phone}>{"+91 7447006318"}</Text>
                </View>

                {/* end of user profile Avtar Section --------- */}

                {/* user profile actions section ----------------------- */}
                <View style={profileActionsStyle.profileActionsSection}>
                    <View style={profileActionsStyle.profileActionsContainer}>
                        {/* action box -------- */}
                        <View style={profileActionsStyle.profileActionBox}>
                            <Image style={profileActionsStyle.actionImage} source={require('../../../assets/userProfilePhotos/callIcon.png')} />
                            <Text style={profileActionsStyle.actionName}>Call</Text>
                        </View>
                        {/* end of action box -------- */}
                        {/* action box -------- */}
                        <View style={profileActionsStyle.profileActionBox}>
                            <Image style={profileActionsStyle.actionImage} source={require('../../../assets/userProfilePhotos/videocallIcon.png')} />
                            <Text style={profileActionsStyle.actionName}>Video</Text>
                        </View>
                        {/* end of action box -------- */}
                        {/* action box -------- */}
                        <View style={profileActionsStyle.profileActionBox}>
                            <Image style={profileActionsStyle.actionImage} source={require('../../../assets/userProfilePhotos/rupeeIcon.png')} />
                            <Text style={profileActionsStyle.actionName}>Pay</Text>
                        </View>
                        {/* end of action box -------- */}
                        {/* action box -------- */}
                        <View style={profileActionsStyle.profileActionBox}>
                            <Image style={profileActionsStyle.actionImage} source={require('../../../assets/userProfilePhotos/searchIcon.png')} />
                            <Text style={profileActionsStyle.actionName}>Search</Text>
                        </View>
                        {/* end of action box -------- */}

                    </View>
                </View>
                {/* end of profile actions section --------------------- */}


                {/* user Profile description ------------- */}
                <View style={styles.userDescription}>
                    <Text style={styles.userDescriptionText}>Never Give Up 😃</Text>
                </View>
                {/* end of description -------------- */}

                {/* Profile other action s-------------- */}
                <View style={profileOtherSettingStyles.settingsContainer}>

                    {/* setting card -------------------------- */}
                    <View style={profileOtherSettingStyles.settingCard}>
                        {/* settings row ----------- */}
                        <View style={profileOtherSettingStyles.settingCardRow}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={profileOtherSettingStyles.settingIcon} source={require('../../../assets/userProfilePhotos/mediaIcon.png')} />
                                <Text style={profileOtherSettingStyles.settingName} >Media, Links, and Docs</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={profileOtherSettingStyles.rightText} >9</Text>
                                <Image style={profileOtherSettingStyles.nextIcon} source={require('../../../assets/userProfilePhotos/nextIcon.png')} />
                            </View>

                        </View>
                        {/* end of setting row -------------- */}
                        {/* settings row ----------- */}
                        <View style={profileOtherSettingStyles.settingCardRow}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={[profileOtherSettingStyles.settingIcon, { marginLeft: 5 }]} source={require('../../../assets/userProfilePhotos/keptMessageIcon.png')} />
                                <Text style={[{ marginLeft: 5 }, profileOtherSettingStyles.settingName]} >Kept Messages</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={profileOtherSettingStyles.rightText} >None</Text>
                                <Image style={profileOtherSettingStyles.nextIcon} source={require('../../../assets/userProfilePhotos/nextIcon.png')} />
                            </View>

                        </View>
                        {/* end of setting row -------------- */}

                    </View>
                    {/* end of setting card --------------- */}


                    {/* setting card -------------------------- */}
                    <View style={profileOtherSettingStyles.settingCard}>
                        {/* settings row ----------- */}
                        <View style={profileOtherSettingStyles.settingCardRow}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={profileOtherSettingStyles.settingIcon} source={require('../../../assets/userProfilePhotos/notificationsIcon.png')} />
                                <Text style={[{ marginLeft: 5 }, profileOtherSettingStyles.settingName]} >Mute</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={profileOtherSettingStyles.rightText} >No</Text>
                                <Image style={profileOtherSettingStyles.nextIcon} source={require('../../../assets/userProfilePhotos/nextIcon.png')} />
                            </View>

                        </View>
                        {/* end of setting row -------------- */}
                        {/* settings row ----------- */}
                        <View style={profileOtherSettingStyles.settingCardRow}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={[profileOtherSettingStyles.settingIcon, { marginLeft: 0 }]} source={require('../../../assets/userProfilePhotos/wallpaperIcon.png')} />
                                <Text style={[{ marginLeft: 2 }, profileOtherSettingStyles.settingName]} >wallpaper & Sound</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={profileOtherSettingStyles.rightText} ></Text>
                                <Image style={profileOtherSettingStyles.nextIcon} source={require('../../../assets/userProfilePhotos/nextIcon.png')} />
                            </View>

                        </View>
                        {/* end of setting row -------------- */}
                        {/* settings row ----------- */}
                        <View style={profileOtherSettingStyles.settingCardRow}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={[profileOtherSettingStyles.settingIcon, { marginLeft: 2 }]} source={require('../../../assets/userProfilePhotos/saveIcon.png')} />
                                <Text style={[{ marginLeft: 4 }, profileOtherSettingStyles.settingName]} >Save to Photos</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={profileOtherSettingStyles.rightText} >off</Text>
                                <Image style={profileOtherSettingStyles.nextIcon} source={require('../../../assets/userProfilePhotos/nextIcon.png')} />
                            </View>

                        </View>
                        {/* end of setting row -------------- */}

                    </View>
                    {/* end of setting card --------------- */}

                    {/* setting card -------------------------- */}
                    <View style={profileOtherSettingStyles.settingCard}>
                        {/* settings row ----------- */}
                        <View style={profileOtherSettingStyles.settingCardRow}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={[profileOtherSettingStyles.settingIcon, { marginLeft: 6 }]} source={require('../../../assets/userProfilePhotos/lockIcon.png')} />
                                <Text style={[{ marginLeft: 6 }, profileOtherSettingStyles.settingName]} >
                                    Encryption
                                    {'\n'}
                                    <Text
                                        style={{
                                            fontSize: 14, paddingTop: 4,
                                            paddingRight: 20, color: '#858587', fontWeight: '400'
                                        }}>
                                        {"Messages and calls are end-to-endencrypted. Tap to verify."}</Text>

                                </Text>

                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={profileOtherSettingStyles.rightText} ></Text>
                                <Image style={profileOtherSettingStyles.nextIcon} source={require('../../../assets/userProfilePhotos/nextIcon.png')} />
                            </View>

                        </View>
                        {/* end of setting row -------------- */}
                        {/* settings row ----------- */}
                        <View style={profileOtherSettingStyles.settingCardRow}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={[profileOtherSettingStyles.settingIcon, { marginLeft: 6 }]} source={require('../../../assets/userProfilePhotos/historyIcon.png')} />
                                <Text style={[{ marginLeft: 3 }, profileOtherSettingStyles.settingName]} >Disappearing Messages</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={profileOtherSettingStyles.rightText} >90 Days</Text>
                                <Image style={profileOtherSettingStyles.nextIcon} source={require('../../../assets/userProfilePhotos/nextIcon.png')} />
                            </View>

                        </View>
                        {/* end of setting row -------------- */}

                        {/* settings row ----------- */}
                        <View style={profileOtherSettingStyles.settingCardRow}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={[profileOtherSettingStyles.settingIcon, { marginLeft: 6 }]} source={require('../../../assets/userProfilePhotos/lockChatIcon.png')} />
                                <Text style={[{ marginLeft: 3 }, profileOtherSettingStyles.settingName]} >Lock Chat</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                {/* switch button for lock unlock chat setting */}
                                <Switch
                                 trackColor={{false: '#767577', true: '#0079FF'}}
                                    onValueChange={toggleLockChatSwitch}
                                    value={lockChatIsEnable}
                                />
                                <Image style={profileOtherSettingStyles.nextIcon} source={require('../../../assets/userProfilePhotos/nextIcon.png')} />
                            </View>

                        </View>
                        {/* end of setting row -------------- */}

                    </View>
                    {/* end of setting card --------------- */}
                </View>


                {/* contact details  section ------------------- */}
                <View style={contactSectionStyle.contactSection}>
                    <View style={contactSectionStyle.headerContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={contactSectionStyle.contactIcon} source={require('../../../assets/userProfilePhotos/contactIcon.png')} />
                            <Text style={contactSectionStyle.headerHeading}>Contact Details</Text>
                        </View>
                        <View>
                            <Image source={require('../../../assets/userProfilePhotos/nextIcon.png')}></Image>
                        </View>
                    </View>
                </View>
                {/* end of contact section ------------- */}


                {/* Groups section ---------------------- */}
                <View style={groupSectionStyle.groupSection}>

                    {/* Group info row --------------- */}
                    <View style={groupSectionStyle.groupInfoRow}>
                        <View style={groupSectionStyle.iconWrapper}>
                            <Image style={groupSectionStyle.icon} source={require('../../../assets/userProfilePhotos/plusBlackIcon.png')} />
                        </View>

                        <Text
                            style={groupSectionStyle.createGroupHeading}>
                            Create Group with Faizan
                        </Text>
                    </View>
                    {/* end of group info row ----------- */}


                    {/* Group info row --------------- */}
                    <View style={groupSectionStyle.groupInfoRow}>
                        <View style={groupSectionStyle.myGroupImageWrapper}>
                            <Image style={groupSectionStyle.myGroupImage} source={require('../../../assets/userProfilePhotos/groupImage.jpeg')} />
                        </View>

                        <View>

                            <Text
                                style={groupSectionStyle.myGroupName}>
                                Create Group with Faizan
                            </Text>
                            <Text style={groupSectionStyle.myGroupDesc}>Akshat, Anand, Sarthak, Ayush</Text>
                        </View>

                    </View>
                    {/* end of group info row ----------- */}
                </View>
                {/* end of grups info section ---------------- */}

                {/* Chat Action section ------------------- */}
                <View style={chatActionsStyle.chatActionsSection}>
                    <View style={chatActionsStyle.actionRow}>
                        <Text style={chatActionsStyle.chatActionName}>Share Contact</Text>
                    </View>
                    <View style={chatActionsStyle.chatActionSprator}></View>
                    <View style={chatActionsStyle.actionRow}>
                        <Text style={chatActionsStyle.chatActionName}>Export Chat</Text>
                    </View>
                    <View style={chatActionsStyle.chatActionSprator}></View>
                    <View style={chatActionsStyle.actionRow}>
                        <Text style={chatActionsStyle.chatActionName}>Clear Chat</Text>
                    </View>
                </View>
                {/* end of chat Action  action ------------------ */}

                <View style={otherActionsStyle.otherActionSection}>
                    <View style={otherActionsStyle.actionRow}>
                        <Text style={otherActionsStyle.otherActionName}>Block Faizan</Text>
                    </View>
                    <View style={otherActionsStyle.otherActionSprator}></View>
                    <View style={otherActionsStyle.actionRow}>
                        <Text style={otherActionsStyle.otherActionName}>Report Faizan</Text>
                    </View>
                    <View style={otherActionsStyle.otherActionSprator}></View>

                </View>


            </ScrollView>
        </SafeAreaView>


    </>
}

// styling of profile screen
const styles = StyleSheet.create({
    userProfileScreen: {
        flex: 1,
        paddingBottom: 10
    },
    userProfileHeader: {
        padding: 20
    },
    userProfileHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerHeading: {
        fontSize: 19,
        fontWeight: "800",
        color: '#000000',
        lineHeight: 26
    },
    editeBtn: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        lineHeight: 26
    },
    userDescription: {
        width: '90%',
        alignSelf: 'center',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 13,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 20
    },
    userDescriptionText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000'
    }
})

const userProfielAvtarStyle = StyleSheet.create({
    userProfileBox: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        marginTop: 50

    },
    avtarImage: {
        width: 120,
        height: 120,
        borderRadius: 100
    },
    username: {
        fontSize: 26,
        fontWeight: '900',
        color: '#000000',
        paddingTop: 5,
        lineHeight: 34
    },
    phone: {
        fontSize: 19,
        fontWeight: '600',
        color: '#858587',
        marginTop: 10
    }
})

const profileActionsStyle = StyleSheet.create({
    profileActionsSection: {
        padding: 10,
    },
    profileActionsContainer: {
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileActionBox: {
        width: 95,
        height: 90,
        flexDirection: 'column',
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        backgroundColor: "#fff",
        borderRadius: 12,
        elevation: 3,

    },
    actionImage: {
        alignSelf: 'center'
    },
    actionName: {
        fontSize: 19,
        paddingTop: 10,
        color: '#000000',
        textAlign: 'center',
        fontWeight: '600'

    }
})

const profileOtherSettingStyles = StyleSheet.create({
    settingsContainer: {
        flex: 1
    },
    settingCard: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 14,
        marginTop: 20
    },
    settingCardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
       marginTop:10,
       marginBottom:10
    },
    settingName: {
        maxWidth: '89%',
        fontSize: 18,
        fontWeight: '500',
        color: "#000000",
        paddingLeft: 14,
        lineHeight: 22
    },
    rightText: {
        fontSize: 16,
        color: '#858587',
        marginRight: 8
    }
})



const chatActionsStyle = StyleSheet.create({
    chatActionsSection: {
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 20
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10
    },
    chatActionName: {
        fontSize: 18,
        fontWeight: '500',
        color: "#1DAB61"
    },
    chatActionSprator: {
        width: '85%',
        alignSelf: 'flex-end',
        marginTop: 10,
        borderWidth: 0.3,
        borderColor: '#DBDBDB'
    }
})

const otherActionsStyle = StyleSheet.create({
    otherActionSection: {
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 20
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10
    },
    otherActionName: {
        fontSize: 18,
        fontWeight: '500',
        color: "#EC003E"
    },
    otherActionSprator: {
        width: '85%',
        alignSelf: 'flex-end',
        marginTop: 10,
        borderWidth: 0.3,
        borderColor: '#DBDBDB'
    }
})
const groupSectionStyle = StyleSheet.create({
    groupSection: {
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 20
    },
    groupInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14
    },
    iconWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    createGroupHeading: {
        marginLeft: 8,
        fontSize: 18,
        color: '#000000',
        fontWeight: '500'
    },
    myGroupImageWrapper: {
        width: 47,
        height: 47,
        borderRadius: 50,
        backgroundColor: '#d3d3d3',
        marginLeft: 6
    },
    myGroupImage: {
        width: 46,
        height: 46,
        borderRadius: 50
    },
    myGroupName: {
        fontSize: 17,
        color: '#000000',
        marginLeft: 8
    },
    myGroupDesc: {
        marginLeft: 8,
        fontSize: 14,
        color: '#858587'
    }
})
const contactSectionStyle = StyleSheet.create({
    contactSection: {
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 20
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerHeading: {
        fontSize: 17,
        fontWeight: '600',
        color: '#000000',
        marginLeft: 10
    }
})


export default UserProfileScreen
