import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome </Text>

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
        onPress={() => navigation.replace("Store")} // ✅ abre el Tab Navigator
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Google & Facebook */}
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="google" size={20} color="##000" style={styles.icon} />
        <Text style={styles.socialText}>Sign In With Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Icon name="facebook" size={20} color="##000" style={styles.icon} />
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
    backgroundColor: '#B0B1B5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 33,
    marginBottom: 10,
    fontWeight: '600',
    color: '#9A0C1A'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
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
    color: '#fff'
  },
  input: {
    flex: 1,
    height: 40,
    color: '#fff'
  },
  loginButton: {
    backgroundColor: '#9A0C1A',
    borderRadius: 10,
    padding: 12,
    width: '85%',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '55%',
    alignItems: 'center',
    marginBottom: 10,
  },
  socialText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#6D747C'
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#6D747C'
  },
  signUpText: {
    color: '#9A0C1A',
    fontWeight: 'bold',
  },
});
