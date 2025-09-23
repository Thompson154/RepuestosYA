import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function InventoryScreen() {
  const inventory = [
    { id: "1", product: "Producto 1", qty: 5, price: 65, category: "Frenos" },
    { id: "2", product: "Producto 2", qty: 3, price: 55, category: "Frenos" }
  ];

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Header con search */}
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <Icon name="search" size={18} color="#6D747C" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar producto..."
              placeholderTextColor="#6D747C"
            />
          </View>
        </View>

        {/* Inventario */}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#E5EFF5', // Fondo azul claro similar a productos/home
  },
  container: {
    flex: 1, 
    paddingHorizontal: 20, 
    paddingTop: 20, // Ajuste para notch/cámara iPhone
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF', // Blanco para el search box
    flex: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#333333',
  },
  title: {
    fontSize: 28, 
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#7E1C13', // Guindo para título
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#7E1C13', // Guindo para línea de header
    paddingBottom: 5,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#7E1C13', // Guindo para texto de header
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    backgroundColor: '#FFFFFF', // blanco para las filas
    padding: 10,
    borderRadius: 8,
  },
  text: {
    color: '#333333', // Gris oscuro para texto normal
  },
  price: {
    color: '#D72631', // Rojo para precio/acento
    fontWeight: 'bold',
  }
});