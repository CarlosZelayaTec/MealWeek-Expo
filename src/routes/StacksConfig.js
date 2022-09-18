import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  MealScreen,
  IngredientsScreen,
  RecordScreen,
  SettingsScreen,
  ShoppingScreen,
} from "../screens";

const ShoppingStack = createNativeStackNavigator();
const MealStack = createNativeStackNavigator();
const IngredientsStack = createNativeStackNavigator();
const RecordStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

export const MealStackScreen = () => (
  <MealStack.Navigator screenOptions={{ headerShown: false }}>
    <MealStack.Screen name="MealsHome" component={MealScreen} />
    <MealStack.Screen name="Carrito" component={ShoppingScreen} />
  </MealStack.Navigator>
);

export const IngredientsStackScreen = () => (
  <IngredientsStack.Navigator screenOptions={{ headerShown: false }}>
    <IngredientsStack.Screen
      name="IngredientesHome"
      component={IngredientsScreen}
    />
  </IngredientsStack.Navigator>
);

export const RecordStackScreen = () => (
  <RecordStack.Navigator screenOptions={{ headerShown: false }}>
    <RecordStack.Screen name="RecordHome" component={RecordScreen} />
  </RecordStack.Navigator>
);

export const SettingsStackScreen = () => (
  <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
    <SettingsStack.Screen name="SettingHome" component={SettingsScreen} />
  </SettingsStack.Navigator>
);
