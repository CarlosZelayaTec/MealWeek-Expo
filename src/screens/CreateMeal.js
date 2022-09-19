import React, { useState, useEffect } from "react";
import { TextInput, Text, Button, Layout } from "react-native-rapi-ui";
import { StyleSheet, View } from "react-native";
import { createMeal } from "../api/ApiFirebase";

const CreateMeal = ({ navigation }) => {
  const [Meal, setMeal] = useState({
    title: "",
    descripcion: "",
    emoji: "🍔",
  });

  const handlePicker = (object) => {
    setMeal({
      ...Meal,
      emoji: object.emoji,
    });
  };

  const createOneMeal = async () => {
    await createMeal(Meal);
    navigation.goBack();
  };

  return (
    <Layout style={{alignItems: 'center'}}>
      <Text size="h3" style={{ textAlign: "center" }}>
        Agrega una nueva comida
      </Text>
      <Text size="h1">{Meal.emoji}</Text>
      <View style={styles.inputs}>
        <TextInput
          placeholder="Titulo platillo"
          value={Meal.title}
          onChangeText={(e) => setMeal({ ...Meal, title: e })}
        />
        <TextInput
          placeholder="Descripcion platillo"
          value={Meal.descripcion}
          onChangeText={(e) => setMeal({ ...Meal, descripcion: e })}
        />
      </View>
      <Button text="Agregar" onPress={createOneMeal} />
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

export default CreateMeal;
