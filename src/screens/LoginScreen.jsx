import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <Image
        source={{ uri: 'https://instagram.flpb3-1.fna.fbcdn.net/v/t51.2885-19/475409758_2588381571361911_2734696209997933826_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45ODYuYzIifQ&_nc_ht=instagram.flpb3-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QG6fVYT37xwssSE8Yy7lZckZtgYkMadf5CvvahNNKZzLa_g3TVcuAfNgbYpCPkXg3I&_nc_ohc=BszemIJVNaIQ7kNvwHYWnwZ&_nc_gid=NfMkqFhW39pRPZ06XwnUJg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfbWUIAZKDdz_0jKlJrNlY6lVD466boVnf7_KlM2hSet0w&oe=68CE54BB&_nc_sid=8b3546' }}
        style={styles.logo}
      />

      {/* Username */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#fff" style={styles.icon} />
        <TextInput placeholder="Username/Gmail" placeholderTextColor="#fff" style={styles.input} />
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#fff" style={styles.icon} />
        <TextInput placeholder="********" placeholderTextColor="#fff" secureTextEntry style={styles.input} />
      </View>

      {/* Botón de login */}
      <TouchableOpacity 
        style={styles.loginButton}
        onPress={() => navigation.replace("Store")}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Google & Facebook */}
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="google" size={20} color="#47667B" style={styles.icon} />
        <Text style={styles.socialText}>Sign In With Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Icon name="facebook" size={20} color="#47667B" style={styles.icon} />
        <Text style={styles.socialText}>Sign In With Facebook</Text>
      </TouchableOpacity>

      {/* Ir a Register */}
      <Text style={styles.footerText}>
        New User?{' '}
        <Text style={styles.signUpText} onPress={() => navigation.navigate('SelectAccount')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4C4', // Fondo crema
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#47667B', // Azul oscuro
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 25,
    resizeMode: 'contain',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#47667B', // Azul para inputs
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '85%',
    height: 45,
  },
  icon: {
    marginRight: 10,
    color: '#fff',
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#7E1C13', // Rojo oscuro
    borderRadius: 12,
    paddingVertical: 12,
    width: '85%',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#47667B',
  },
  socialText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#47667B',
    fontWeight: '600',
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#47667B',
  },
  signUpText: {
    color: '#7E1C13',
    fontWeight: 'bold',
  },
});
