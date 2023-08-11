import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductProvider } from './ProductContext';

import HomeScreen from './HomeScreen';
import VendasScreen from './VendasScreen';
import ProdutosScreen from './ProdutosScreen';
import RelatoriosScreen from './RelatoriosScreen';
import FinalizarVendaScreen from './FinalizarVendasScreen';
import ProdutoVendasScreen from './ProdutoVendasScreen'

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <ProductProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Vendas" component={VendasScreen} />
        <Stack.Screen name="Produtos" component={ProdutosScreen} />
        <Stack.Screen name="FinalizarVenda" component={FinalizarVendaScreen} />
        <Stack.Screen name="Relatorios" component={RelatoriosScreen} />
        <Stack.Screen name="ProdutoVendas" component={ProdutoVendasScreen}initialParams={{ products: [] }} />
      </Stack.Navigator>
    </NavigationContainer>
    </ProductProvider>
  );
};

export default App;