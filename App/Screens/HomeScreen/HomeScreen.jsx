import React, { useState } from 'react'
import { Button, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
// Import vector icons


// Use the prebuilt version of RNVI located in the dist folder
import ChattRowComponent from '../../Components/ChattRowComponent/ChattRowComponent'
const HomeScreen = () => {

    const [searchInput, setSearchInput] = useState("")

    return <>
        <SafeAreaView>
           
            <View>
                {/* Home section header section */}
                <View style={styles.homeScreenHeader}>
                    <View style={styles.headerSelectChattsIcon}>
                        <Image source={require('../../../assets/HomeScreenPhotos/selectIcon.png')} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../../assets/HomeScreenPhotos/cameraIcon.png')} />
                        <Image style={{ marginLeft: 25 }} source={require('../../../assets/HomeScreenPhotos/plusIcon.png')} />
                    </View>
                </View>

                {/* home screen heading wrapper */}

                <View style={styles.homeScreenChattsHeadingWrapper} >
                    <Text style={styles.homeScreenChattsHeading}>Chatts</Text>
                </View>

                <View style={styles.headerActions}>
                    <View style={styles.searchInputGroup}>
                        <Image style={styles.searchIcon} source={require("../../../assets/HomeScreenPhotos/searchIcon.png")} />
                        <TextInput
                            value={searchInput}
                            onChangeText={(searchVal) => setSearchInput(searchInput)}
                            placeholder='Search'
                            style={styles.searchInputField} />
                    </View>
                    <View style={styles.unreadChattImageWrapper}>
                        <Image style={styles.unreadChattImage} source={require('../../../assets/unreadChatts.png')} />
                    </View>

                </View>



                {/* All Chatts Section  */}
                <View style={styles.homeScreenAllChatsSection}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        <ChattRowComponent
                            username={"shubahm "}
                            userPhoto={require("../../../assets/UsersPhotos/shubham.jpg")}
                        />
                        <ChattRowComponent
                            username={"Samarth "}
                            userPhoto={require("../../../assets/UsersPhotos/samarth.png")}
                        />
                        <ChattRowComponent
                            username={"faizan designer"}
                            userPhoto={require("../../../assets/UsersPhotos/faizan.jpeg")}
                        />
                        <ChattRowComponent
                            username={"Rohan bhai"}
                            userPhoto={require("../../../assets/UsersPhotos/rohan.png")}
                        />
                        <ChattRowComponent
                            username={"Anand bro"}
                            userPhoto={require("../../../assets/UsersPhotos/anand.png")}
                        />
                        <ChattRowComponent
                            username={"Pawan Kumawat"}
                            userPhoto={require("../../../assets/UsersPhotos/pawan.png")}
                        />
                        <ChattRowComponent
                            username={"Pawan Kumawat"}
                            userPhoto={require("../../../assets/UsersPhotos/pawan.png")}
                        />
                        <ChattRowComponent
                            username={"Pawan Kumawat"}
                            userPhoto={require("../../../assets/UsersPhotos/pawan.png")}
                        />
                        <ChattRowComponent
                            username={"Pawan Kumawat"}
                            userPhoto={require("../../../assets/UsersPhotos/pawan.png")}
                        />
                        <ChattRowComponent
                            username={"Pawan Kumawat"}
                            userPhoto={"../../../assets/UsersPhotos/pawan.png"}
                        />
                        <ChattRowComponent
                            username={"Pawan Kumawat"}
                            userPhoto={require("../../../assets/UsersPhotos/pawan.png")}
                        />
                        <ChattRowComponent
                            username={"Pawan Kumawat"}
                            userPhoto={require("../../../assets/UsersPhotos/pawan.png")}
                        />
                        <ChattRowComponent
                            username={"Pawan Kumawat"}
                            userPhoto={require("../../../assets/UsersPhotos/pawan.png")}
                        />
                    </ScrollView>
                </View>



                {/* Bottom navigation ----------- */}



            </View>
        </SafeAreaView>
    </>
}


const styles = StyleSheet.create({
    homeScreenHeader: {
        width: '100%',
        paddingTop: 6,
        paddingLeft: 12,
        paddingRight: 12,

    },
    scrollViewContent: {
        flexGrow: 1, // Make sure the content can grow to fill the ScrollView
    },
    homeScreenHeaderContainer: {
        width: '100%',
    },
    homeScreenHeader: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,

    },
    homeScreenChattsHeadingWrapper: {
        width: '93%',
        alignSelf: 'center',
        padding: 10,
        paddingLeft: 5
    },
    homeScreenChattsHeading: {
        fontSize: 31,
        fontWeight: '800',
        color: "#000000",
        lineHeight: 47
    },
    homeScreenAllChatsSection: {
        marginTop: 15,
        paddingLeft: 5

    },
    headerActions: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',

    },

    searchInputGroup: {
        width: 380,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10, // Add padding to adjust icon position
        borderRadius: 8,
        position: 'relative',
        backgroundColor: '#EFEFF1'

    },

    searchInputField: {
        width: 330, // Take remaining space
        height: 40,
        borderRadius: 8,
        paddingLeft: 10,
        marginLeft: 5
        // Adjust left padding to accommodate the icon
    },

    searchIcon: {
        width: 20, // Set width of the icon
        height: 20, // Set height of the icon
        zIndex: 100,

    },
    unreadChattImageWrapper: {
        width: 17,
        height: 17
    },
    unreadChattImage: {
        width: 17,
        height: 17
    }
    ,
    bottomNavigation: {
        width: '100%',
        position: 'absolute',
        bottom: 20, // Adjust as needed
    },
    bottomNavigationContainer: {
        width: '90%', // Or use a fixed pixel value
        flexDirection: 'row', // Align items horizontally
        justifyContent: 'space-between', // Space items evenly
        alignItems: 'center',
        alignSelf: 'center',
    },
    bottomNavigationTab: {
        flexDirection: 'row', // Align items horizontally
        alignItems: 'center', // Align items vertically
        justifyContent: 'center', // Center items horizontally
    },
    bottomNavigationTabIcon: {
        width: 18,
        height: 18,
    },
    bottomNavigationTabName: {
        fontSize: 14,
        color: '#858587',
        fontWeight: "600",
        lineHeight: 17,
    }

})

export default HomeScreen
