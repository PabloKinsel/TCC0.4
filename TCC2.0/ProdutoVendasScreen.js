import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useProductContext } from './ProductContext';
import { useNavigation } from '@react-navigation/native';

// import { useEffect } from 'react';

function ProdutoVendasScreen() {
  const { products } = useProductContext(); // Use o contexto aqui
  const navigation = useNavigation();


  const handleProductPress = (item) => {
    navigation.navigate('FinalizarVenda', { product: item }); 
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products.filter(product => !product._deleted)} // Filtra os produtos não excluídos
        keyExtractor={(item) => item.id}
        key={products.length}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductPress(item)}>
            <View style={styles.productItem}>
              <Text>{item.name}</Text>
              <Text>Preço: R$ {item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
        }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default ProdutoVendasScreen;