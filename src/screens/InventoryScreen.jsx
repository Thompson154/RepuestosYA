import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function InventoryScreen() {
  const inventory = [
    { id: "1", product: "Producto 1", qty: 5, price: 65, category: "Frenos" },
    { id: "2", product: "Producto 2", qty: 3, price: 55, category: "Frenos" }
  ];

  return (
    <View style={styles.container}>
      {/* 🔹 Header con Search y Carrito */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={18} color="#6D747C" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar producto..."
            placeholderTextColor="#6D747C"
          />
        </View>

        <TouchableOpacity style={styles.cartButton}>
          <Icon name="shopping-cart" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* 🔹 Inventario */}
      <Text style={styles.title}>Tu Inventario</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Producto</Text>
        <Text style={styles.headerText}>Cantidad</Text>
        <Text style={styles.headerText}>Precio</Text>
        <Text style={styles.headerText}>Categoría</Text>
      </View>
      {inventory.map(item => (
        <View key={item.id} style={styles.row}>
          <Text style={styles.text}>{item.product}</Text>
          <Text style={styles.text}>{item.qty}</Text>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.text}>{item.category}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 25, 
    paddingTop: 50, // ↑ más espacio arriba
    backgroundColor: '#B0B1B5'
  },
  // 🔹 Header con search y carrito
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25, // ↓ menos espacio que antes
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  cartButton: {
    backgroundColor: '#9A0C1A',
    padding: 10,
    borderRadius: 10,
  },
  // 🔹 Estilos originales de la tabla
  title: {
    fontSize: 30, 
    fontWeight: 'bold',
    marginBottom: 20, // ↓ menos espacio que antes
    color: '#6D747C'
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#6D747C',
    paddingBottom: 5
  },
  headerText: {
    fontWeight: 'bold',
    color: '#6D747C'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 6
  },
  text: {
    color: '#6D747C'
  },
  price: {
    color: '#9A0C1A',
    fontWeight: 'bold'
  }
});
