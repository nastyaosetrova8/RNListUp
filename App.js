import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import IngredientItem from "./components/IngredientItem";
import IngredientInput from "./components/IngredientInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  function startAddIngredientHandler() {
    setModalIsVisible(true);
  }

  function endAddIngredientHandler() {
    setModalIsVisible(false);
  }

  function addIngredientHandler(enteredIngredientText) {
    setIngredients((currentIngredients) => [
      ...currentIngredients,
      { text: enteredIngredientText, id: Math.random().toString() },
    ]);
    endAddIngredientHandler();
  }

  function deleteIngredientHandler(id) {
    setIngredients((currentIngredients) => {
      return currentIngredients.filter((item) => item.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new ingredient"
          color="#a065ec"
          onPress={startAddIngredientHandler}
        />
        <IngredientInput
          visible={modalIsVisible}
          onAddIngredients={addIngredientHandler}
          onCancel={endAddIngredientHandler}
        />
        <View style={styles.ingredientsContainer}>
          <FlatList
            data={ingredients}
            renderItem={(itemData) => (
              <IngredientItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteIngredient={deleteIngredientHandler}
              />
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          >
            {/* {ingredients.map((ingredient) => (  ))} */}
          </FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  ingredientsContainer: {
    flex: 5,
  },
});
