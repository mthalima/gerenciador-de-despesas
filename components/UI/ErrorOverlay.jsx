import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import { Button } from "./Button";

function ErrorOverLay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>Erro inesperado.</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>Ok!</Button>
    </View>
  );
}

export default ErrorOverLay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },

  text: {
    textAlign: "center",
    marginBottom: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
