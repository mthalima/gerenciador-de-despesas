import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>Erro inesperado!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },

  title: {
    textAlign: "center",
    marginBottom: 8,
  },

  text: { fontSize: 20, fontWeight: "bold", color: "white" },
});
