import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useProductContext } from './ProductContext';


const ProdutosScreen = () => {
  const [newProduct, setNewProduct] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const { products, setProducts } = useProductContext(); // Use o contexto aqui

  const loadProductsFromStorage = async () => {
    try {
      const savedProducts = await AsyncStorage.getItem('products');
      if (savedProducts) {
        const parsedProducts = JSON.parse(savedProducts);
        const filteredProducts = parsedProducts.filter(product => !product._deleted);
        setProducts(filteredProducts);
      }
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };
  
  const saveProducts = async () => {
    try {
      await AsyncStorage.setItem('products', JSON.stringify(products));
    } catch (error) {
      console.error('Erro ao salvar produtos:', error);
    }
  };

  const addNewProduct = async () => {
    if (newProduct.trim() !== '' && newPrice !== '') {
      const newProductData = {
        id: Math.random().toString(),
        name: newProduct,
        price: parseFloat(newPrice),
      };

      // Adicione o novo produto ao estado do contexto
      setProducts([...products, newProductData]);

      setNewProduct('');
      setNewPrice('');
      await saveProducts();
    }
  };
  
  const addProduct = (productData) => {
    setProducts([...products, productData]);
  };

  const removeProduct = (productId) => {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return { ...product, _deleted: true };
      }
      return product;
    }));
    saveProducts();
  };


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do produto"
          value={newProduct}
          onChangeText={(text) => setNewProduct(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço"
          value={newPrice}
          onChangeText={(text) => setNewPrice(text)}
          keyboardType="numeric"
        />
        <Button title="✅" onPress={addNewProduct} />
      </View>
      <FlatList
  data={products.filter(product => !product._deleted)}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.productItem}>
      <Text>{item.name}</Text>
      <Text>Preço: R$ {item.price.toFixed(2)}</Text>
      <Button title="🗑️" onPress={() => removeProduct(item.id)} />
    </View>
  )}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginRight: 10,
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

export default ProdutosScreen;