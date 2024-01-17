import React from 'react';
import { View, Text } from 'react-native';
import { grid as gridStyle, } from '../style/golble-Style';
export default ({ children }) => (
    <View style={gridStyle.ScreenContainer}>
        <Text>{children}</Text>
    </View>
);