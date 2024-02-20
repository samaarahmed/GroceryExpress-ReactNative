import { FlatList, Text, View } from "react-native";
import GroceryItem from "../MealsList/GroceryItem";

function ItemList({ items }) {
  function buttonPressed() {
    console.log("pressed");
  }

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      buttonPressed,
    };
    return <GroceryItem {...mealItemProps} />;
  }

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default ItemList;
