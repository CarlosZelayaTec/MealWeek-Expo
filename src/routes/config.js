import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  MealStackScreen,
  IngredientsStackScreen,
  RecordStackScreen,
  SettingsStackScreen
} from "./StacksConfig";

const tabs = createBottomTabNavigator();

function NavigationTabs() {
  const navigation = useNavigation();
  return (
    <tabs.Navigator
      initialRouteName="Comidas"
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Carrito', { screen: 'Comidas', params: {} })}
            style={{ marginRight: 12 }}
          >
            <Feather name="shopping-cart" size={28} />
          </TouchableOpacity>
        ),
        headerStyle: {
          height: 100,
        },
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontSize: 34,
        },
      }}
    >
      <tabs.Screen name="Comidas" component={MealStackScreen} />
      <tabs.Screen name="Ingredientes" component={IngredientsStackScreen} />
      <tabs.Screen name="Historial" component={RecordStackScreen} />
      <tabs.Screen name="Ajsutes" component={SettingsStackScreen} />
    </tabs.Navigator>
  );
}

const Navigations = () => (
  <NavigationContainer>
    <NavigationTabs />
  </NavigationContainer>
);

export default Navigations;
