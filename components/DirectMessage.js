import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DirectMessage = ({ route }) => {
  const { username } = route.params;
  const navigation = useNavigation();
  const [message, setMessage] = useState(''); // 메시지 상태 추가
  const [messages, setMessages] = useState([]); // 메시지 목록 상태 추가
  const flatListRef = useRef(null); // FlatList를 위한 ref 추가

  const goBack = () => {
    navigation.goBack();
  };

  const sendMessage = () => {
    if (message.trim() === '') return; // 빈 메시지는 전송하지 않음

    // 메시지 목록에 새로운 메시지 추가
    setMessages([...messages, { id: messages.length.toString(), text: message }]);
    setMessage(''); // 메시지 전송 후 입력 창 비우기

    // 메시지 전송 후 화면을 최하단으로 스크롤
    setTimeout(() => {
      flatListRef.current.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <DMheader username={username} goBack={goBack} />
      {/* 채팅 내용 */}
      <View style={styles.chatContainer}>
        {/* 메시지 목록 */}
        <FlatList
          ref={flatListRef} // ref 연결
          data={messages.reverse()} // 역순으로 출력
          renderItem={({ item }) => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={[styles.messageContainer, styles.myMessageContainer]}>
                <Text style={[styles.messageText, styles.myMessageText]}>{item.text}</Text>
              </View>
            </ScrollView>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messageList}
          inverted={true} // 역순 출력
          onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })} // 콘텐츠 크기가 변경될 때 스크롤 이동
        />
      </View>
      {/* 메시지 입력창과 전송 버튼 */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="메시지를 입력하세요..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DMheader = ({ username, goBack }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name="arrow-back" size={27} color="white" style={styles.backButton} />
      </TouchableOpacity>
      <View style={styles.userInfo}>
        <Ionicons name="person-circle-outline" size={40} color="white" style={styles.profileIcon} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Ionicons name="camera-outline" size={30} color="grey" style={styles.cameraIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  backButton: {
    marginRight: 15,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    marginRight: 10,
  },
  username: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  cameraIcon: {
    marginLeft: 15,
  },
  chatContainer: {
    flex: 1,
    marginBottom:10,
  },
  messageList: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  messageContainer: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginLeft: 10, // 왼쪽 마진을 유지하고 우측 정렬
    alignSelf: 'flex-end', // 우측 정렬
  },
  myMessageContainer: {
    alignSelf: 'flex-end', // 오른쪽 정렬
  },
  messageText: {
    color: 'white',
  },
  myMessageText: {
    alignSelf: 'flex-end', // 오른쪽 정렬
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 10,
    backgroundColor: 'black',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    color: 'white',
  },
  sendButton: {
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 10,
  },
});

export default DirectMessage;
