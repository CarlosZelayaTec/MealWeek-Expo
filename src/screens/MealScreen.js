import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Button,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { MealItem } from "../components";

import { getMeals } from "../api/ApiFirebase";
import { FontAwesome5 } from "@expo/vector-icons";
import { themeColor } from "react-native-rapi-ui";

const MealScreen = ({ navigation }) => {
  const [Meals, setMeals] = useState([]);

  const MealsList = ({ item }) => <MealItem id={item.id} {...item} />;

  useEffect(() => {
    try {
      getMeals(setMeals);
    } catch (e) {
      alert(e);
    }
  }, []);

  return (
    <View style={{ flex: 1, paddingTop: 10, backgroundColor: `${themeColor.warning700}` }}>
      <FlatList
        style={{ flex: 1 }}
        data={Meals}
        keyExtractor={(x) => x.id}
        renderItem={MealsList}
      />
      <TouchableHighlight
        onPress={() => navigation.push("Create", {})}
        style={styles.button}
      >
        <FontAwesome5 name="plus-circle" size={40} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    // backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 8,
  },
});

export default MealScreen;
