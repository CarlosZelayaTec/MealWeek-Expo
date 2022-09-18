import { Text, Section, SectionContent, Avatar } from "react-native-rapi-ui";
import { View } from "react-native";
import React from "react";

const MealItem = () => {
  return (
    <Section style={{ marginHorizontal: 8, borderWidth: 0.5 }}>
      <SectionContent
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
          <Avatar
            source={{
              uri: "https://tacos10.com/wp-content/uploads/2019/01/Carne-molida-de-res.jpg",
            }}
            size="lg"
            shape="round"
          />
        <View style={{ maxWidth: '88%' }}>
          <Text size="h3" fontWeight="bold">
            Carne Molida
          </Text>
          <Text size="lg" fontWeight="regular">
            Carne molida con tajadas y ensalada de repollo
          </Text>
        </View>
      </SectionContent>
    </Section>
  );
};

export default MealItem;
