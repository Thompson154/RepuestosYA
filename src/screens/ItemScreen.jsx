import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function FrenosScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Frenos</Text>
        <View style={styles.icons}>
          <Icon name="search" size={20} style={styles.icon} />
          <Icon name="shopping-cart" size={20} style={styles.icon} />
        </View>
      </View>

      {/* Productos */}
      <View style={styles.grid}>
        {["Tambor", "Disco", "Tambor", "Disco"].map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Image source={{ uri: "https://via.placeholder.com/100" }} style={styles.img} />
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#DCE6EE", padding: 15 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold" },
  icons: { flexDirection: "row" },
  icon: { marginLeft: 15 },
  grid: { flexDirection: "row", flexWrap: "wrap", marginTop: 20 },
  card: {
    width: "45%",
    margin: "2.5%",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  img: { width: 80, height: 80, marginBottom: 10 },
});
