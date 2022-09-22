import { Text, Section, SectionContent } from "react-native-rapi-ui";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../styles/styles";

const MealItem = (props) => {
  return (
    <Section style={styles.container}>
      <TouchableOpacity
        onPress={() => null}
        style={{ backgroundColor: colors.primary }}
      >
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

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
});

export default MealItem;
