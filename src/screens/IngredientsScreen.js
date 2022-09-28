import { View, FlatList, StyleSheet, TouchableHighlight } from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { IngredientsItem } from "../components/index";
import { getIngredients, isShoppingIngredient } from "../api/ApiFirebase";
import { colors } from "../styles/styles";

const IngredientsScreen = ({ navigation }) => {
  const [ingredients, setIngredients] = useState([]);
  const [isShpping, setIsShopping] = useState([]);

  useEffect(() => {
    getIngredients(setIngredients);
    isShoppingIngredient(setIsShopping);
  }, []);

  const IngredientsList = ({ item }) => (
    <IngredientsItem id={item.id} {...item} includeCart={isShpping} />
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <FlatList
        data={ingredients}
        keyExtractor={(x) => x.id}
        renderItem={IngredientsList}
        numColumns={2}
        initialNumToRender={12}
        columnWrapperStyle={{ justifyContent: "space-around" }}
      />

      <TouchableHighlight
        onPress={() => navigation.push("CreateIngredient", {})}
        style={styles.button}
      >
        <FontAwesome5 name="plus-circle" size={50} color={colors.add} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    borderRadius: 30,
    elevation: 8,
  },
});

export default IngredientsScreen;
