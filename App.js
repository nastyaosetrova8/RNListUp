import { useState } from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import IngredientItem from "./components/IngredientItem";
import IngredientInput from "./components/IngredientInput";
import { StatusBar } from "expo-status-bar";
import MainButton from "./components/MainButton";

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
        <ImageBackground
          source={require("./assets/images/addIngredient.webp")}
          resizeMode="cover"
          style={styles.bgImage}
          imageStyle={
            ingredients.length > 0
              ? styles.backgroundImage
              : styles.backgroundImageContentEmpty
          }
        >
          <View
            style={
              ingredients.length > 0
                ? styles.contentContainer
                : [styles.contentContainer, styles.contentContainerEmpty]
            }
          >
            <MainButton onPress={startAddIngredientHandler} />
            <IngredientInput
              visible={modalIsVisible}
              onAddIngredients={addIngredientHandler}
              onCancel={endAddIngredientHandler}
            />
            {Array.isArray(ingredients) && ingredients.length > 0 && (
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
            )}
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#1e085a",
  },
  bgImage: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  backgroundImageContentEmpty: {
    opacity: 0.6,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  contentContainerEmpty: {
    justifyContent: "center",
  },
  ingredientsContainer: {
    marginTop: 16,
    flex: 5,
  },
});
