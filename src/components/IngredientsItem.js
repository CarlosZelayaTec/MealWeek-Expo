import React from "react";
import { Text, Section, SectionContent } from "react-native-rapi-ui";
import { TouchableOpacity } from "react-native";

const IngredientsItem = (props) => {
  return (
    <TouchableOpacity>
      <Section style={{marginVertical: 10, minWidth: '30%', maxWidth: '100%'}}>
        <SectionContent style={{alignItems: 'center'}}>
          <Text>{props.title}</Text>
        </SectionContent>
      </Section>
    </TouchableOpacity>
  );
};

export default IngredientsItem;
