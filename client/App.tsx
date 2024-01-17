import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabScreen from './src/components/BottomTabScreen';
import HomePage from './src/pages/HomePage';
import NewStickers from './src/pages/NewStickers';
import StayAtHome from './src/pages/StayatHome';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NewsFeed from './src/pages/NewsFeed';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeStackScreen} />
          <Stack.Screen options={{ headerShown: false }} name="NewS" component={NewStickers} />
          <Stack.Screen options={{ headerShown: false }} name="StayAt" component={StayAtHome} />
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
          <Stack.Screen options={{ headerShown: false }} name="NewsFeed" component={NewsFeed} />
        </Stack.Navigator>
        <BottomTabScreen />
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={{ headerShown: false }} name="Home" component={HomePage} />
    </HomeStack.Navigator>
  );
}

export default App;
