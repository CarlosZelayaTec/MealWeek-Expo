import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  MealStackScreen,
  IngredientsStackScreen,
  RecordStackScreen,
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
          backgroundColor: colors.header,
          borderBottomLeftRadius: 30,
        },
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontSize: 34,
          marginLeft: 5,
        },
        tabBarStyle: {
          height: 88,
          backgroundColor: colors.header,
          borderTopRightRadius: 40,
          overflow: "hidden",
        },
        tabBarShowLabel: false,
      }}
    >
      <tabs.Screen
        name="Comidas"
        component={MealStackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            let n = focused ? "restaurant" : "restaurant-outline";

            return <Ionicons name={n} size={33} />;
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
            return (
              <MaterialCommunityIcons
                name={focused ? "bowl-mix" : "bowl-mix-outline"}
                size={33}
              />
            );
          },
        }}
      />
      <tabs.Screen
        name="Menú"
        component={RecordStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "calendar-weekend" : "calendar-weekend-outline"}
              size={33}
            />
          ),
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
