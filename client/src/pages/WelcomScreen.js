import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const MyComponent = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.WelContainer}>
      <Text onPress={() => navigation.navigate('Home')} style={styles.heading}>
        Meme<Text style={styles.starstyle}>Star</Text>
      </Text>
      <Image style={styles.LogoView} source={require('../public/assets/image/starIcon.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  WelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontWeight: '700',
    color: 'orange',
    fontSize: 34,
    fontFamily: 'Arial',
  },
  starstyle: {
    color: 'lightblue',
    fontWeight: '900',
  },
  LogoView: {
    width: 100,
    height: 100,
  },
});

export default MyComponent;
