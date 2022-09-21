import { Text, Section, SectionContent } from "react-native-rapi-ui";
import { View, TouchableOpacity } from "react-native";
import React from "react";

const MealItem = (props) => {
  return (
    <Section style={{ marginHorizontal: 8, marginBottom: 10 }}>
      <TouchableOpacity onPress={() => null} >
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

export default MealItem;
