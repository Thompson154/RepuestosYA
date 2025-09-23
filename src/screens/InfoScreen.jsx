import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function InfoScreen() {
  const [searchText, setSearchText] = useState("");
  const marcas = ["Monroe", "KYB", "Bissen", "Gabriel", "Generico"];

  // 📞 Link directo a WhatsApp (ejemplo: +591 70000000)
  const openWhatsApp = () => {
    Linking.openURL("https://wa.me/59170000000?text=Hola%20quiero%20información%20del%20amortiguador");
  };

  // 🔎 Acción de búsqueda
  const handleSearch = () => {
    alert(`Buscando: ${searchText}`);
  };

  return (
    <View style={styles.container}>
      {/* 🔹 Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.iconButton}>
          <Icon name="search" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={openWhatsApp} style={styles.iconButtonWhatsApp}>
          <Icon name="whatsapp" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* 🔹 Contenido principal más abajo */}
      <View style={styles.content}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />

        <Text style={styles.title}>Nombre de la empresa</Text>

        <Text style={styles.subtitle}>Marcas con las que trabajamos</Text>

        <View style={styles.tags}>
          {marcas.map((marca, i) => (
            <TouchableOpacity
              key={i}
              style={styles.tagButton}
              onPress={() => alert(`Elegiste: ${marca}`)}
            >
              <Text style={styles.tagText}>{marca}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.desc}>
          Nosotros somos una tienda muy buena. Nuevos productos disponibles...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#", padding: 20 },

  // 🔹 Barra de búsqueda
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  iconButton: {
    backgroundColor: "#6D747C",
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,
  },
  iconButtonWhatsApp: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,
  },

  // 🔹 Contenido principal centrado más abajo
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,
  },
  logo: { width: 120, height: 120, marginBottom: 15 },
  title: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  subtitle: { fontSize: 16, fontWeight: "bold", marginTop: 20 },
  tags: { flexDirection: "row", flexWrap: "wrap", marginTop: 10, justifyContent: "center" },
  tagButton: {
    backgroundColor: "#6D747C",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 5,
  },
  tagText: { color: "#fff", fontWeight: "bold" },
  desc: { marginTop: 10, fontSize: 14, color: "#333", textAlign: "center" },
});
