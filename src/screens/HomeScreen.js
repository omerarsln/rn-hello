import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate("ComponentsScreen")}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("ListScreen")}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("ImageScreen")}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("CounterScreen")}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate("ColorScreen")}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate("SquareScreen")}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => navigation.navigate("TextScreen")}
      />
      <Button
        title="Go to Box Demo"
        onPress={() => navigation.navigate("BoxScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
