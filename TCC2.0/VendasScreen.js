import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VendasScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('ProdutoVendas')}
        >
          <Text style={styles.buttonText}>Dinheiro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('ProdutoVendas')}
        >
          <Text style={styles.buttonText}>Pix</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('ProdutoVendas')}
        >
          <Text style={styles.buttonText}>Cartão de crédito</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('ProdutoVendas')}
        >
          <Text style={styles.buttonText}>Cartão de débito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#304F8C',
  },
  content: {
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  buttonContainer: {
    width: 200,
    marginVertical: 5,
    backgroundColor: '#112359',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default VendasScreen;
