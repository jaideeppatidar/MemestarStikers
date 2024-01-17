import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.ProfileContainer}
    >
      <View style={styles.profileIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image style={styles.ViewArrow} source={require("../public/assets/image/rightIcon.png")} />
        </TouchableOpacity>
        <Text style={styles.Profile}>Profile</Text>
      </View>
      <View style={styles.ProfileImageContainer}>
        <Image style={styles.ProfileImage} source={require("../public/assets/image/jay.jpg")} />
        <TouchableOpacity>
          <Text style={styles.ChangeProfile}>Change Picture</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.InputFiled}>
        <Text style={styles.Heading}>Name</Text>
        <View style={styles.input}>
          <Text>{ }</Text>
        </View>
        <Text style={styles.Heading}>Email</Text>
        <View style={styles.input}>
          <Text>{ }</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ProfileContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  profileIcon: {
    width: "100%",
    backgroundColor: "#2EABAB",
    height: 170,

  },
  ViewArrow: {
    margin: 15,
    width: 30,
    height: 30,
  },
  Profile: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  ProfileImageContainer: {
    alignItems: "center",
  },
  ProfileImage: {
    height: 145,
    width: 145,
    borderRadius: 100,
    marginTop: -80,
  },
  ChangeProfile: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#283D3B",
  },
  InputFiled: {
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 8,
    borderColor: "#2EABAB",
    fontWeight: "bold",
    color: 'black',
    justifyContent: 'center',
    marginTop: 8,
  },
  Heading: {
    fontWeight: "bold",
    color: "black",
    paddingVertical: 8,
  },
  button: {
    backgroundColor: '#2EABAB',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 45,
    alignSelf: 'center',
    marginTop: 25,

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
