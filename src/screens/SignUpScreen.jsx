import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{
          uri: 'https://instagram.flpb3-1.fna.fbcdn.net/v/t51.2885-19/475409758_2588381571361911_2734696209997933826_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45ODYuYzIifQ&_nc_ht=instagram.flpb3-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QG6fVYT37xwssSE8Yy7lZckZtgYkMadf5CvvahNNKZzLa_g3TVcuAfNgbYpCPkXg3I&_nc_ohc=BszemIJVNaIQ7kNvwHYWnwZ&_nc_gid=NfMkqFhW39pRPZ06XwnUJg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfbWUIAZKDdz_0jKlJrNlY6lVD466boVnf7_KlM2hSet0w&oe=68CE54BB&_nc_sid=8b3546'
        }}
        style={styles.logo}
      />

      <Text style={styles.title}>Register</Text>

      {/* Username/Gmail */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#f8f8ff" style={styles.icon} />
        <TextInput placeholder="Username/Gmail" style={styles.input} />
      </View>

      {/* Numero de Celular */}
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#f8f8ff" style={styles.icon} />
        <TextInput placeholder="Número de Celular" keyboardType="phone-pad" style={styles.input} />
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#f8f8ff" style={styles.icon} />
        <TextInput placeholder="**********" secureTextEntry style={styles.input} />
      </View>

      {/* 🔴 Botón Registrarse (más grande) */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>Registrarse</Text>
      </TouchableOpacity>

      {/* Sign In with Google */}
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="google" size={20} color="#000" style={styles.icon} />
        <Text style={styles.socialText}>Sign In With Google</Text>
      </TouchableOpacity>

      {/* Sign In with Facebook */}
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="facebook" size={20} color="#000" style={styles.icon} />
        <Text style={styles.socialText}>Sign In With Facebook</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Espera el código de confirmación vía sms</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0B1B5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6D747C',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '85%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#fff',
  },
  registerButton: {
    backgroundColor: '#9A0C1A',
    paddingVertical: 18, 
    borderRadius: 12, 
    width: '60%', // 🔥 más ancho
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  registerText: {
    color: '#fff',
    fontSize: 15, 
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  socialButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '55%',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  socialText: {
    marginLeft: 10,
    fontSize: 16,
  },
  footerText: {
    marginTop: 15,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});
