import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import { LinearGradient } from "expo";
import HeaderWithAction from "./components/HeaderWithAction";
import CreditCard from "./components/CreditCard";

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

          <ScrollView horizontal styles={[styles.cardContainer]}>
            <CreditCard
              number="**** **** **** 7427"
              holder="Bryan Baker"
              expiry="03/20/2017"
            />
            <CreditCard
              number="**** **** **** 5512"
              holder="Homer Simpson"
              expiry="03/20/2017"
            />
    
            <CreditCard
              number="**** **** **** 6136"
              holder="Tom Spacey"
              expiry="03/20/2017"
            />
            <CreditCard
              number="**** **** **** 1348"
              holder="Clyve Barker"
              expiry="03/20/2017"
            />
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  cardContainer:{
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: 'hidden'
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
