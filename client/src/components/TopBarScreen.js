import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function TobbarScreen({ leftImage, title, rightImage, onLeftPress, onRightPress }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onLeftPress}>
        <Image source={leftImage} />
      </TouchableOpacity>
      <Text style={styles.heading}>{title}</Text>
      <TouchableOpacity onPress={onRightPress}>
        <Image source={rightImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2EABAB",
    height: 45,
    paddingHorizontal: 16,
    ...Platform.select({
      android: {
        elevation: 10,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
    }),
  },
  heading: {
    fontWeight: '800',
    color: 'white',
    fontSize: 20,
  },
});
