import { Image, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import GroceryItem from "../components/MealsList/GroceryItem";
import ItemList from "../components/MealsList/ItemList";
import { ScrollView } from "react-native-gesture-handler";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/redux/shopingItems";
import { useLayoutEffect } from "react";

function ItemDetailScreen({ route }) {
  const shopingItemsIds = useSelector((state) => state.shopingItems.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;
  const slectedItem = MEALS.find((meal) => meal.id === mealId);

  const slectedItemToCart = shopingItemsIds.includes(mealId);

  function addItemHandler() {
    if (slectedItemToCart) {
      dispatch(removeItem({ id: mealId }));
    } else {
      dispatch(addItem({ id: mealId }));
    }
    console.log("Cart button pressed");
    console.log(slectedItemToCart);
  }

  const mealItemProps = {
    id: slectedItem.id,
    title: slectedItem.title,
    imageUrl: slectedItem.imageUrl,
  };

  return (
    <>
      <GroceryItem {...mealItemProps} />

      <View>
        <PrimaryButton onPress={addItemHandler}>+ Add to cart</PrimaryButton>
      </View>
    </>
  );
}

export default ItemDetailScreen;
