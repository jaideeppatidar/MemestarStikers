import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Video from 'react-native-video';

const ImageAndDescriptionInput = ({ onUpload }) => {
  const [mediaPath, setMediaPath] = useState('');
  const [description, setDescription] = useState('');

  const handleMediaUpload = () => {
    const options = {
      title: 'Select Media',
      mediaType: 'mixed',
      storageOptions: {
        skipBackup: true,
        path: 'Media',
      },
    };
    launchImageLibrary(options, (response) => {
      if (!response.didCancel && !response.error) {
        const source = { uri: response.assets[0].uri };
        setMediaPath(source.uri);
      }
    });
  };

  const handleDescriptionSubmit = () => {
    if (!mediaPath) {
      alert('Please upload media before submitting.');
      return;
    }
    if (!description) {
      alert('Please enter a description before submitting.');
      return;
    }
    if (onUpload) {
      onUpload({ mediaPath, description });
    }
    setMediaPath('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMediaUpload}>
        <Text style={styles.ButtonUpload}>Upload Media</Text>
      </TouchableOpacity>

      {mediaPath && (
        <>
          {mediaPath.endsWith('.png') ||
            mediaPath.endsWith('.svg') ||
            mediaPath.endsWith('.jpg') ||
            mediaPath.endsWith('.jpeg') ? (
            <Image source={{ uri: mediaPath }} style={styles.uploadedMedia} />
          ) : (
            <Video
              resizeMode="cover"
              source={{ uri: mediaPath }}
              style={styles.uploadedMedia}
              controls={true}
            />
          )}
        </>
      )}
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        onChangeText={(text) => setDescription(text)}
        value={description}
      />
      <Button title="Submit" onPress={handleDescriptionSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  uploadedMedia: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    margin: 10,
  },
  ButtonUpload: {
    alignSelf: 'center',
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default ImageAndDescriptionInput;
