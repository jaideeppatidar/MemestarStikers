import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from "react-native";
import TobbarScreen from "../components/TopBarScreen";
// import BottomTabScreen from "../components/BottomTabScreen";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons/faCircleRight';


const CategoryItem = ({ iconSource, label, onPress }) => (
  <TouchableOpacity style={styles.categoryItem} onPress={onPress} activeOpacity={1.6}>
    <Image style={styles.imageIc} source={iconSource} />
    <Text style={styles.IconName}>{label}</Text>
  </TouchableOpacity>
);

const HomePage = ({ navigation }) => {
  const handleCategoryPress = (screen) => {
    navigation.navigate(screen);
  };
  const categoriesData = [
    { iconSource: require('../public/assets/image/img/group1.png'), label: 'Stay at home', screen: 'NewS' },
    { iconSource: require('../public/assets/image/img/group2.png'), label: 'Christmas', screen: 'NewS' },
    { iconSource: require('../public/assets/image/img/group3.png'), label: 'Birthday', screen: 'NewS' },
    { iconSource: require('../public/assets/image/img/group4.png'), label: 'Pets', screen: 'NewS' },
  ];

  return (
    <View style={styles.homecontainer}>
      <TobbarScreen title="MemeStar" />
      <ScrollView contentContainerStyle={styles.scrollContainer} >
        <View style={styles.categoriesContainer}>
          <Text style={styles.categories}>Categories</Text>
          <View style={styles.CategContent}>
            {categoriesData.map((category, index) => (
              <CategoryItem
                key={index}
                iconSource={category.iconSource}
                label={category.label}
                onPress={() => handleCategoryPress(category.screen)}
              />
            ))}
            <TouchableOpacity onPress={() => handleCategoryPress('NewS')}>
              <FontAwesomeIcon icon={faCircleRight} size={27} color="#2EABAB" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.backgroundContainer}>
          <ImageBackground style={styles.BgImage} source={require('../public/assets/image/backgroundhome.png')}>
            <Text style={styles.BackgroundTextView}>New Emojies</Text>
          </ImageBackground>
        </View>
        <View style={styles.TrendingStickers}>
          <TouchableOpacity>
            <Text style={styles.TrendingHeading}>Trending Stickers</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.MoreHeading}>More
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.BoxContainer}>
          <View style={styles.boxView}>
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group1.png')} />
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group2.png')} />
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group3.png')} />
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group4.png')} />
          </View>
          <View style={styles.boxView}>
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group5.png')} />
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group6.png')} />
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group7.png')} />
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group8.png')} />
          </View>
        </View>
        <View style={styles.TrendingStickers}>
          <TouchableOpacity>
            <Text style={styles.TrendingHeading}>Spring</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.MoreHeading}>Creativite</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.BoxContainer}>
          <View style={styles.boxView}>
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group1.png')} />
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group2.png')} />
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group3.png')} />
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group4.png')} />
          </View>
          <View style={styles.boxView}>
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group5.png')} />
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group6.png')} />
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group7.png')} />
            <Image style={styles.imageBox} source={require('../public/assets/image/img/group8.png')} />
          </View>
        </View>
      </ScrollView>
      {/* <View style={styles.bottomTabContainer}>
        <BottomTabScreen />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    backgroundColor: "white",
  },
  // scrollContainer: {
  //   flexGrow: 1,
  //   paddingBottom: 50,
  // },
  categories: {
    fontSize: 20,
    fontWeight: '700',
    color: "black",
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  CategContent: {
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: 'space-between',
    paddingVertical: 15,
    flexDirection: 'row',
    gap: 10,
  },
  categoryItem: {
    alignItems: 'center',
  },
  IconName: {
    color: "black",
    fontWeight: '600',
  },
  imageIconArrow: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  imageIc: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  backgroundContainer: {
    paddingHorizontal: 20,
  },
  BgImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  BackgroundTextView: {
    color: 'white',
    fontWeight: '600',
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontSize: 18

  },
  TrendingStickers: {
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  TrendingHeading: {
    color: 'black',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
  },
  MoreHeading: {
    color: '#2EABAB',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
  },
  BoxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  boxView: {
    flexDirection: 'row',
    width: 150,
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap: 18,
  },
  imageBox: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  bottomTabContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'flex-end',
  },

});

export default HomePage;

