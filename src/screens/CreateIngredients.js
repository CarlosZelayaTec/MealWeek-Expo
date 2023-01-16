import React, { useState, useEffect } from "react";
import { TextInput, Text, Button, Layout, themeColor } from "react-native-rapi-ui";
import { StyleSheet, View, Image, Platform } from "react-native";
import { createIngredient, updateIngredient } from "../api/ApiFirebase";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../styles/styles";

const CreateIngredients = ({ navigation, route }) => {
  const [ingredient, setIngredient] = useState({
    title: "",
    price: 0,
  });

  const createOneIngredient = async () => {
    await createIngredient(ingredient);
    navigation.goBack();
  };

  const updateOneIngredient = async () => {
    await updateIngredient(route.params.id, ingredient);
    navigation.goBack();
  };

  const text = route.params?.title
    ? "Actualiza el ingrediente"
    : "Nuevo ingrediente";
  const boton = route.params?.title
    ? "Actualizar ingrediente"
    : "Agregar ingrediente";

  useEffect(() => {
    route.params?.title &&
      setIngredient({
        title: route.params.title,
        price: route.params.price,
      });
  }, []);

  return (
    <Layout
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "60%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        ...Platform.select({
          android: {
            marginTop: '40%'
          }
        })
      }}
      backgroundColor={colors.modal}
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
          style={{ alignItems: "flex-end", ...Platform.select({
            android: {
              marginTop: 15
            }
          }) }}
          name="close-circle"
          size={35}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Text
        fontWeight="medium"
        size="h3"
        style={{ textAlign: "center", marginBottom: 10 }}
      >
        {text}
      </Text>
      <View style={styles.inputs}>
        <TextInput
          placeholder="Ingrediente u otro"
          value={ingredient.title}
          onChangeText={(e) => setIngredient({ ...ingredient, title: e })}
          rightContent={
            <MaterialCommunityIcons
              name="format-title"
              size={20}
              color={themeColor.gray300}
            />
          }
        />
        <TextInput
          placeholder="precio"
          value={ingredient.price}
          onChangeText={(e) => setIngredient({ ...ingredient, price: e })}
          rightContent={
            <Ionicons
              name="ios-pricetags"
              size={20}
              color={themeColor.gray300}
            />
          }
        />
      </View>
      <Button
        style={{ marginTop: 10 }}
        status="danger"
        text={boton}
        onPress={
          route.params?.title ? updateOneIngredient : createOneIngredient
        }
        rightContent={<Text size="h2">🥦</Text>}
        textStyle={{ fontSize: 17 }}
      />
      <Image source={require("../../assets/cap.png")} resizeMode="contain" style={styles.image} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  inputs: {
    alignItems: "center",
    justifyContent: "space-evenly",
    minHeight: 110,
    maxWidth: "88%",
  },
  image: {
    maxHeight: '80%', 
    maxWidth: '100%', 
    marginTop: 25,
    ...Platform.select({
      android: {
        maxHeight: '65%'
      }
    })
  }
});

export default CreateIngredients;
