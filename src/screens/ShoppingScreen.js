import { View, FlatList, Image } from "react-native";
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
      {cart.length ? (
        <FlatList
          data={cart}
          keyExtractor={(x) => x.id}
          renderItem={renderCart}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
          <Image
            source={require("../../assets/pay.png")}
            resizeMode="contain"
            style={{ maxWidth: "85%" }}
          />
        </View>
      )}
      <Text
        size="h3"
        style={{ textAlign: "right", paddingRight: 20, paddingVertical: 10 }}
      >{`L. ${price}.00`}</Text>
    </View>
  );
};

export default ShoppingScreen;
