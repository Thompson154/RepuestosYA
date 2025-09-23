import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function FavoritesScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("Tiendas");

  const tiendas = [
    { id: "1", logo: "https://via.placeholder.com/60", name: "Tienda 1", marcas: ["Kito", "Brembo", "Ferodo"] },
    { id: "2", logo: "https://via.placeholder.com/60", name: "Tienda 2", marcas: ["Valeo", "Sachs"] },
  ];

  const productos = [
    { id: "1", image: "https://via.placeholder.com/100", name: "Tambor" },
    { id: "2", image: "https://via.placeholder.com/100", name: "Disco" },
    { id: "3", image: "https://via.placeholder.com/100", name: "Tambor" },
    { id: "4", image: "https://via.placeholder.com/100", name: "Disco" },
  ];

  const goToTienda = (tienda) => {
    console.log("Ir a tienda:", tienda.name);
  };

  const goToMarca = (marca) => {
    console.log("Ver productos de:", marca);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 🔹 Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Favoritos</Text>
        </View>

        {/* 🔹 Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === "Tiendas" && styles.activeTab]}
            onPress={() => setSelectedTab("Tiendas")}
          >
            <Text style={[styles.tabText, selectedTab === "Tiendas" && styles.activeText]}>
              Tiendas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === "Productos" && styles.activeTab]}
            onPress={() => setSelectedTab("Productos")}
          >
            <Text style={[styles.tabText, selectedTab === "Productos" && styles.activeText]}>
              Productos
            </Text>
          </TouchableOpacity>
        </View>

        {/* 🔹 Lista dinámica */}
        {selectedTab === "Tiendas" ? (
          <FlatList
            data={tiendas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.tiendaCard} onPress={() => goToTienda(item)}>
                <Image source={{ uri: item.logo }} style={styles.logo} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.tiendaName}>{item.name}</Text>
                  <View style={styles.marcasRow}>
                    {item.marcas.map((marca, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.marcaChip}
                        onPress={() => goToMarca(marca)}
                      >
                        <Text style={styles.marcaText}>{marca}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <FlatList
            data={productos}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => (
              <View style={styles.productCard}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <TouchableOpacity style={styles.bookmarkBtn}>
                  <Icon name="bookmark-outline" size={20} color="#9A0C1A" />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#DCE6EE", // 🔹 asegura que el notch tenga color de fondo
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15, // 🔹 baja todo el contenido
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: { fontSize: 22, fontWeight: "bold", color: "#333" },
  tabs: { flexDirection: "row", marginBottom: 15 },
  tab: { flex: 1, paddingVertical: 8, marginHorizontal: 5, borderRadius: 20, backgroundColor: "#eee", alignItems: "center" },
  activeTab: { backgroundColor: "#9A0C1A" },
  tabText: { fontSize: 14, color: "#555" },
  activeText: { color: "#fff", fontWeight: "bold" },

  // 🔹 Tiendas
  tiendaCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  logo: { width: 60, height: 60, borderRadius: 8, marginRight: 12, backgroundColor: "#ccc" },
  tiendaName: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  marcasRow: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  marcaChip: {
    backgroundColor: "#eee",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 5,
    marginBottom: 5,
  },
  marcaText: { fontSize: 12, color: "#333" },

  // 🔹 Productos
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
    position: "relative",
  },
  productImage: { width: 80, height: 80, marginBottom: 8, borderRadius: 10 },
  productName: { fontSize: 14, fontWeight: "600", color: "#333" },
  bookmarkBtn: { position: "absolute", top: 8, right: 8 },
});
