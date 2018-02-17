import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Font } from "expo";

import { LinearGradient } from "expo";

export default class extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "fa-brands": require("../../assets/fonts/fa-brands-400.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { fontLoaded } = this.state;
    const { number, holder, expiry } = this.props;
    return (
      <View style={[styles.shadowContainer]}>
        <LinearGradient
          colors={["#898c9b", "#4d5061"]}
          start={[0, 0]}
          end={[1, 1]}
          style={[styles.cardContainer]}
        >
          {fontLoaded && <Text style={[styles.visaLogo]}>&#xf1f0;</Text>}
          <Text style={[styles.cardNumber]}>{number}</Text>
          <View style={[styles.secondaryInfo]}>
            <View>
              <Text style={[styles.secondaryTitle]}>Card Holder</Text>
              <Text style={[styles.secondaryValue]}>{holder}</Text>
            </View>
            <View>
              <Text style={[styles.secondaryTitle]}>Expiry</Text>
              <Text style={[styles.secondaryValue]}>{expiry}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    borderRadius: 6
  },
  shadowContainer: {
    flex: 1,
    backgroundColor: "white",
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    margin: 20,
    borderRadius: 8,
  },
  visaLogo: {
    fontFamily: "fa-brands",
    fontSize: 32,
    color: "#fff"
  },
  cardNumber: {
    color: "white",
    fontSize: 32,
    padding: 20
  },
  secondaryInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  secondaryTitle: {
    color: "#9c9fa9",
    fontSize: 12
  },
  secondaryValue: {
    color: "#ffffff",
    fontSize: 16,
    paddingTop: 4,
    paddingBottom: 4
  }
});
