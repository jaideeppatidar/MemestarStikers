import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TopBarScreen from '../components/TopBarScreen';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../Routes/NavigationConstants';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch(process.env.YOUR_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        if (errorData.error === 'INVALID_EMAIL') {
          setError('Invalid email. Please check your email and try again.');
        } else if (errorData.error === 'INVALID_PASSWORD') {
          setError('Invalid password. Please check your password and try again.');
        } else {
          setError('Authentication failed. Please try again later.');
        }
        return;
      }

      const userData = await response.json();

      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      navigation.navigate(ROUTES.HOME);
    } catch (error) {
      console.error('Error during login:', error);
      console.error('Authentication failed. Please try again later.');
    }
  };


  const leftPress = () => {
    navigation.navigate(ROUTES.HOME);
  };

  return (
    <View style={styles.container}>
      <TopBarScreen title="Login" onLeftPress={leftPress} leftImage={require('../public/assets/image/rightIcon.png')} />
      <View style={styles.loginView}>
        <View>
          <Image style={styles.logoIcon} source={require('../public/assets/image/starIcon.png')} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loginView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  logoIcon: {
    width: 100,
    height: 100,
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 8,
    borderColor: '#2EABAB',
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    backgroundColor: '#2EABAB',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 45,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;