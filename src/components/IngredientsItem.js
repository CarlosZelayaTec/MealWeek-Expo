import React, { useEffect } from "react";
import { Text, Section, SectionContent } from "react-native-rapi-ui";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";{ }

const IngredientsItem = (props) => {
  const navigation = useNavigation();
  
  return (
    <Section style={{ marginVertical: 10, minWidth: '45%', maxWidth: '45%' }}>
      <TouchableOpacity onPress={() => navigation.push('Add', {idI: props.id, t: props.title, p: props.price})} >
        <SectionContent >
          <Text size="h3">{props.title}</Text>
          <Text size="lg">{`L. ${props.price}.00`}</Text>
        </SectionContent>
      </TouchableOpacity>
    </Section>
  );
};

export default IngredientsItem;
