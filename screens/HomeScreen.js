import { Pressable, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function HomeScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate("Products");
  }
  return (
    <LinearGradient colors={["orange", "purple"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/images/ymc.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Pressable
            android_ripple={{ color: "#117A65" }}
            style={({ pressed }) => [
              styles.button,
              pressed ? styles.buttonPressed : null,
            ]}
          >
            <View style={styles.titleContainer}>
              <Title>Welcome to Grocery Express</Title>
            </View>
          </Pressable>
          <Pressable
            android_ripple={{ color: "#117A65" }}
            style={({ pressed }) => [
              styles.button,
              pressed ? styles.buttonPressed : null,
            ]}
            onPress={pressHandler}
          >
            <View style={styles.buttonContainer}>
              <Text style={styles.text}>All Products </Text>
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    borderRadius: 8,
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },

  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },

  titleContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 100,
    height: 100,
    width: 300,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "orange",
    borderRadius: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 12,
  },
});
