import React, { useState, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import TobbarScreen from '../components/TopBarScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { faShare } from '@fortawesome/free-solid-svg-icons/faShare'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis'
import UploadDescripton from '../pages/UploadDescripton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import VideoPlayer from 'react-native-video-controls';
import Share from 'react-native-share';

export default function NewsFeed() {
  const [feedItems, setFeedItems] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);


  useEffect(() => {
    const loadFeedItems = async () => {
      try {
        const savedFeedItemsString = await AsyncStorage.getItem('newsFeedItems');
        const savedLikedPostsString = await AsyncStorage.getItem('likedPosts');
        const savedBookmarkedPostsString = await AsyncStorage.getItem('bookmarkedPosts');

        if (savedFeedItemsString) {
          const savedFeedItems = JSON.parse(savedFeedItemsString);
          setFeedItems(savedFeedItems);
        }

        if (savedLikedPostsString) {
          const savedLikedPosts = JSON.parse(savedLikedPostsString);
          setLikedPosts(savedLikedPosts);
        }

        if (savedBookmarkedPostsString) {
          const savedBookmarkedPosts = JSON.parse(savedBookmarkedPostsString);
          setBookmarkedPosts(savedBookmarkedPosts);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadFeedItems();
  }, []);

  const handleUpload = async ({ mediaPath, description }) => {
    try {
      const newItem = {
        mediaPath,
        description,
        likes: 0,
        shares: 0,
      };
      const updatedFeedItems = [...feedItems, newItem];
      setFeedItems(updatedFeedItems);
      await AsyncStorage.setItem('newsFeedItems', JSON.stringify(updatedFeedItems));
      Alert.alert('Success', 'Image and description saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleLike = async (index) => {
    const updatedFeedItems = [...feedItems];
    const post = updatedFeedItems[index];

    const isLiked = likedPosts.includes(index);

    if (isLiked) {
      post.likes -= 1;
      setLikedPosts(likedPosts.filter((item) => item !== index));
    } else {
      post.likes += 1;
      setLikedPosts([...likedPosts, index]);
    }

    setFeedItems(updatedFeedItems);

    await AsyncStorage.setItem('newsFeedItems', JSON.stringify(updatedFeedItems));
    await AsyncStorage.setItem('likedPosts', JSON.stringify(likedPosts));
  };

  const handleShare = async (item) => {
    try {
      const shareOptions = {
        title: 'Share via',
        message: item.description,
        url: item.mediaPath,
      };
      await Share.open(shareOptions);
    } catch (error) {
    }
  };


  return (
    <View style={styles.NewsFeedContainer}>
      <TobbarScreen title="NewsFeed" leftImage={require('../public/assets/image/left.png')} />
      <View style={styles.uploadSection}>
        <UploadDescripton onUpload={handleUpload} />
      </View>
      <ScrollView style={styles.NewsFeedSlider} >
        {feedItems.map((item, index) => (
          <View key={index} style={styles.CardView}>
            <View style={styles.ProfileViewContent}>
              <View style={styles.ProfileView}>
                <Image style={styles.ProfileImage} source={require('../public/assets/image/feedProfile.png')} />
                <Text style={styles.headingView}>MemeStar</Text>
              </View>
              <TouchableOpacity>
                <FontAwesomeIcon style={styles.ProfilIcon} icon={faEllipsis} size={26} />
              </TouchableOpacity>
            </View>
            {item.mediaPath && (
              <>
                {item.mediaPath.match(/\.(jpeg|jpg|gif|png)$/) ? (
                  <Image source={{ uri: item.mediaPath }} style={styles.imageBackground} />
                ) : (
                  <VideoPlayer source={{ uri: item.mediaPath }} style={styles.videoBackground} paused={true} />
                )}
              </>
            )}
            <View style={styles.ProfileViewContent}>
              <View style={styles.ProfileView}>
                <TouchableOpacity onPress={() => handleLike(index)}>
                  <FontAwesomeIcon
                    style={[styles.ProfilIcon, { color: likedPosts.includes(index) ? 'red' : 'black' }]}
                    icon={faHeart}
                    size={26}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleShare(item)}>
                  <FontAwesomeIcon style={styles.ProfilIcon} icon={faShare} size={26} />
                </TouchableOpacity>
                <FontAwesomeIcon style={styles.ProfilIcon} icon={faDownload} size={26} />
              </View>
              {/* <TouchableOpacity onPress={() => handleBookmark(index)}>
                  <FontAwesomeIcon
                    style={[styles.ProfilIcon, { color: bookmarkedPosts.includes(index) ? 'red' : 'black' }]}
                    icon={faBookmark}
                    size={26}
                  />
                </TouchableOpacity> */}
            </View>
            <View style={styles.LikeView}>
              <Text style={styles.LikeView} >{item.likes} Likes</Text>
              <Text style={styles.LikeView} >{item.description}</Text>
              <Text style={styles.LikeView} > </Text>

            </View>
          </View>
        ))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  NewsFeedContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  NewsFeedSlider: {
    flex: 1,
  },
  CardView: {
    backgroundColor: 'white',
    height: 'auto',
    width: '100%',
    paddingBottom: 20
  },
  ProfileViewContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  ProfileView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ProfileImage: {
    height: 30,
    width: 30,
    borderRadius: 100,
    marginRight: 10,
  },
  ProfilIcon: {
    marginRight: 10,
  },
  headingView: {
    color: 'black',
    fontWeight: '600'
  },
  imageBackground: {
    width: '100%',
    height: 550,
    resizeMode: 'cover',
  },
  videoBackground: {
    width: '100%',
    height: 550,
    resizeMode: 'cover',
  },
  LikeView: {
    color: 'black',
    marginLeft: 5,
    fontWeight: '600'
  }

});
