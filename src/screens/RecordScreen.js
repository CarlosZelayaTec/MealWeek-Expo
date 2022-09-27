import { View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";

import { WeekItem } from "../components/index";
import { getMealWeek } from "../api/ApiFirebase";

const RecordScreen = () => {
  const [mealWeekData, setMealWeekData] = useState([]);

  const MealWeekList = ({ item }) => <WeekItem id={item.id} {...item} />;

  useEffect(() => {
    getMealWeek(setMealWeekData);
  }, []);

  return (
      mealWeekData.length ? (
        <View style={{ flex: 1, paddingTop: 10, backgroundColor: "#FFF" }}>
          <FlatList
            data={mealWeekData}
            keyExtractor={(x) => x.id}
            renderItem={MealWeekList}
          />
        </View>
      ) : (
        <View style={{ flex: 1, backgroundColor: "#FFF", alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require("../../assets/cart.png")}
            style={{ maxWidth: "70%" }}
            resizeMode="contain"
          />
        </View>
      )
  );
};

export default RecordScreen;
