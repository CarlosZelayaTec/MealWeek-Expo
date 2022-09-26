import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import { WeekItem } from '../components/index';
import { getMealWeek } from '../api/ApiFirebase'

const RecordScreen = () => {

  const [mealWeekData, setMealWeekData] = useState([]);

  const MealWeekList = ({ item }) => <WeekItem id={item.id} {...item} />;

  useEffect(() => {
    getMealWeek(setMealWeekData);
  }, [])

  return (
    <View style={{flex: 1, marginTop: 10}}>
      <FlatList 
        data={mealWeekData}
        keyExtractor={x => x.id}
        renderItem={MealWeekList}
       />
    </View>
  )
}

export default RecordScreen