import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SelectAccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona tu{'\n'}tipo de cuenta</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Register')}
      >
        <Icon name="user" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>User / Cliente</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Store')}
      >
        <Icon name="store" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Store</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EFF5', // azul claro como HomeScreen
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: '500',
    color: '#7E1C13', // guindo para título
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#7E1C13', // guindo como botones Home/Login
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  icon: {
    marginRight: 10,
    color: '#fff',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
