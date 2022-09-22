import { View, FlatList } from "react-native";
import { Text } from "react-native-rapi-ui";
import React, { useState, useEffect } from "react";
import { CartItem } from "../components/index";

import { getShoppingCart } from "../api/ApiFirebase";

const ShoppingScreen = () => {
  const [cart, setCart] = useState({
    id: "",
    title: "",
    price: 0,
    amount: 0,
    isAlready: false,
  });

  const renderCart = ({ item }) => <CartItem id={item.id} {...item} />;

  useEffect(() => {
    getShoppingCart(setCart);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cart}
        keyExtractor={(x) => x.id}
        renderItem={renderCart}
        ListFooterComponent={
          <Text
            size="h2"
            style={{ textAlign: "right", marginRight: 15, marginTop: 20 }}
          >{`Total a pagar: L. 0.00`}</Text>
        }
      />
    </View>
  );
};

export default ShoppingScreen;
