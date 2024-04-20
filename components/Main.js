import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from './Header';
import Footer from './Footer';

// 포스트 컴포넌트
const Post = ({ imageSource, postText, username }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <View style={styles.post}>
      {/* 프로필 아이콘과 username */}
      <View style={styles.userInfo}>
        <Ionicons name="person-circle-outline" size={30} color="white" />
        <Text style={styles.username}>{username}</Text>
      </View>
      {/* 포스트 이미지 */}
      <Image
        source={imageSource} // 포스트 이미지 경로
        style={styles.postImage}
      />
      {/* 기능 버튼 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleLike}>
          <Ionicons name={liked ? "heart" : "heart-outline"} size={27} color={liked ? "red" : "white"} />
          <Text style={styles.buttonText}>{likeCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="chatbubble-outline" size={27} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="share-social-outline" size={27} color="white" />
        </TouchableOpacity>
      </View>
      {/* 포스트 내용 */}
      <Text style={styles.postText}>
        {postText}
      </Text>
    </View>
  );
};

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Posts */}
      <ScrollView style={styles.content}>
        {/* 포스트 1 */}
        <Post imageSource={require('../assets/lilla.jpeg')} postText="고릴라1 2사진임 ㅋㅋ" username="lilla_05" />
        {/* 포스트 2 */}
        <Post imageSource={require('../assets/profile.jpg')} postText="내 사진임 ㅋㅋㅋ" username="seokhyung98" />
        <Post imageSource={require('../assets/screenshot.png')} postText="스샷 1" username=".__.98.4.3" />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 25,
  },
  icon: {
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  post: {
    paddingBottom: 15,
    marginBottom: 15,
  },
  postImage: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  buttonContainer: {
    marginLeft: 8,
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  postText: {
    paddingHorizontal: 15,
    color: 'white',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  username: {
    fontSize: 15,
    color: '#ccc',
    marginLeft: 10,
  },
});

export default Main;
