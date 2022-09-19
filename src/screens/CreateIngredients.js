import React, { useState, useEffect } from "react";
import { TextInput, Text, Button, Layout } from "react-native-rapi-ui";
import { StyleSheet, View } from "react-native";
import { createIngredient } from "../api/ApiFirebase";

const CreateIngredients = ({ navigation }) => {
  const [ingredient, setIngredient] = useState({
    title: ""
  });

  const createOneIngredient = async () => {
    await createIngredient(ingredient);
    navigation.goBack();
  };

  return (
    <Layout style={{alignItems: 'center'}}>
      <Text size="h3" style={{ textAlign: "center" }}>
        Agrega un nuevo ingrediente
      </Text>
      <View style={styles.inputs}>
        <TextInput
          placeholder="Ingrediente u otro"
          value={ingredient.title}
          onChangeText={(e) => setIngredient({ ...ingredient, title: e })}
        />
      </View>
      <Button text="Agregar" onPress={createOneIngredient} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  inputs: {
    alignItems: 'center',
    justifyContent: "space-evenly",
    minHeight: 100,
    maxWidth: "88%",
  },
});

export default CreateIngredients;
