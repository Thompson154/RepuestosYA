import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProfileScreen({ navigation }) {
      const userData = {
    name: 'Ruestos San Pedro',
    email: 'repuestos@email.com',
    phone: '64597253',
  }; 

  return (
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
        <TouchableOpacity style={styles.button}>
          <Icon name="info-circle" size={18} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Información</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon name="edit" size={18} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.logoutButton]}
          onPress={() => navigation.replace("Login")} // 🚪 vuelve al login
        >
          <Icon name="sign-out" size={18} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      </View>
      );
      }
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4C4',
    alignItems: 'center',
    padding: 40,
  },
  avatarContainer: {
    marginTop: 90,
    position: 'relative',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#6D747C',
  },
  editIcon: {
    position: 'absolute',
    bottom: 7,
    right: 5,
    backgroundColor: '#9A0C1A',
    padding: 6,
    borderRadius: 20,
  }, 
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#6D747C',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6D747C',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  phone: {
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6D747C',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
  },
  logoutButton: {
    backgroundColor: '#9A0C1A',
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