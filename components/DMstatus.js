// DMStatus.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ionicons 추가
import { useNavigation } from '@react-navigation/native'; // useNavigation 추가

const DMStatus = () => {
  const navigation = useNavigation(); // navigation 객체 생성

  const [users, setUsers] = useState([
    { id: '1', username: 'user1' },
    { id: '2', username: 'user2' },
    { id: '3', username: 'user3' },
    { id: '4', username: 'user4' },
    { id: '5', username: 'user5' },
  ]);

  const goToChat = (username) => {
    navigation.navigate('DirectMessage', { username: username });
  };

  return (
    <View style={styles.container}>
      {/* 사용자 목록 */}
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.userItem} onPress={() => goToChat(item.username)}>
            <Ionicons name="person-circle-outline" size={40} color="white" style={styles.profileIcon} />
            <Text style={styles.username}>{item.username}</Text>
            {/* 카메라 아이콘 */}
            <TouchableOpacity style={styles.cameraIconContainer}>
              <Ionicons name="camera-outline" size={30} color="grey" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.userList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  userList: {
    flexGrow: 1,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  username: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: -150,
  },
  cameraIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

export default DMStatus;
