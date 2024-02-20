import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import { ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import ItemsOverviewScreen from "./screens/ItemsOverviewScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ContactScreen from "./screens/ContactScreen";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { shopingCart } from "./store/redux/shopingCart";
import ShopingCartScreen from "./screens/ShopingCartScreen";
import ItemDetailScreen from "./screens/ItemDetailScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#0C7576" },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#0C7576" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#ED86" },
        drawerContentStyle: { backgroundColor: "#0C7576" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "orange",
        drawerActiveBackgroundColor: "white",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={ShopingCartScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="call" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={shopingCart}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#0C7576" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#ED86" },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Products" component={CategoriesScreen} />
            <Stack.Screen
              name="ItemsOverview"
              component={ItemsOverviewScreen}
            />
            <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />

            <Stack.Screen name="cart" component={ShopingCartScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
