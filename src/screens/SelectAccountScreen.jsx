import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SelectAccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona tu{'\n'}tipo de cuenta</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Icon name="user" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>User / Cliente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="store" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Store</Text>
      </TouchableOpacity>
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
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: '500',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#6D747C',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
