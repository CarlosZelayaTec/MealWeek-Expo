import React, { useState } from "react";
import { Section, SectionContent, Text } from "react-native-rapi-ui";
import { TouchableOpacity, Alert } from "react-native";

import { deleteItem } from "../api/ApiFirebase";

const CartItem = (props) => {
  const [focus, setFocus] = useState(false);

  const ButtonAlert = () =>
    Alert.alert("Opciones", "¿Qué acción desea realizar?", [
      {
        text: "Eliminar",
        onPress: () => deleteItem("Cart", props.id),
        style: "destructive",
      },
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel",
      },
    ]);

  function handleFocus() {
    setFocus(!focus);
  }

  return (
    <Section style={{ marginTop: 10, marginHorizontal: 15 }}>
      <TouchableOpacity
        onPress={handleFocus}
        onLongPress={ButtonAlert}
        style={{ backgroundColor: focus ? "red" : "white" }}
      >
        <SectionContent
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text size="lg">{`${props.amount}  ${props.title}`}</Text>
          <Text>{`L. ${props.price}.00`}</Text>
        </SectionContent>
      </TouchableOpacity>
    </Section>
  );
};

export default CartItem;
