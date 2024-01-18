import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import TobbarScreen from '../components/TopBarScreen';
import { useNavigation } from '@react-navigation/native';

const stickersData = [
  {
    title: 'Christmas',
    stickers: [
      require('../public/newstiker/christ1.png'),
      require('../public/newstiker/christ2.png'),
      require('../public/newstiker/christ3.png'),
      require('../public/newstiker/christ4.png'),
      require('../public/newstiker/christ5.png'),
    ],
  },
  {
    title: 'Birthday',
    stickers: [
      require('../public/newstiker/birth1.png'),
      require('../public/newstiker/birth2.png'),
      require('../public/newstiker/birth3.png'),
      require('../public/newstiker/birth4.png'),
      require('../public/newstiker/birth5.png'),
    ],
  },
  {
    title: 'Pets',
    stickers: [
      require('../public/newstiker/pets1.png'),
      require('../public/newstiker/pets2.png'),
      require('../public/newstiker/pets3.png'),
      require('../public/newstiker/pets4.png'),
      require('../public/newstiker/pets5.png'),
    ],
  },
  {
    title: 'Wedding',
    stickers: [
      require('../public/newstiker/wedding1.png'),
      require('../public/newstiker/wedding2.png'),
      require('../public/newstiker/wedding3.png'),
      require('../public/newstiker/wedding5.png'),
      require('../public/newstiker/wedding5.png'),
    ],
  },

  {
    title: 'Smile',
    stickers: [
      require('../public/newstiker/smile1.png'),
      require('../public/newstiker/smile2.png'),
      require('../public/newstiker/smile3.png'),
      require('../public/newstiker/smile4.png'),
      require('../public/newstiker/smile5.png'),
    ],
  },
  {
    title: 'Spring',
    stickers: [
      require('../public/newstiker/spring1.png'),
      require('../public/newstiker/spring2.png'),
      require('../public/newstiker/spring3.png'),
      require('../public/newstiker/spring4.png'),
      require('../public/newstiker/spring5.png'),
    ],
  },
  {
    title: 'Spring',
    stickers: [
      require('../public/newstiker/spring1.png'),
      require('../public/newstiker/spring2.png'),
      require('../public/newstiker/spring3.png'),
      require('../public/newstiker/spring4.png'),
      require('../public/newstiker/spring5.png'),
    ],
  },
  {
    title: 'Spring',
    stickers: [
      require('../public/newstiker/birth1.png'),
      require('../public/newstiker/birth2.png'),
      require('../public/newstiker/birth3.png'),
      require('../public/newstiker/birth4.png'),
      require('../public/newstiker/birth5.png'),
    ],
  },
  {
    title: 'Spring',
    stickers: [
      require('../public/newstiker/birth1.png'),
      require('../public/newstiker/birth2.png'),
      require('../public/newstiker/birth3.png'),
      require('../public/newstiker/birth4.png'),
      require('../public/newstiker/birth5.png'),
    ],
  },
  {
    title: 'Spring',
    stickers: [
      require('../public/newstiker/birth1.png'),
      require('../public/newstiker/birth2.png'),
      require('../public/newstiker/birth3.png'),
      require('../public/newstiker/birth4.png'),
      require('../public/newstiker/birth5.png'),
    ],
  },
  {
    title: 'Spring',
    stickers: [
      require('../public/newstiker/birth1.png'),
      require('../public/newstiker/birth2.png'),
      require('../public/newstiker/birth3.png'),
      require('../public/newstiker/birth4.png'),
      require('../public/newstiker/birth5.png'),
    ],
  },
  {
    title: 'Spring',
    stickers: [
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
    ],
  },
  {
    title: 'Spring',
    stickers: [
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
    ],
  },
  {
    title: 'Spring',
    stickers: [
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
    ],
  },
  {
    title: 'Spring',
    stickers: [
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
    ],
  },
  {
    title: 'Spring',
    stickers: [
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
      require('../public/assets/image/img/group7.png'),
    ],
  },




];

function NewStickers() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  const [filteredStickers, setFilteredStickers] = useState(stickersData);
  const debouncedSearch = useCallback(
    debounce(() => {
      const filtered = stickersData.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
      setFilteredStickers(filtered);
    }, 100),
    [text]
  );
  const searchStickers = () => {
    debouncedSearch();
  };
  const renderItem = ({ item }) => (
    <View style={styles.CategoryContainer}>
      <View style={styles.titleIcon}>
        <Text style={styles.CategoryTitle}>{item.title}</Text>
        <TouchableOpacity onPress={() => handleCategoryPress(item)} style={styles.button}>
          <Image style={styles.WhatsappIcon} source={require('../public/assets/image/miniIconwhatsapp.png')} />
          <Text style={styles.ViewTextWhatsapp}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.StickersContainer}>
        {item.stickers.map((sticker, stickerIndex) => (
          <Image key={stickerIndex} style={styles.StickerImage} source={sticker} />
        ))}
      </View>
    </View>
  );
  const leftPress = () => {
    navigation.navigate('Home');
  }
  const handleCategoryPress = (category) => {
    const { title } = category;
    const lowercaseTitle = title.toLowerCase();
    switch (lowercaseTitle) {
      case 'christmas':
      case 'birthday':
      case 'pets':
      case 'wedding':
      case 'smile':
      case 'spring':
        navigation.navigate('StayAt', { categoryType: lowercaseTitle, category });
        break;
      default:
        console.warn('Unhandled category:', lowercaseTitle);
    }
  };
  return (
    <View style={styles.Container}>
      <TobbarScreen title="New Stickers" onLeftPress={leftPress} leftImage={require('../public/assets/image/left.png')} />
      <View style={styles.InputContaier}>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            onChangeText(text);
            searchStickers();
          }}
          value={text}
          placeholder="Search by title"
          onSubmitEditing={searchStickers}
        ></TextInput>
      </View>
      <FlatList
        data={filteredStickers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.FlatListContent}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  FlatListContent: {
    paddingHorizontal: 20,
  },
  InputContaier: {
    paddingHorizontal: 20,
    paddingTop: 5
  },
  input: {
    width: "100%",
    height: 35,
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 8,
    borderColor: "#2EABAB",
    fontWeight: "bold",
    color: 'black',
    justifyContent: 'center',
    marginTop: 8,
    alignItems: 'center',

  },
  CategoryTitle: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  titleIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  StickersContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  ArrowRight: {
    paddingVertical: 10,
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  button: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    width: 60,
    height: 25,
    borderColor: 'gray',
    borderWidth: 1,
  },
  WhatsappIcon: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
  ViewTextWhatsapp: {
    color: 'black',
    fontWeight: '600',
  },
  StickerImage: {
    marginTop: 10,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};


export default NewStickers;
