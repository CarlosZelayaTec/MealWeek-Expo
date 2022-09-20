import React, { useEffect } from "react";
import {
  Button,
  Layout,
  Section,
  SectionContent,
  Text,
} from "react-native-rapi-ui";
import { View } from "react-native";

import { deleteIngredient, addShoppingCart } from "../api/ApiFirebase";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const AddCart = ({ navigation, route }) => {
  // const [amount, setAmount] = React.useState(0);
  const [sendCart, setSendCart] = React.useState({
    title: route.params.t,
    price: route.params.p,
    amount: 0
  })

  let status = sendCart.amount === 0 ? "danger" : "primary";

  async function addCart(){
    await addShoppingCart(sendCart);
    navigation.goBack();
    alert('Agregado al carrito');
  }

  function changeRest() {
    if (sendCart.amount === 0) return null;
    setSendCart({...sendCart, amount: sendCart.amount - 1});
  }

  const deleteI = async () => {
    await deleteIngredient(route.params.idI);
    navigation.goBack();
  };

  return (
    <Layout style={{ flex: 1, alignItems: "center" }}>
      <View style={{flexDirection: "row", alignItems: 'center'}}>
        <Text size="h1">Cantidad</Text>
        <MaterialCommunityIcons
          name="delete"
          onPress={deleteI}
          size={40}
          color="red"
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: 'center', marginVertical: 20 }}>
        <Button text="-" status={status} width={50} onPress={changeRest} />
        <Section style={{ width: "30%", marginHorizontal: 15 }}>
          <SectionContent>
            <Text size="h3" style={{ textAlign: "center" }}>
              {sendCart.amount}
            </Text>
          </SectionContent>
        </Section>
        <Button text="+" width={50} onPress={() => setSendCart({...sendCart, amount: sendCart.amount + 1})} />
      </View>
      <Button text="Agregar al carrito" status="warning" onPress={addCart} />
    </Layout>
  );
};

export default AddCart;
