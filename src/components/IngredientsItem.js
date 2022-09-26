import React from "react";
import { Text, Section, SectionContent } from "react-native-rapi-ui";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

  return (
    <Section
      style={styles.container}
      backgroundColor={includeCart.includes(title) && "red"}
    >
      <TouchableOpacity style={{ flex: 1 }} onPress={handleItem}>
        <SectionContent>
          <Text size="h3">{title}</Text>
          <Text size="lg">{`L. ${props.price}.00`}</Text>
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
