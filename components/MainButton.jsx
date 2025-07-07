import { Pressable, StyleSheet, Text, View } from "react-native";

const MainButton = (props) => {
  return (
    <View style={styles.outerContainerBtn}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainerBtn, styles.pressedBtn]
            : styles.innerContainerBtn
        }
        android_ripple={{ color: "#a980df" }}
        onPress={props.onPress}
      >
        <Text style={styles.textBtn}> Add new ingredient </Text>
      </Pressable>
    </View>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  outerContainerBtn: {
    marginTop: 12,
    borderRadius: 6,
    overflow: "hidden",
  },
  innerContainerBtn: {
    backgroundColor: "#5e0acc",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  textBtn: {
    color: "#ffffff",
    textTransform: "uppercase",
    textAlign: "center",
  },
  pressedBtn: {
    opacity: 0.75,
  },
});
