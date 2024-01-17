import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark'
export default BottomTabs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menubarbottomrow}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image style={styles.BottomBarIcons} source={require('../public/assets/image/home.png')} ></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('NewsFeed')}>
        <Image style={styles.BottomBarIcons} source={require('../public/assets/image/reels.png')} ></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
        <Image style={styles.BottomBarIcons} source={require('../public/assets/image/Profile.png')} ></Image>

      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.BottomBarIcons} source={require('../public/assets/image/setting.png')} ></Image>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menubarbottomrow: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    height: 45,
    width: "auto",
    backgroundColor: "#2EABAB",
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  IconName: {
    color: "white",
    fontSize: 11,
    fontWeight: "600",
  },
  BottomBarIcons: {
    width: 30,
    height: 30,
  }
});
