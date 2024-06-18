import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import theme from "../theme/theme";

export default function HomeScreen() {
  return (
    <SafeAreaView style={S.container}>
      <StatusBar style="dark" />

      <View style={S.header}>
        <View style={S.topBar}>
          <Icon.Search height={25} width={25} color="gray" />
          <TextInput style={S.inputSearch} placeholder="Search" />
          <View style={S.MapPin}>
            <Icon.MapPin height={20} width={20} color="gray" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const S = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    borderWidth: 2,
    marginTop: 40,
    paddingBottom: 40,
  },

  topBar: {
    flexDirection: "row",
    flex: 1,
    borderWidth: 2,
    alignItems: "center",
    borderRadius: 100,
    borderColor: theme.colors.border_color_default,
    padding: 10,
  },

  inputSearch: {
    marginLeft: 10,
    flex: 1,
  },

  MapPin: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0,
    borderLeftWidth: 2,
    borderLeftColor: theme.colors.border_color_default,
    paddingLeft: 10,
  },
});
