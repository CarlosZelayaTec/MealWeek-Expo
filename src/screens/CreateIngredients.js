import React, { useState, useEffect } from "react";
import { TextInput, Text, Button, Layout } from "react-native-rapi-ui";
import { StyleSheet, View } from "react-native";
import { createIngredient } from "../api/ApiFirebase";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const CreateIngredients = ({ navigation }) => {
  const [ingredient, setIngredient] = useState({
    title: "",
    price: 0,
  });

  const createOneIngredient = async () => {
    await createIngredient(ingredient);
    navigation.goBack();
  };

  return (
    <Layout
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "60%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      }}
    >
      <View
        style={{
          marginTop: -35,
          alignItems: "flex-end",
          width: "94%",
          height: "10%",
        }}
      >
        <MaterialCommunityIcons
          style={{ alignItems: "flex-end" }}
          name="close-circle"
          size={35}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Text size="h3" style={{ textAlign: "center" }}>
        Agrega un nuevo ingrediente
      </Text>
      <View style={styles.inputs}>
        <TextInput
          placeholder="Ingrediente u otro"
          value={ingredient.title}
          onChangeText={(e) => setIngredient({ ...ingredient, title: e })}
        />
        <TextInput
          placeholder="precio"
          value={ingredient.price}
          onChangeText={(e) => setIngredient({ ...ingredient, price: e })}
        />
      </View>
      <Button text="Agregar" onPress={createOneIngredient} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  inputs: {
    alignItems: "center",
    justifyContent: "space-evenly",
    minHeight: 100,
    maxWidth: "88%",
  },
});

export default CreateIngredients;
