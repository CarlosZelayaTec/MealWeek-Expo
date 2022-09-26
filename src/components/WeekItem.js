import { Text, Section, SectionContent } from "react-native-rapi-ui";
import { View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React from "react";

import { deleteItem } from "../api/ApiFirebase";

const WeekItem = (props) => {

  const ButtonAlert = () =>
    Alert.alert("Opciones", "¿Qué acción desea realizar?", [
      {
        text: "Eliminar",
        onPress: () => deleteItem("MealWeeek", props.id),
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

export default WeekItem;
