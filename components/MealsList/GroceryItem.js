import { Pressable, Text, View, Image, StyleSheet, Button } from "react-native";
import PrimaryButton from "../ui/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

function GroceryItem({ id, title, imageUrl, buttonPressed }) {
  const navigation = useNavigation();
  function addToCart() {
    buttonPressed();
    navigation.navigate("ItemDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.groceryItem}>
      <Pressable onPress={addToCart}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default GroceryItem;

const styles = StyleSheet.create({
  groceryItem: {
    margin: 16,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 380,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  buttonContainer: {
    flex: 1,
  },
});
