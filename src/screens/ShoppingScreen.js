import { View, FlatList } from "react-native";
import { Text } from "react-native-rapi-ui";
import React, { useState, useEffect } from "react";
import { CartItem } from "../components/index";

import { getShoppingCart } from "../api/ApiFirebase";

const ShoppingScreen = () => {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const renderCart = ({ item }) => <CartItem id={item.id} {...item} />;

  useEffect(() => {
    getShoppingCart(setCart, setPrice);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cart}
        keyExtractor={(x) => x.id}
        renderItem={renderCart}
      />
      <Text
        size="h3"
        style={{ textAlign: "right", paddingRight: 20, paddingVertical: 10 }}
      >{`L. ${price}.00`}</Text>
    </View>
  );
};

export default ShoppingScreen;
