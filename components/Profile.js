import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Footer from './Footer';

const Profile = () => {
  // 가상의 사용자 데이터
  const user = {
    username: 'jeongmin',
    profileImage: require('../assets/profile.jpg'),
    followers: 1000,
    following: 500,
    userposts: 3,
    posts: [
      require('../assets/lilla.jpeg'),
      require('../assets/profile.jpg'),
      require('../assets/screenshot.png'),
    ],
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* 프로필 이미지와 사용자 이름 */}
      <View style={styles.userInfo}>
        <Image source={user.profileImage} style={styles.profileImage} />
        <Text style={styles.username}>{user.username}</Text>
      </View>
      {/* 팔로워와 팔로잉 수 */}
      <View style={styles.stats}>
        <Text style={styles.statsText}>{user.userposts} posts</Text>
        <Text style={styles.statsText}>{user.followers} followers</Text>
        <Text style={styles.statsText}>{user.following} following</Text>
      </View>
      {/* 사용자가 올린 게시물 목록 */}
      <View style={styles.posts}>
        {user.posts.map((post, index) => (
          <Image key={index} source={post} style={styles.post} />
        ))}
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    flexGrow: 1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  statsText: {
    color: 'white',
  },
  posts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 0,
  },
  post: {
    width: '33%',
    aspectRatio: 1,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Profile;
