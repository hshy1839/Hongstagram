import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const goToDM = () => {
    navigation.navigate('DirectMessage');
  };
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Hongstagram</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="notifications-outline" size={27} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={goToDM}>
          <Ionicons name="paper-plane-outline" size={27} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 28,
    marginTop: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 25,
  },
  icon: {
    marginRight: 15,
  },
});

export default Header;
