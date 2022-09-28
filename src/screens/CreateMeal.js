import React, { useState, useEffect } from "react";
import {
  TextInput,
  Text,
  Button,
  Layout,
  themeColor,
} from "react-native-rapi-ui";
import { StyleSheet, View, Image } from "react-native";
import { createMeal, updateItem } from "../api/ApiFirebase";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { colors } from "../styles/styles";

const CreateMeal = ({ navigation, route }) => {
  const [Meal, setMeal] = useState({
    title: "",
    descripcion: "",
    emoji: "☕",
  });

  const createOneMeal = async () => {
    await createMeal(Meal);
    navigation.goBack();
  };

  const updateOneMeal = async () => {
    await updateItem(route.params.id, Meal);
    navigation.goBack();
  };

  /**
   * ! Factorizar este código
   */

  const text = route.params?.ti ? "Actualiza el platillo" : "Nuevo platillo";
  const boton = route.params?.ti ? "Actualizar platillo" : "Agregar platillo";
  useEffect(() => {
    route.params?.ti &&
      setMeal({
        title: route.params.ti,
        descripcion: route.params.des,
        emoji: route.params.emo,
      });
  }, []);

  return (
    <Layout
      backgroundColor={colors.modal}
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
      <Text size="h3" fontWeight="medium" style={{ textAlign: "center" }}>
        {text}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "17%",
          marginTop: 10,
        }}
      >
        <Text size="h1" style={{ marginRight: 10 }}>
          {Meal.emoji}
        </Text>
        <TextInput
          placeholder="emoji"
          value={Meal.emoji}
          onChangeText={(e) => setMeal({ ...Meal, emoji: e })}
        />
      </View>
      <View style={styles.inputs}>
        <TextInput
          placeholder="Titulo platillo"
          value={Meal.title}
          onChangeText={(e) => setMeal({ ...Meal, title: e })}
          rightContent={
            <MaterialCommunityIcons
              name="format-title"
              size={20}
              color={themeColor.gray300}
            />
          }
        />
        <TextInput
          placeholder="Descripción platillo"
          value={Meal.descripcion}
          onChangeText={(e) => setMeal({ ...Meal, descripcion: e })}
          rightContent={
            <MaterialIcons
              name="description"
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
        onPress={route.params?.ti ? updateOneMeal : createOneMeal}
        rightContent={<Text size="h2">🌮</Text>}
        textStyle={{ fontSize: 17 }}
      />

      <Image source={require("../../assets/cafe.png")} resizeMode="cover" />
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
});

export default CreateMeal;
