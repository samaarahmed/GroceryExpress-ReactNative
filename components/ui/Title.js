import { StyleSheet, Text, View } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 45,
    color: "purple",
    textAlign: "center",
    padding: 12,
    fontWeight: "bold",
  },
});
