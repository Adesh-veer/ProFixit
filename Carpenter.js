

import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const painters = [
  { id: '3', name: 'Av', rating: 4.2, fee: '₹500', image: 'https://via.placeholder.com/50' },
  { id: '4', name: 'Raju', rating: 4.0, fee: '₹700', image: 'https://via.placeholder.com/50' },
  { id: '5', name: 'Ramesh', rating: 4.1, fee: '₹500', image: 'https://via.placeholder.com/50' },
  { id: '6', name: 'Anuj', rating: 4.8, fee: '₹800', image: 'https://via.placeholder.com/50' },
  { id: '7', name: 'Pratham', rating: 4.9, fee: '₹900', image: 'https://via.placeholder.com/50' },
  { id: '8', name: 'Ankit', rating: 4.6, fee: '₹1000', image: 'https://via.placeholder.com/50' },
  { id: '9', name: 'Adesh', rating: 4.3, fee: '₹1500', image: 'https://via.placeholder.com/50' },
  { id: '10', name: 'Aditya', rating: 4.2, fee: '₹500', image: 'https://via.placeholder.com/50' },
  { id: '11', name: 'Abhishek', rating: 4.4, fee: '₹500', image: 'https://via.placeholder.com/50' },
  { id: '12', name: 'Rai', rating: 4.7, fee: '₹1500', image: 'https://via.placeholder.com/50' },
  { id: '13', name: 'Ankush', rating: 4.0, fee: '₹500', image: 'https://via.placeholder.com/50' },
  { id: '14', name: 'Rahul', rating: 4.1, fee: '₹500', image: 'https://via.placeholder.com/50' },
  { id: '15', name: 'More', rating: 4.3, fee: '₹300', image: 'https://via.placeholder.com/50' },
  { id: '16', name: 'Ayush', rating: 4.5, fee: '₹1000', image: 'https://via.placeholder.com/50' },
  { id: '17', name: 'Ashwine', rating: 4.8, fee: '₹1000', image: 'https://via.placeholder.com/50' },
];

export default function Carpenter() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={{ uri: item.image }} style={styles.painterImage} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.rating}>Rating: {item.rating}</Text>
          <Text style={styles.fee}>Fee: {item.fee}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://w7.pngwing.com/pngs/902/683/png-transparent-carpenter-cartoon-animation-building-hand-stock-photography-thumbnail.png' }}
          style={styles.icon}
        />
        <Text style={styles.headerText}>Carpenter At Your Service</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={painters}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  painterImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 16,
    color: '#888',
  },
  fee: {
    fontSize: 16,
    color: '#333',
  },
});

