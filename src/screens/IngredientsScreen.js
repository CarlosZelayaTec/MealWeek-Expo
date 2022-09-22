import {
  View,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { IngredientsItem } from "../components/index";
import { getIngredients } from "../api/ApiFirebase";
import { themeColor } from "react-native-rapi-ui";
import { colors } from "../styles/styles";

const IngredientsScreen = ({ navigation }) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredients(setIngredients);
  }, []);

  const IngredientsList = ({ item }) => (
    <IngredientsItem id={item.id} {...item} />
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>
      <FlatList
        data={ingredients}
        keyExtractor={(x) => x.id}
        renderItem={IngredientsList}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-around" }}
      />

      <TouchableHighlight
        onPress={() => navigation.push("CreateIngredient", {})}
        style={styles.button}
      >
        <FontAwesome5 name="plus-circle" size={40} />
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
