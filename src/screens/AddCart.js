import React, { useEffect } from "react";
import {
  Button,
  Layout,
  Section,
  SectionContent,
  Text,
} from "react-native-rapi-ui";
import { View } from "react-native";

import { deleteItem, addShoppingCart } from "../api/ApiFirebase";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const AddCart = ({ navigation, route }) => {
  const [sendCart, setSendCart] = React.useState({
    title: route.params.t,
    price: route.params.p,
    amount: 0,
  });

  let status = sendCart.amount === 0 ? "danger" : "primary";
  let statusTwo = sendCart.amount === 0 ? "danger" : "warning";

  async function addCart() {
    if (sendCart.amount === 0) return null;
    await addShoppingCart(sendCart);
    navigation.goBack();
    alert("Agregado al carrito");
  }

  function changeRest() {
    if (sendCart.amount === 0) return null;
    setSendCart({ ...sendCart, amount: sendCart.amount - 1 });
  }

  const deleteI = async () => {
    await deleteItem('Ingredients', route.params.idI);
    navigation.goBack();
  };

  return (
    <Layout
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: "140%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      }}
    >
      <View
        style={{
          marginTop: -35,
          alignItems: "flex-end",
          width: "94%",
          height: "24%",
        }}
      >
        <MaterialCommunityIcons
          style={{ alignItems: "flex-end" }}
          name="close-circle"
          size={35}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text size="h1">Cantidad</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Button text="-" status={status} width={50} onPress={changeRest} />
        <Section style={{ width: "30%", marginHorizontal: 15 }}>
          <SectionContent>
            <Text size="h3" style={{ textAlign: "center" }}>
              {sendCart.amount}
            </Text>
          </SectionContent>
        </Section>
        <Button
          text="+"
          width={50}
          onPress={() =>
            setSendCart({ ...sendCart, amount: sendCart.amount + 1 })
          }
        />
      </View>
      <Button text="Agregar al carrito" status={statusTwo} onPress={addCart} />
    </Layout>
  );
};

export default AddCart;
