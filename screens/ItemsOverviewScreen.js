import { FlatList, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import GroceryItem from "../components/MealsList/GroceryItem";
import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/redux/shopingItems";
import ItemList from "../components/MealsList/ItemList";

function ItemsOverviewScreen({ route, navigation }) {
  const shopingItemsIds = useSelector((state) => state.shopingItems.ids);
  const dispatch = useDispatch();

  const catId = route.params.categoryId;

  const mealId = route.params.mealId;

  const slectedItem = shopingItemsIds.includes(mealId);

  function addItemHandler() {
    if (slectedItem) {
      dispatch(removeItem({ id: mealId }));
    } else {
      dispatch(addItem({ id: mealId }));
    }
  }

  const displayedItem = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <ItemList items={displayedItem}  />;
}

export default ItemsOverviewScreen;
