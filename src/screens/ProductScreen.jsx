import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const productsAvailable = [
  { id: '1', store: 'Tienda 1', brands: ['Monroe','KYB','Bilstein'], stock: 5, price: '50 Bs', rating: 5 },
  { id: '2', store: 'Tienda 1', brands: ['Monroe','KYB','Bilstein'], stock: 5, price: '50 Bs', rating: 5 },
  { id: '3', store: 'Tienda 1', brands: ['Monroe','KYB','Bilstein'], stock: 5, price: '50 Bs', rating: 5 },
];

const productsComingSoon = [
  { id: '4', store: 'Tienda 1', brands: ['Monroe','KYB','Bilstein'], stock: '-', price: 'Sin Precio', rating: 5, days: 5 },
];

export default function ProductsScreen() {
  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <View style={styles.logo}><Text>LOGO</Text></View>
      <View style={styles.info}>
        <Text style={styles.storeName}>{item.store}</Text>
        <Text style={styles.brands}>Marcas: {item.brands.join(', ')}</Text>
        <Text style={styles.stock}>Stock: {item.stock}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.rating}>Calificación: {item.rating}/5</Text>
        {item.days && <Text style={styles.days}>{item.days} días</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Disponibles en:</Text>
        <FlatList
          data={productsAvailable}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
        <Text style={styles.sectionTitle}>Muy pronto en:</Text>
        <FlatList
          data={productsComingSoon}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#E5EFF5',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30, // ↑ Aumentamos el espacio superior para que no choque con la cámara
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 8,
    padding: 12,
    borderRadius: 10,
    elevation: 2,
  },
  logo: {
    width: 60,
    height: 60,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  storeName: { fontWeight: 'bold', fontSize: 16 },
  brands: { fontSize: 14, color: '#555' },
  stock: { fontSize: 14, color: '#555' },
  price: { fontSize: 14, color: '#000', marginTop: 3 },
  rating: { fontSize: 14, color: '#FFA500' },
  days: { fontSize: 12, color: '#999' },
});