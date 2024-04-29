import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';

const mockData = [
  { id: '1', type: 'sent', text: 'Hey! Faizan, what\'s up?', time: '3:38 PM' },
  { id: '2', type: 'received', text: 'Hello!', time: '3:38 PM', received: true },
  { id: '2', type: 'received', text: 'Hello!', time: '3:38 PM', received: true },
  { id: '2', type: 'received', text: 'Hello!', time: '3:38 PM', received: true },
  { id: '1', type: 'sent', text: 'Hey! Faizan, what\'s up?', time: '3:38 PM' },
  { id: '1', type: 'sent', text: 'Hey! Faizan, what\'s up?', time: '3:38 PM' }
  // ... more messages
];

const ChatBoardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
       <Image source={require('../../../assets/chatBoardIcons/backIcon.png')}/>
        <Text style={styles.headerTitle}>Faizan</Text>
        <Image style={styles.userImage} source={require('../../../assets/UsersPhotos/shubham.jpg')}/>
       
      </View>
      
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[
            styles.message,
            item.type === 'sent' ? styles.sent : styles.received
          ]}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.messageTime}>{item.time}</Text>
          </View>
        )}
      />
      
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.icon}>
          <Image source={require('../../../assets/chatBoardIcons/PlusIcon.png')}/>
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Type a message" />
        <TouchableOpacity style={styles.icon}>
         <Image source={require('../../../assets/chatBoardIcons/micIcon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
         <Image source={require('../../../assets/chatBoardIcons/cameraIcon.png')}/>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5DDD5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  userImage:{
    width:40,
    height:40,
    borderRadius:50
  },
  message: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    maxWidth: '80%'
  },
  sent: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end'
  },
  received: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start'
  },
  messageText: {
    fontSize: 16
  },
  messageTime: {
    fontSize: 12,
    alignSelf: 'flex-end',
    marginTop: 5
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    alignItems:'center'
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  icon: {
    padding: 5,
  },
});

export default ChatBoardScreen;
