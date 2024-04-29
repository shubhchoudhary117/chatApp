import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CallHistoryRowCard from '../../Components/CallHistoryRowCard/CallHistoryRowCard'

const CallScreen = () => {
    const [currentCallHistories, setCurrentCallHistories] = useState('ALL')
    return <>

        <SafeAreaView style={styles.callsScreen}>
            {/* Header of calls screen ------------------- */}
            <View style={cshStyle.callScreenHeader}>
                <View style={cshStyle.callScreenHeaderContainer}>
                    <Text style={cshStyle.editeBtn}>Edite</Text>
                    <View style={cshStyle.actionButtons}>
                        <TouchableOpacity
                            onPress={() => setCurrentCallHistories('ALL')}
                            style={[cshStyle.allCallBtn, { backgroundColor: currentCallHistories === 'ALL' ? '#fff' : '#E3E2E8' }]}>
                            <Text style={cshStyle.btnText}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setCurrentCallHistories('MISSED')}
                            style={[cshStyle.missedCallBtn, { backgroundColor: currentCallHistories === 'MISSED' ? '#fff' : '#E3E2E8' }]}>
                            <Text style={cshStyle.btnText}>Missed</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={require('../../../assets/callScreenIcons/callIconBlue.png')} />
                </View>
            </View>
            {/* end of header section ----------------------- */}

            {/* start the call search section --------------- */}
            <ScrollView>
                <KeyboardAvoidingView>
                    <View style={shsStyle.searchingActionsSection}>
                        <View style={shsStyle.searchActionsContainer}>
                            <Text style={shsStyle.callSectionHeading}>Calls</Text>
                            <View style={shsStyle.searchInputGroup}>
                                <Image style={shsStyle.searchIcon} source={require("../../../assets/callScreenIcons/searchIcon.png")} />
                                <TextInput
                                    autoFocus
                                    style={shsStyle.searchInput} keyboardType='default' />
                            </View>

                            <View style={shsStyle.createLinkTab}>
                                <View style={shsStyle.createLinkIconWrapper}>
                                    <Image source={require('../../../assets/callScreenIcons/linkIcon.png')} />
                                </View>

                                <View style={shsStyle.createLinkContent}>
                                    <Text style={shsStyle.createLinkLink}>Create Call Link</Text>
                                    <Text style={shsStyle.createLinkMssg}>Share a link for your Skychat call</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>

                {/* Call History Section ------------------ */}
                <View style={chStyle.callHistorySection}>
                    <View stye={chStyle.callHistorySectionContainer}>
                        <Text style={chStyle.callHistoryHeading}>Recent</Text>

                        {/* List of call histories -------------- */}
                        <View style={chStyle.callHistoriesList}>

                            {/* Call history Row ------------ */}
                            <CallHistoryRowCard />
                            <CallHistoryRowCard />
                            <CallHistoryRowCard />
                            <CallHistoryRowCard />
                            <CallHistoryRowCard />
                            <CallHistoryRowCard />
                            <CallHistoryRowCard />
                            <CallHistoryRowCard />
                            <CallHistoryRowCard />
                            <CallHistoryRowCard />
                            <CallHistoryRowCard />
                            <CallHistoryRowCard />
                            {/* end of call History row */}

                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>


    </>
}


const chStyle = StyleSheet.create({
    callHistorySection: {
        marginTop: 10,
        padding: 20,
        paddingTop: 0
    },
    callHistoryHeading: {
        width: '95%',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '700',
        color: '#000000'
    },
    callHistoriesList: {
        width: '100%',
        alignSelf: 'center',
        backgroundColor: "#fff",
        borderRadius: 8,

        paddingBottom: 20,
        marginTop: 10
    }
})


const shsStyle = StyleSheet.create({
    searchingActionsSection: {
        padding: 10
    },
    searchActionsContainer: {
        padding: 10,
        paddingTop: 0
    },
    callSectionHeading: {
        fontSize: 35,
        color: '#000000',
        fontWeight: '900'
    },
    searchInputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#E4E3E8',
        borderRadius: 8
    },
    searchIcon: {
        marginLeft: 14
    },
    searchInput: {
        height: 45,
        paddingLeft: 12,
        fontSize: 16,
    },
    createLinkTab: {
        paddingLeft: 17,
        paddingTop: 15,
        paddingRight: 17,
        paddingBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    createLinkIconWrapper: {
        width: 55,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#F4F3F9'
    },
    createLinkContent: {
        marginLeft: 10
    },
    createLinkLink: {
        fontSize: 16,
        fontWeight: '500',
        color: '#0079FF'
    },
    createLinkMssg: {
        fontSize: 15,
        paddingTop: 5
    }
})

// Comman Screen styling
const styles = StyleSheet.create({
    callsScreen: {
        flex: 1
    }
})

const cshStyle = StyleSheet.create({
    callScreenHeader: {
        padding: 20,
    },
    callScreenHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    editeBtn: {
        fontSize: 18,
        fontWeight: '600',
        color: "#0079FF",
        lineHeight: 18
    },
    actionButtons: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#E3E2E8',
        borderRadius: 6
    },
    allCallBtn: {
        width: 84,
        height: 33,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    missedCallBtn: {
        width: 84,
        height: 33,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginLeft: 5
    },
    btnText: {
        fontSize: 15,
        color: '#000000',
        fontWeight: '600'
    }
})

export default CallScreen
