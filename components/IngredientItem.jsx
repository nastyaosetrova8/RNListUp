import { Pressable, StyleSheet, Text, View } from "react-native";

const IngredientItem = (props) => {
  return (
    <View style={styles.ingredientItem}>
      <Pressable
        android_ripple={{ color: "#9d5bf3" }}
        onPress={props.onDeleteIngredient.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.ingredientText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default IngredientItem;

const styles = StyleSheet.create({
  ingredientItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  ingredientText: {
    padding: 8,
    color: "#ffffff",
  },
});
