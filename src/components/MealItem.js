import { Text, Section, SectionContent, Avatar } from "react-native-rapi-ui";
import { View } from "react-native";
import React from "react";

const MealItem = (props) => {
  return (
    <Section
      style={{ marginHorizontal: 8, borderWidth: 0.5, marginBottom: 10 }}
    >
      <SectionContent
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text size="h1" style={{marginRight: 10}}>{props.emoji}</Text>
        <View style={{ minWidth: "78%"}}>
          <Text size="h3" fontWeight="bold">
            {props.title}
          </Text>
          <Text size="lg" fontWeight="regular">
            {props.descripcion}
          </Text>
        </View>
      </SectionContent>
    </Section>
  );
};

export default MealItem;
