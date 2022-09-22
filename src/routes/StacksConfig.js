import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  MealScreen,
  IngredientsScreen,
  RecordScreen,
  SettingsScreen,
  ShoppingScreen,
  CreateMeal,
  CreateIngredients,
  AddCart,
} from "../screens";

const MealStack = createNativeStackNavigator();
const IngredientsStack = createNativeStackNavigator();
const RecordStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

export const MealStackScreen = () => (
  <MealStack.Navigator screenOptions={{ headerShown: false,  }}>
    <MealStack.Screen name="MealsHome" component={MealScreen} />
    <MealStack.Screen name="Carrito" component={ShoppingScreen} />
    <MealStack.Screen
      name="Create"
      component={CreateMeal}
      options={{ presentation: "transparentModal", }}
    />
  </MealStack.Navigator>
);

export const IngredientsStackScreen = () => (
  <IngredientsStack.Navigator screenOptions={{ headerShown: false }}>
    <IngredientsStack.Screen
      name="IngredientesHome"
      component={IngredientsScreen}
    />
    <IngredientsStack.Group screenOptions={{presentation: 'transparentModal'}} >
      <IngredientsStack.Screen
        name="CreateIngredient"
        component={CreateIngredients}
      />
      <IngredientsStack.Screen
        name="Add"
        component={AddCart}
      />
    </IngredientsStack.Group>
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
