// Footer.js

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'; // useRoute 추가

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute(); // 현재 라우트 정보 가져오기

  const goToProfile = () => {
    navigation.navigate('Profile');
  };
  const goToMain = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={[styles.footer, styles.fixedFooter]}>
      <TouchableOpacity style={styles.menuItem} onPress={goToMain}>
        {route.name === 'Main' ? (
          <Ionicons name="home" size={27} color="white" />
        ) : (
          <Ionicons name="home-outline" size={27} color="white" />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="search" size={27} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="add-circle-outline" size={27} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="heart-outline" size={27} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={goToProfile}>
        {route.name === 'Profile' ? (
          <Ionicons name="person" size={27} color="white" />
        ) : (
          <Ionicons name="person-outline" size={27} color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
  },
  fixedFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  menuItem: {
    alignItems: 'center',
  },
});

export default Footer;
