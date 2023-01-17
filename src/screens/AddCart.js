import React from "react";
import {
  Button,
  Layout,
  Section,
  SectionContent,
  Text,
} from "react-native-rapi-ui";
import { View, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../styles/styles";
import { addShoppingCart } from "../api/ApiFirebase";

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

  return (
    <Layout
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: "150%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        ...Platform.select({
          android: {
            marginTop: '100%',
            justifyContent: 'center'
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
          height: "24%",
          ...Platform.select({
            android: {
              marginTop: -70,
              height: '30%'
            }
          })
        }}
      >
        <MaterialCommunityIcons
          style={{ alignItems: "flex-end", ...Platform.select({
            android: {
              marginTop: 33
            }
          }) }}
          name="close-circle"
          size={35}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text size="h1" fontWeight="medium">
          Cantidad
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Button text="-" status={status} width={50} onPress={changeRest} />
        <Section style={{ width: "30%", marginHorizontal: 15}}>
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
      <Button
        text="Agregar al carrito"
        status={statusTwo}
        onPress={addCart}
        rightContent={<Text size="h3">🛒</Text>}
        textStyle={{ fontSize: 17 }}
      />
    </Layout>
  );
};

export default AddCart;
