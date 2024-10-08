import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView, Switch } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfilePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#ffffff' }]}>
      <ScrollView>
        <View style={[styles.header]}>
          
          {/* Profile Details */}
          <View style={styles.profileDetails}>
            <Image
              source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/342067273_192505726951906_2922542150750305142_n.jpg?stp=dst-jpg_s235x350&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeF2HdoRMR8wWmEvTrGI874mJzH5KJt7G78nMfkom3sbvw9LMiBMKNeftcV4gs1TwJPj5PFOOsuUC4opGQLVM1Cd&_nc_ohc=aw3xfgcY40YQ7kNvgGXoyVr&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=AvYmS7gcy1nKkAP9K9GR-Tp&oh=03_Q7cD1QGK2vLErYRzTQ5fU0_t38cXRc6YbODd85M8lIulDOFFHQ&oe=672CC384' }} // Placeholder for profile image
              style={styles.profileImage}
            />
            <Text style={[styles.name, { color: isDarkMode ? '#000000' : '#000000' }]}>John Loyd Gutierrez Abang</Text>
            <Text style={[styles.email, { color: isDarkMode ? '#000000' : '#000000' }]}>3RD YEAR BSIT</Text>
          </View>
        </View>

        {/* Profile Section */}
        <View style={[styles.section, { backgroundColor: isDarkMode ? '#000000' : '#ffffff' }]}>
          <Text style={[styles.sectionTitle, { color: isDarkMode ? '#fff' : '#000000' }]}>Profile</Text>
          <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#272727' : '#f0f4f5' }]}>
            <MaterialIcons name="person" size={24} color={isDarkMode ? '#ccc' : '#000000'} style={styles.optionIcon} />
            <Text style={[styles.optionText, { color: isDarkMode ? '#ccc' : '#000000' }]}>Manage user</Text>
          </TouchableOpacity>
        </View>

        {/* Settings Section */}
        <View style={[styles.section, { backgroundColor: isDarkMode ? '#000000' : '#ffffff' }]}>
          <Text style={[styles.sectionTitle, { color: isDarkMode ? '#fff' : '#000000' }]}>Settings</Text>

          <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#272727' : '#f0f4f5' }]}>
            <MaterialIcons name="notifications" size={24} color={isDarkMode ? '#ccc' : '#333'} style={styles.optionIcon} />
            <Text style={[styles.optionText, { color: isDarkMode ? '#ccc' : '#333' }]}>Notifications</Text>
          </TouchableOpacity>


          {/* Dark Mode Toggle */}
          <View style={[styles.option, { backgroundColor: isDarkMode ? '#272727' : '#f0f4f5' }]}>
            <MaterialIcons name="brightness-4" size={24} color={isDarkMode ? '#ccc' : '#333'} style={styles.optionIcon} />
            <Text style={[styles.optionText, { color: isDarkMode ? '#ccc' : '#333' }]}>Dark Mode</Text>
            <Switch value={isDarkMode} onValueChange={toggleDarkMode} style={styles.switch} />
          </View>
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity style={[styles.signOutButton, { backgroundColor: isDarkMode ? '#fc0000' : '#f0f4f5' }]}>
          <Text style={styles.signOutText}>Sign out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingBottom: 20,
    paddingTop: 40,
    backgroundColor: '#adabaa',
  },
  profileDetails: {
    alignItems: 'center',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: '#cccccc',
    marginTop: 0,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    marginTop: 6,
  },
  section: {
    marginTop: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  optionIcon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
  switch: {
    alignSelf: 'flex-end',
  },
  signOutButton: {
    marginTop: 8,
    padding: 15,
    alignItems: 'left',
    borderRadius: 20,
    marginHorizontal: 160,
  },
  signOutText: {
    color: '#000000',
    fontSize: 'bold',
  },
});

export default ProfilePage;