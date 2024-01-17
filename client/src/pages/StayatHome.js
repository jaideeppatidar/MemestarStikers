import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import TobbarScreen from '../components/TopBarScreen';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../Routes/NavigationConstants';
import { useRoute } from '@react-navigation/native';
import stickers from '../data/stickersData';
const StickerList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { categoryType } = route.params;
  const leftPress = () => {
    navigation.navigate(ROUTES.HOME);
  }
  return (
    <View style={styles.container}>
      <TobbarScreen title={stickers[categoryType]?.title || 'Unknown Category'} onLeftPress={leftPress} leftImage={require('../public/assets/image/left.png')} rightImage={require('../public/assets/image/three.png')} />
      <ScrollView>
        <View style={styles.FlatListContainer}>
          {stickers[categoryType]?.images.map((item) => (
            <TouchableOpacity key={item.id} >
              <Image source={item.source} style={styles.stickerImage} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../public/assets/image/whatsaap.png')} />
        <Text style={styles.ViewTextWhatsapp}>Add To WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  FlatListContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  stickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',

  },

  stickerImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  button: {
    display: 'flex',
    flexDirection: "row",
    position: 'absolute',
    bottom: 40,
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 25,
    alignItems: 'center',
    width: 270,
    alignSelf: 'center',
    height: 50,
    gap: 10,
  },
  ViewTextWhatsapp: {
    color: 'white',
    fontWeight: '600'
  }

});

export default StickerList;
