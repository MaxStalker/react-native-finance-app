import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import { Header } from "react-native-elements";
import { LinearGradient } from "expo";
import HeaderWithAction from "./components/HeaderWithAction";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={["#515362", "#2e2d3b"]} style={[styles.box]}>
          <Header
            backgroundColor={"transparent"}
            outerContainerStyles={{
              backgroundColor: "transparent",
              borderBottomWidth: 0,
              alignContent: "center",
              justifyContent: "space-between"
            }}
            leftComponent={{ icon: "menu", color: "#dedee5" }}
            rightComponent={{ icon: "home", color: "#dedee5" }}
          />

          <HeaderWithAction title="Cards"/>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 20
  },
  box: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
