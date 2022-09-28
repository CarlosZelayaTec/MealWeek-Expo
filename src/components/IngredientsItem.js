import React from "react";
import { Text, Section, SectionContent } from "react-native-rapi-ui";
import { TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { deleteItem } from "../api/ApiFirebase";
import { colors } from "../styles/styles";

const IngredientsItem = (props) => {
  const navigation = useNavigation();
  const { title, includeCart } = props;

  function handleItem() {
    navigation.push("Add", {
      idI: props.id,
      t: props.title,
      p: props.price,
    });
  }

  const ButtonAlert = () =>
    Alert.alert("Opciones", "¿Qué acción desea realizar?", [
      {
        text: 'Editar',
        onPress: () => navigation.navigate('CreateIngredient', {id: props.id, title: props.title, price: props.price }),
        style: 'default'
      },
      {
        text: "Eliminar",
        onPress: () => deleteItem("Ingredients", props.id),
        style: "destructive",
      },
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel",
      },
    ]);

  return (
    <Section
      style={styles.container}
      backgroundColor={includeCart.includes(title) && colors.l }
    >
      <TouchableOpacity style={{ flex: 1 }} onPress={handleItem} onLongPress={ButtonAlert} >
        <SectionContent>
          <Text size="h3">{title}</Text>
          <Text size="lg"  >{`L. ${props.price}.00`}</Text>
        </SectionContent>
      </TouchableOpacity>
    </Section>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    minWidth: "45%",
    maxWidth: "45%",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
});

export default IngredientsItem;
