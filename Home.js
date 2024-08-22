import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.overlay}>
      <Text style={styles.title}>FixPro-Mate</Text>
      <Text style={styles.subtitle}>Home</Text>

      <View style={styles.row}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.navigate('Painter')}>
            <Image source={require('../assets/painter.png')} style={styles.image} />
            <Text style={styles.text}>Painter</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.navigate('Carpenter')}>
            <Image source={require('../assets/carpenter.png')} style={styles.image} />
            <Text style={styles.text}>Carpenter</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.navigate('Plumber')}>
            <Image source={require('../assets/plumber.png')} style={styles.image} />
            <Text style={styles.text}>Plumber</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.navigate('Electrician')}>
            <Image source={require('../assets/electrician.png')} style={styles.image} />
            <Text style={styles.text}>Electrician</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contactContainer}>
        <Ionicons name="call" size={24} color="black" style={styles.icon} />
        <Text style={styles.contactText}>8999029125</Text>
      </View>

      <View style={styles.contactContainer}>
        <MaterialIcons name="email" size={24} color="black" style={styles.icon} />
        <Text style={styles.contactText}>example@email.com</Text>
      </View>
    </View>
  );
}





const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: '#deb887', // Dark overlay for better text readability
    alignItems: 'center',
    paddingTop: 40,
    margin:10,
    borderRadius:20,
    
  },
  title: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
  },
  box: {
    width: 170,
    height: 180,
    backgroundColor: '#ffffffaa', // Semi-transparent background
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 15,
    borderColor: '#fff',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    padding: 10,
  },
  text: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  icon: {
    marginRight: 10,
  },
  contactText: {
    fontSize: 18,
    color: 'black',
  },
});