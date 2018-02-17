import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

export default class extends React.Component {
  render() {
    const { container, header } = styles;
    const { title } = this.props;
    return (
      <View style={[container]}>
        <Text color="#ffffff" style={[header]}>{title}</Text>
        <Icon
          raised
          name="plus"
          type="entypo"
          color="#fefefd"
          size={30}
          iconStyle={{ margin: 0, padding: 0 }}
          containerStyle={{
            backgroundColor: "transparent",
            margin: 0,
            padding: 0
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  header: {
    fontSize: 32,
    color: "#ffffff",
    textShadowColor: "rgba(0,0,0,0.25)",
    textShadowRadius: 2,
    textShadowOffset: { width: 0, height: 3 }
  }
});
