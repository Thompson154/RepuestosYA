import React, { useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
const IMAGE_WIDTH = 300;
const IMAGE_SPACING = 20;

export default function HomeScreen({ navigation }) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const carouselImages = [
    'https://www.shutterstock.com/image-vector/icon-logo-sign-art-sedan-260nw-2484157269.jpg',
    'https://resizer.iproimg.com/unsafe/1280x/filters:format(webp):quality(85):max_bytes(102400)/https://assets.iprofesional.com/assets/jpg/2024/03/569818.jpg',
    'https://toyotahonduras.com/asset/images/top/item_hilux_2021.jpg',
  ];

  const categories = [
    { id: 1, name: 'Frenos', img: 'https://static.retail.autofact.cl/blog/c_url_original.100bfn8kmqxhx1l.jpg', screen: 'FrenosScreen' },
    { id: 2, name: 'Aceite', img: 'https://www.shutterstock.com/image-photo/refueling-pouring-oil-quality-into-600nw-2515766215.jpg', screen: 'AceiteScreen' },
    { id: 3, name: 'Filtros', img: 'https://www.shutterstock.com/image-photo/auto-mechanic-holds-paper-oil-260nw-2578420327.jpg', screen: 'FiltrosScreen' },
    { id: 4, name: 'Luces', img: 'https://media.istockphoto.com/id/1125680359/es/vector/fondo-de-faros-de-coche-led-conducci%C3%B3n-moderna.jpg?s=612x612&w=0&k=20&c=Dfs_zypIEKDIYrFkpQSl94yMo8pxg_7n4BDHUoqNycU=', screen: 'LucesScreen' },
     { id: 5, name: 'Frenos', img: 'https://static.retail.autofact.cl/blog/c_url_original.100bfn8kmqxhx1l.jpg', screen: 'FrenosScreen' },
    { id: 6, name: 'Aceite', img: 'https://www.shutterstock.com/image-photo/refueling-pouring-oil-quality-into-600nw-2515766215.jpg', screen: 'AceiteScreen' },
    { id: 7, name: 'Filtros', img: 'https://www.shutterstock.com/image-photo/auto-mechanic-holds-paper-oil-260nw-2578420327.jpg', screen: 'FiltrosScreen' },
    { id: 8, name: 'Luces', img: 'https://media.istockphoto.com/id/1125680359/es/vector/fondo-de-faros-de-coche-led-conducci%C3%B3n-moderna.jpg?s=612x612&w=0&k=20&c=Dfs_zypIEKDIYrFkpQSl94yMo8pxg_7n4BDHUoqNycU=', screen: 'LucesScreen' },
  ];

  const offers = [
    { id: 1, name: 'Frenos -50%', img: 'https://static.retail.autofact.cl/blog/c_url_original.100bfn8kmqxhx1l.jpg', screen: 'OfertaFrenosScreen' },
    { id: 2, name: 'Aceite -30%', img: 'https://www.shutterstock.com/image-photo/refueling-pouring-oil-quality-into-600nw-2515766215.jpg', screen: 'OfertaAceiteScreen' },
     { id: 3, name: 'Frenos -50%', img: 'https://static.retail.autofact.cl/blog/c_url_original.100bfn8kmqxhx1l.jpg', screen: 'OfertaFrenosScreen' },
    { id: 4, name: 'Aceite -30%', img: 'https://www.shutterstock.com/image-photo/refueling-pouring-oil-quality-into-600nw-2515766215.jpg', screen: 'OfertaAceiteScreen' },
  ];


  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={18} color="#6D747C" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar producto..."
            placeholderTextColor="#6D747C"
          />
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <Icon name="shopping-cart" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Carrusel */}
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={IMAGE_WIDTH + IMAGE_SPACING}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: (width - IMAGE_WIDTH) / 2 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        style={styles.carousel}
      >
        {carouselImages.map((uri, index) => {
          const inputRange = [
            (index - 1) * (IMAGE_WIDTH + IMAGE_SPACING),
            index * (IMAGE_WIDTH + IMAGE_SPACING),
            (index + 1) * (IMAGE_WIDTH + IMAGE_SPACING),
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp',
          });

          return (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('DetalleProducto')}>
              <Animated.View
                style={{
                  transform: [{ scale }],
                  opacity,
                  marginRight: IMAGE_SPACING,
                }}
              >
                <Image source={{ uri }} style={styles.carouselImage} />
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </Animated.ScrollView>

      {/* Categorías */}
      <Text style={styles.sectionTitle}>Categoría</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(cat => (
          <TouchableOpacity key={cat.id} onPress={() => navigation.navigate(cat.screen)}>
            <View style={styles.categoryCard}>
              <Image source={{ uri: cat.img }} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{cat.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Ofertas */}
      <Text style={styles.sectionTitle}>Ofertas</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {offers.map(oferta => (
          <TouchableOpacity key={oferta.id} onPress={() => navigation.navigate(oferta.screen)}>
            <View style={styles.offerCard}>
              <Image source={{ uri: oferta.img }} style={styles.offerImage} />
              <Text style={styles.offerText}>{oferta.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, backgroundColor: '#B0B1B5' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, paddingHorizontal: 20 },
  searchContainer: {
    flexDirection: 'row', backgroundColor: '#fff', flex: 1, borderRadius: 10,
    paddingHorizontal: 10, alignItems: 'center', marginRight: 10
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, height: 40, color: '#333' },
  cartButton: { backgroundColor: '#9A0C1A', padding: 10, borderRadius: 10 },
  carousel: { marginBottom: 30 },
  carouselImage: { width: IMAGE_WIDTH, height: 150, borderRadius: 20 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, marginLeft: 20, color: '#6D747C' },
  categoryCard: { alignItems: 'center', marginRight: 15, marginLeft: 10 },
  categoryImage: { width: 80, height: 80, borderRadius: 10 },
  categoryText: { marginTop: 5, color: '#6D747C' },
  offerCard: { alignItems: 'center', marginRight: 15, marginLeft: 10 },
  offerImage: { width: 120, height: 120, borderRadius: 10 },
  offerText: { marginTop: 5, color: '#9A0C1A', fontWeight: 'bold' },
});
