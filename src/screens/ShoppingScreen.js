import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { CartItem } from "../components/index";

import { getShoppingCart } from "../api/ApiFirebase";

const ShoppingScreen = () => {
  const [cart, setCart] = useState({
    id: '',
    title: '',
    price: 0,
    amount: 0,
    isAlready: false,
  });

  const renderCart = ({item}) => <CartItem id={item.id} {...item} />

  useEffect(() => {
    getShoppingCart(setCart);
  }, [])

  return (
    <View>
      <FlatList 
        data={cart}
        keyExtractor={x => x.id}
        renderItem={renderCart}
      />
    </View>
  );
};

export default ShoppingScreen;
