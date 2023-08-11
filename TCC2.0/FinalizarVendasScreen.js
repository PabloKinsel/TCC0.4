import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useProductContext } from './ProductContext';

const FinalizarVendaScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params;

  const { soldProducts, setSoldProducts } = useProductContext(); // Adicione o contexto aqui

  const [quantitySold, setQuantitySold] = useState('');
  const [priceSold, setPriceSold] = useState('');

  const handleFinalizeSale = () => {
    if (quantitySold !== '' && priceSold !== '') {
      const totalValue = parseFloat(priceSold) * parseInt(quantitySold);

      // Adicione o produto vendido à lista de produtos vendidos
      setSoldProducts([
        ...soldProducts,
        {
          ...product,
          quantitySold: parseInt(quantitySold),
          totalValue,
        },
      ]);

      // Reset os campos após finalizar a venda
      setQuantitySold('');
      setPriceSold('');

      // Navegue para a aba "Relatorios"
      navigation.navigate('Relatorios');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Finalizar Venda Screen</Text>
      <Text>{product.name}</Text>
      <Text>Quantidade em estoque: {product.stock}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Quantidade Vendida"
          value={quantitySold}
          onChangeText={setQuantitySold}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Preço unitário"
          value={priceSold}
          onChangeText={setPriceSold}
          keyboardType="numeric"
        />
        <Button title="Finalizar Venda" onPress={handleFinalizeSale} />
      </View>
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
});

export default FinalizarVendaScreen;