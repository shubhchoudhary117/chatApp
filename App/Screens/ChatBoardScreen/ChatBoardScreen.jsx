import React, { useState } from 'react'
import { FlatList, Image, ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import colors from '../../../constants/colors'

const image =require('../../../assets/chatBoardIcons/chatViewBanner.png')
const ChatBoardScreen = () => {

  // states for handling chat data
  const [inputMessage, setInputMessage] = useState("");

  // detect device for keyboard alignment
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;


  const mockData = [
    { id: '1', type: 'sent', text: 'Hey! Faizan, what\'s up?', time: '3:38 PM' },
    { id: '2', type: 'received', text: 'Hello shubham!', time: '3:38 PM', received: true },
    { id: '3', type: 'received', text: 'ok shubham i wil call back!', time: '3:38 PM', received: true },
    { id: '4', type: 'received', text: 'ok ok', time: '3:38 PM', received: true },
    { id: '5', type: 'sent', text: 'Hey! Faizan, what\'s up?', time: '3:38 PM' },
    { id: '6', type: 'sent', text: 'Hey! Faizan, what\'s up?', time: '3:38 PM' }
    // ... more messages
  ];
  return <>
    <KeyboardAvoidingView
      style={{ flex: 1 }}>
      <SafeAreaView style={styles.chatBoardScreenView}>
        <View style={styles.chatBoardScreenContainer}>

          {/* Header section ----------------------- */}
          <View style={styles.chatBoardScreenHeader}>
            <View style={styles.chattBoardScreenHeaderContainer}>
              {/* left header ------------ */}
              <View style={styles.headerleft}>
                <Image source={require('../../../assets/chatBoardIcons/backIcon.png')} style={styles.backIcon} />
                <Text style={styles.totoalChatts}>7</Text>
                <Image source={require('../../../assets/UsersPhotos/shubham.jpg')} style={styles.userImage} />
                <Text style={styles.username}>Shubham choudhary</Text>
              </View>
              {/* right header ------------- */}
              <View style={styles.headerright}>
                <Image source={require('../../../assets/chatBoardIcons/callIcon.png')} />
                <Image style={styles.videoIcon} source={require('../../../assets/chatBoardIcons/videoIcon.png')} />
              </View>
            </View>
          </View>
          {/* End of the header section ----------------------------- */}

          {/* User chat container --------------------- */}

          <ImageBackground style={chatStyles.messagesContainer} source={image} resizeMode="cover" >
          <FlatList
              data={mockData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={[
                  chatStyles.message,
                  item.type === 'sent' ? chatStyles.sent : chatStyles.received
                ]}>
                  <Text style={chatStyles.messageText}>{item.text}</Text>
                  <Text style={chatStyles.messageTime}>
                    {item.time}{"  "}
                    {
                      item.type!='received'&&<Image  source={require('../../../assets/chatBoardIcons/messageSeenIcon.png')}/>
                    }
                    
                    </Text>
                </View>
              )}
            />
          </ImageBackground>
          {/* end of chat contaienr -------------------------- */}

          {/* chatt input fields --------------------------- */}

          <View style={inputBoxStyle.inputContainer}>
            <TouchableOpacity style={inputBoxStyle.icon}>
              <Image source={require('../../../assets/chatBoardIcons/PlusIcon.png')} />
            </TouchableOpacity>

            <View style={inputBoxStyle.inputGroup}>
              <TextInput
                onChangeText={(mssg) => setInputMessage(mssg)}
                keyboardType='default'
                secureTextEntry={false}
                style={inputBoxStyle.input}
                placeholder="Type a message" />
              <Image style={inputBoxStyle.stickerIcon} source={require('../../../assets/chatBoardIcons/stickerIcon.png')} />
            </View>

            {
              inputMessage === "" &&
              <TouchableOpacity style={inputBoxStyle.icon}>
                <Image source={require('../../../assets/chatBoardIcons/cameraIcon.png')} />
              </TouchableOpacity>
            }
            {
              inputMessage === "" &&
              <TouchableOpacity style={inputBoxStyle.icon}>
                <Image source={require('../../../assets/chatBoardIcons/micIcon.png')} />
              </TouchableOpacity>
            }


            {
              inputMessage != "" &&
              <TouchableOpacity style={[inputBoxStyle.icon, inputBoxStyle.sendChattBtn]}>
                <Image style={inputBoxStyle.sendChatIcon} source={require('../../../assets/chatBoardIcons/sendChatIcon.png')} />
              </TouchableOpacity>
            }


          </View>
          {/* end of chatt input fields ---------------------- */}


        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  </>
}


// styilng code -----------------
const styles = StyleSheet.create({
  chatBoardScreenView: {
    flex: 1,

  },
  chatBoardScreenContainer: {
    flex: 1
  },
  chatBoardScreenHeader: {
    flexDirection: 'row',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  chattBoardScreenHeaderContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  headerleft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerright: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  },

  totoalChatts: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: '600',
    marginLeft: 13
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 14
  },
  username: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
    lineHeight: 25,
    marginLeft: 13
  },
  videoIcon: {
    marginLeft: 14
  }
})

const chatStyles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: '1',
    alignItems: 'center'
  },
  messagesContainer: {
    flex: 1,
    paddingTop: 10,
    
  },
  message: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    maxWidth: '80%'
  },
  sent: {
    backgroundColor: '#D9FDD3',
    alignSelf: 'flex-end',
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 2, // smaller radius for the bottom left to make it appear like a chat bubble
    maxWidth: '80%',
    
  },
  received: {
    backgroundColor: 'white',
    marginRight: 50, // adjust this to ensure the bubble doesn't stretch the full width
    padding: 10,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 2, // smaller radius for the bottom left to make it appear like a chat bubble
    maxWidth: '80%', // for bubble not to take the entire width of the screen
    alignSelf: 'flex-start', // align to left for the received message
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
    color: "#000000"
  },
  messageTime: {
    fontSize: 12,
    alignSelf: 'flex-end',
    marginTop: 5
  },
  messageSeenIcon:{
    marginLeft:15,
    marginRight:15,
    width:25,
    height:25
  }
})

const inputBoxStyle = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#DBDBDB',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  inputGroup: {
    flex: 0.9,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  stickerIcon: {
    marginRight: 10
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,

  },
  icon: {
    padding: 5,
  },
  sendChattBtn: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: "#0079FF",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendChatIcon: {
    width: 22,
    height: 22,
    marginLeft: 5
  }
})


export default ChatBoardScreen
