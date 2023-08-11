import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useProductContext } from './ProductContext';

function RelatoriosScreen() {
  const { soldProducts } = useProductContext(); // Adicione o contexto aqui

  return (
    <View style={styles.container}>
      <FlatList
        data={soldProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>Produto: {item.name}</Text>
            <Text>Quantidade: {item.quantitySold}</Text>
            <Text>Preço Total: R$ {item.totalValue.toFixed(2)}</Text>
            
          </View>
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default RelatoriosScreen;