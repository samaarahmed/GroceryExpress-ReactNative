import { View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import shopingItems from "../store/redux/shopingItems";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "../components/MealsList/ItemList";

function ShopingCartScreen() {
  const cartItemsIds = useSelector((state) => state.shopingItems.ids);
  const cartItems = MEALS.filter((meal) => cartItemsIds.includes(meal.id));
  if (cartItems.length === 0) {
    console.log(cartItems);
    return (
      <View>
        <Text>You have no item in cart{cartItems}</Text>
      </View>
    );
  }
  return <ItemList items={cartItems} />;
}

export default ShopingCartScreen;
