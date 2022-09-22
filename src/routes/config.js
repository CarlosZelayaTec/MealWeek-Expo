import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  MealStackScreen,
  IngredientsStackScreen,
  RecordStackScreen,
  SettingsStackScreen,
} from "./StacksConfig";
import { colors } from "../styles/styles";

const tabs = createBottomTabNavigator();

function NavigationTabs() {
  const navigation = useNavigation();
  return (
    <tabs.Navigator
      initialRouteName="Comidas"
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Carrito", { screen: "Comidas", params: {} })
            }
            style={{ marginRight: 12 }}
          >
            <Feather name="shopping-cart" size={28} />
          </TouchableOpacity>
        ),
        headerStyle: {
          height: 100,
          backgroundColor: colors.barT,
          borderBottomLeftRadius: 30
        },
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontSize: 34,
        },
        tabBarStyle: {
          height: 88,
          backgroundColor: colors.barT,
          borderTopRightRadius: 40,
          overflow: 'hidden',
        },
        tabBarShowLabel: false,
      }}
    >
      <tabs.Screen
        name="Comidas"
        component={MealStackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            let n = focused ? "food-drumstick" : "food-drumstick-outline";

            return <MaterialCommunityIcons name={n} size={33} />;
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
      <tabs.Screen
        name="Ingredientes"
        component={IngredientsStackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <MaterialCommunityIcons name={focused ? "bowl-mix" : 'bowl-mix-outline'} size={33} />;
          },
        }}
      />
      <tabs.Screen
        name="Historial"
        component={RecordStackScreen}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="history" size={33} />,
        }}
      />
      <tabs.Screen
        name="Ajustes"
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            let n = focused ? "ios-settings" : "ios-settings-outline";
            return <Ionicons name={n} size={33} />;
          },
        }}
      />
    </tabs.Navigator>
  );
}

const Navigations = () => (
  <NavigationContainer>
    <NavigationTabs />
  </NavigationContainer>
);

export default Navigations;
