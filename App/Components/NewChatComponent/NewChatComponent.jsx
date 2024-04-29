import React from 'react'
import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'

const NewChatComponent = () => {
  // dummy data -------------------------------
  const contactsMocData = [
    { id: '1', name: 'shubham choudhary', photoUri: require('../../../assets/UsersPhotos/shubham.jpg'), description: 'Never give up' },
    { id: '2', name: 'Samarth Tripathi', photoUri: require('../../../assets/UsersPhotos/samarth.png'), description: 'Never give up' },
    { id: '3', name: 'Rohan more', photoUri: require('../../../assets/UsersPhotos/rohan.png'), description: 'Never give up' },
    { id: '4', name: 'faizan', photoUri: require('../../../assets/UsersPhotos/faizan.jpeg'), description: 'Never give up' },
    { id: '5', name: 'pawan', photoUri: require('../../../assets/UsersPhotos/anand.png'), description: 'Never give up' },
    { id: '6', name: 'anand', photoUri: require('../../../assets/UsersPhotos/pawan.png'), description: 'Never give up' },
    { id: '1', name: 'shubham choudhary', photoUri: require('../../../assets/UsersPhotos/shubham.jpg'), description: 'Never give up' },
    { id: '2', name: 'Samarth Tripathi', photoUri: require('../../../assets/UsersPhotos/samarth.png'), description: 'Never give up' },
    { id: '3', name: 'Rohan more', photoUri: require('../../../assets/UsersPhotos/rohan.png'), description: 'Never give up' },
    { id: '4', name: 'faizan', photoUri: require('../../../assets/UsersPhotos/faizan.jpeg'), description: 'Never give up' },
    { id: '5', name: 'pawan', photoUri: require('../../../assets/UsersPhotos/anand.png'), description: 'Never give up' },
    { id: '6', name: 'anand', photoUri: require('../../../assets/UsersPhotos/pawan.png'), description: 'Never give up' },
    { id: '1', name: 'shubham choudhary', photoUri: require('../../../assets/UsersPhotos/shubham.jpg'), description: 'Never give up' },
    { id: '2', name: 'Samarth Tripathi', photoUri: require('../../../assets/UsersPhotos/samarth.png'), description: 'Never give up' },
    { id: '3', name: 'Rohan more', photoUri: require('../../../assets/UsersPhotos/rohan.png'), description: 'Never give up' },
    { id: '4', name: 'faizan', photoUri: require('../../../assets/UsersPhotos/faizan.jpeg'), description: 'Never give up' },
    { id: '5', name: 'pawan', photoUri: require('../../../assets/UsersPhotos/anand.png'), description: 'Never give up' },
    { id: '6', name: 'anand', photoUri: require('../../../assets/UsersPhotos/pawan.png'), description: 'Never give up' },
  ]

  return <>

    <View style={styles.newChatComponentView}>
      <View style={styles.newChatScreenHeaderContainer}>

        {/* header of new chatt screen ------------------ */}
        <View style={styles.newChatScreenHeader}>
          <Text style={styles.headerHeading}>New Chat</Text>
          <Image style={styles.closeNewChatIcon} source={require('../../../assets/newChatIcons/closeIcon.png')} />
        </View>

        {/* start the search input section styling ---------- */}
        <View style={styles.newChattUserSearchInputGroup}>
          <Image style={styles.searchIcon} source={require('../../../assets/newChatIcons/searchIcon.png')} />
          <TextInput
            style={styles.searchInput}
            placeholder='Search name or number'
          />
        </View>
        {/* end of search fiedl ---------------------------- */}
        {/* saprator --------------------------------------- */}
        <View style={styles.saprator}></View>
        <Text style={styles.contactsHeading}>contacts on Skychat</Text>
      </View>
      {/* end of the header section ---------------------- */}

      <View style={contactsSectionStyle.contactsSection}>
        {/* Contact list card ------------------------------ */}
        <View style={contactsSectionStyle.contactsListCard}>
          {/* Contact list ----------------------------------- */}
          <FlatList
            data={contactsMocData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              // Contact row ----------------
              <View style={contactsSectionStyle.contactRow}>
                <Image style={contactsSectionStyle.contactImage} source={item.photoUri}></Image>
                <View >
                  <Text style={contactsSectionStyle.contacterName}>
                    {item.name}
                  </Text>
                  <Text style={contactsSectionStyle.contactDescription}>Hey there! I am using Skychat.</Text>
                </View>
              </View>
              // end of contact row ------------
            )}
          />
          {/* end of contact list ---------------------------- */}


          {/* Contact name alphabet odering list ---------- */}
        </View>
        <View style={contactsSectionStyle.alphabetList}>
          <Text style={contactsSectionStyle.alphabet}>A</Text>
          <Text style={contactsSectionStyle.alphabet}>B</Text>
          <Text style={contactsSectionStyle.alphabet}>C</Text>
          <Text style={contactsSectionStyle.alphabet}>D</Text>
          <Text style={contactsSectionStyle.alphabet}>E</Text>
          <Text style={contactsSectionStyle.alphabet}>F</Text>
          <Text style={contactsSectionStyle.alphabet}>G</Text>
          <Text style={contactsSectionStyle.alphabet}>H</Text>
          <Text style={contactsSectionStyle.alphabet}>I</Text>
          <Text style={contactsSectionStyle.alphabet}>J</Text>
          <Text style={contactsSectionStyle.alphabet}>K</Text>
          <Text style={contactsSectionStyle.alphabet}>L</Text>
          <Text style={contactsSectionStyle.alphabet}>M</Text>
          <Text style={contactsSectionStyle.alphabet}>N</Text>
          <Text style={contactsSectionStyle.alphabet}>O</Text>
          <Text style={contactsSectionStyle.alphabet}>P</Text>
          <Text style={contactsSectionStyle.alphabet}>Q</Text>
          <Text style={contactsSectionStyle.alphabet}>R</Text>
          <Text style={contactsSectionStyle.alphabet}>S</Text>
          <Text style={contactsSectionStyle.alphabet}>T</Text>
          <Text style={contactsSectionStyle.alphabet}>U</Text>
          <Text style={contactsSectionStyle.alphabet}>V</Text>
          <Text style={contactsSectionStyle.alphabet}>W</Text>
          <Text style={contactsSectionStyle.alphabet}>X</Text>
          <Text style={contactsSectionStyle.alphabet}>Y</Text>
          <Text style={contactsSectionStyle.alphabet}>Z</Text>
          <Text style={contactsSectionStyle.alphabet}>#</Text>
        </View>
      </View>

    </View>

  </>
}


// header and main view styling -------------
const styles = StyleSheet.create({
  newChatComponentView: {
    flex: 1
  },
  newChatScreenHeaderContainer: {
    backgroundColor: '#fff',
    paddingBottom: 20,
    marginTop: 50,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12
  },
  newChatScreenHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'center',
  },
  headerHeading: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
    alignSelf: 'center',
    textAlign: 'center',
    position: 'relative'
  },
  closeNewChatIcon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 20,
    top: 20
  },
  newChattUserSearchInputGroup: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    alignSelf: 'center',
    backgroundColor: '#EFEFF1',
    borderRadius: 6
  },
  searchInput: {
    height: 40,
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 12
  },
  searchIcon: {
    marginLeft: 8
  },
  saprator: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
    marginTop: 20
  },
  contactsHeading: {
    width: '88%',
    fontSize: 17,
    fontWeight: '700',
    color: '#858587',
    alignSelf: 'center',
    marginTop: 17
  }
})

// contact list section designe
const contactsSectionStyle = StyleSheet.create({
  contactsSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20
  },
  contactsListCard: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  contactImage: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  contacterName: {
    marginLeft: 10,
    fontSize: 18,
    color: '#000000',
    fontWeight: '800'
  },
  contactDescription: {
    marginLeft: 11,
    marginTop: 3,
    color: '#858587',
    fontSize: 15,
    fontWeight: '500'
  },
  alphabetList: {
    flexDirection: "column",
    paddingVertical: 20, marginLeft: 10
  },
  alphabet: {
    color: '#1DAB61',
    paddingLeft: 4,

  }
})
export default NewChatComponent
