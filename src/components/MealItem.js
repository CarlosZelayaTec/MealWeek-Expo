import { Text, Section, SectionContent } from "react-native-rapi-ui";
import { View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React from "react";
import { colors } from "../styles/styles";

import { deleteItem, addMealWeek } from "../api/ApiFirebase";
import { useNavigation } from "@react-navigation/native";

const MealItem = (props) => {
  const navigation = useNavigation();

  async function addWeek(){
    try {
      await addMealWeek({
        title: props.title,
        descripcion: props.descripcion,
        emoji: props.emoji
      })
      alert('Añadido con éxito');
    } catch (e) {
      alert(e)
    }
  }

  const ButtonAlert = () =>
    Alert.alert("Opciones", "¿Qué acción desea realizar?", [
      {
        text: "Editar",
        onPress: () =>
          navigation.navigate("Create", {
            id: props.id,
            emo: props.emoji,
            ti: props.title,
            des: props.descripcion,
          }),
      },
      {
        text: "Eliminar",
        onPress: () => deleteItem("Meals", props.id),
        style: "destructive",
      },
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel",
      },
    ]);

  return (
    <Section style={styles.container}>
      <TouchableOpacity
        onPress={addWeek}
        onLongPress={ButtonAlert}
      >
        <SectionContent
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text size="h1" style={{ marginRight: 10 }}>
            {props.emoji}
          </Text>
          <View style={{ minWidth: "78%" }}>
            <Text size="h3" fontWeight="bold">
              {props.title}
            </Text>
            <Text size="lg" fontWeight="regular">
              {props.descripcion}
            </Text>
          </View>
        </SectionContent>
      </TouchableOpacity>
    </Section>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
});

export default MealItem;
