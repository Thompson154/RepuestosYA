import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RegisterScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <View style={styles.topSection}>
        <Image
          source={{
            uri: 'https://instagram.flpb3-1.fna.fbcdn.net/v/t51.2885-19/475409758_2588381571361911_2734696209997933826_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45ODYuYzIifQ&_nc_ht=instagram.flpb3-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QG6fVYT37xwssSE8Yy7lZckZtgYkMadf5CvvahNNKZzLa_g3TVcuAfNgbYpCPkXg3I&_nc_ohc=BszemIJVNaIQ7kNvwHYWnwZ&_nc_gid=NfMkqFhW39pRPZ06XwnUJg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfbWUIAZKDdz_0jKlJrNlY6lVD466boVnf7_KlM2hSet0w&oe=68CE54BB&_nc_sid=8b3546'
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>Register</Text>
      </View>

      {/* Username/Gmail */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#7E1C13" style={styles.icon} />
        <TextInput placeholder="Username/Gmail" placeholderTextColor="#7E1C13" style={styles.input} />
      </View>

      {/* Número de Celular */}
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#7E1C13" style={styles.icon} />
        <TextInput placeholder="Número de Celular" keyboardType="phone-pad" placeholderTextColor="#7E1C13" style={styles.input} />
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#7E1C13" style={styles.icon} />
        <TextInput placeholder="**********" secureTextEntry placeholderTextColor="#7E1C13" style={styles.input} />
      </View>

      {/* Botón Registrarse */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>Registrarse</Text>
      </TouchableOpacity>

      {/* Sign In with Google */}
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="google" size={20} color="#7E1C13" style={styles.icon} />
        <Text style={styles.socialText}>Sign In With Google</Text>
      </TouchableOpacity>

      {/* Sign In with Facebook */}
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="facebook" size={20} color="#7E1C13" style={styles.icon} />
        <Text style={styles.socialText}>Sign In With Facebook</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Espera el código de confirmación vía SMS</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E5EFF5', // azul claro
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
    backgroundColor: '#7E1C13', // guindo
    borderRadius: 25,
    width: '100%',
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // blanco como HomeScreen
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '85%',
    height: 45,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  registerButton: {
    backgroundColor: '#7E1C13', // guindo
    paddingVertical: 15,
    borderRadius: 12,
    width: '85%',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  registerText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialButton: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    width: '85%',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#7E1C13',
  },
  socialText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#7E1C13',
    fontWeight: '600',
  },
  footerText: {
    marginTop: 15,
    fontSize: 14,
    color: '#47667B', // azul oscuro
    textAlign: 'center',
  },
});
