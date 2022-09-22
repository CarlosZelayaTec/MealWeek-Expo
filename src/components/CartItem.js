import React, {useState, useEffect} from "react";
import { Layout, Section, SectionContent, Text } from "react-native-rapi-ui";
import { View, TouchableOpacity } from "react-native";

const CartItem = (props) => {
  const [focus, setFocus] = useState(false);

  function handleFocus(){
    setFocus(!focus);
  }

  useEffect(() => {

  }, [])

  return (
    <Section style={{ marginTop: 10, marginHorizontal: 15 }}>
      <TouchableOpacity onPress={handleFocus} style={{ backgroundColor: focus ? 'red' : 'white' }} >
        <SectionContent
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text
          size="h3"
            style={{
              textDecorationLine: focus ? "line-through": "",
              textDecorationStyle: focus ? "solid" : "",
              flex: 1,
              textAlign: "center",
            }}
          >{`${props.amount} ${props.title} L. ${props.price}.00`}</Text>
        </SectionContent>
      </TouchableOpacity>
    </Section>
  );
};

export default CartItem;
