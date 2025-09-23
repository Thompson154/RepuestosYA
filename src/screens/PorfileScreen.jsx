import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProfileScreen({ navigation }) {
  const userData = {
    name: 'Ruestos San Pedro',
    email: 'repuestos@email.com',
    phone: '64597253',
  }; 

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Imagen de perfil */}
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="camera" size={18} color="#fff" />
          </TouchableOpacity>
        </View> 
        
        {/* Datos */}
        <Text style={styles.name}>{userData.name}</Text>
        <Text style={styles.email}>{userData.email}</Text>
        <Text style={styles.phone}>{userData.phone}</Text>

        {/* Botones */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("InfoScreen")}
          >
            <Icon name="info-circle" size={18} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>Información</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="edit" size={18} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.logoutButton]}
            onPress={() => navigation.replace("Login")}
          >
            <Icon name="sign-out" size={18} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#E5EFF5', // Fondo azul claro
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 25,
  },
  avatarContainer: {
    marginTop: 30,
    position: 'relative',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#7E1C13', // Guindo borde avatar
  },
  editIcon: {
    position: 'absolute',
    bottom: 7,
    right: 5,
    backgroundColor: '#D72631', // Rojo para icono editar cámara
    padding: 6,
    borderRadius: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7E1C13', // Guindo
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: '#333333',
    marginTop: 5,
  },
  phone: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7E1C13', // Guindo
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    justifyContent: 'center',
  },
  logoutButton: {
    backgroundColor: '#7E1C13', // Guindo también
    borderWidth: 1,
    borderColor: '#D72631',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 5,
  },
});