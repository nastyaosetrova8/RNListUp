import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const IngredientInput = (props) => {
  const [enteredIngredientText, setEnteredIngredientText] = useState("");

  function ingredientInputHandler(enteredText) {
    setEnteredIngredientText(enteredText);
  }

  function addIngredientsHandler() {
    props.onAddIngredients(enteredIngredientText);
    setEnteredIngredientText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/ingredients.jpg")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your ingredient"
          onChangeText={ingredientInputHandler}
          value={enteredIngredientText}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add ingredient"
              onPress={addIngredientsHandler}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default IngredientInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    paddingTop: 220,
    backgroundColor: "#5e0acc",
  },
  image: {
    width: 220,
    height: 220,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderColor: "#e4d0ff",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingTop: 16,
  },
  button: {
    width: "40%",
    marginHorizontal: 16,
  },
});
