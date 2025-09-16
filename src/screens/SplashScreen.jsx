import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // reemplazarr para que no vuelva atrás
    }, 5000); // 7 segundos

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://instagram.flpb3-1.fna.fbcdn.net/v/t51.2885-19/475409758_2588381571361911_2734696209997933826_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45ODYuYzIifQ&_nc_ht=instagram.flpb3-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QG6fVYT37xwssSE8Yy7lZckZtgYkMadf5CvvahNNKZzLa_g3TVcuAfNgbYpCPkXg3I&_nc_ohc=BszemIJVNaIQ7kNvwHYWnwZ&_nc_gid=NfMkqFhW39pRPZ06XwnUJg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfbWUIAZKDdz_0jKlJrNlY6lVD466boVnf7_KlM2hSet0w&oe=68CE54BB&_nc_sid=8b3546' }}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D747C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
