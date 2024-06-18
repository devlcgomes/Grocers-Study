import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import theme from "../theme/theme";
import Categories from "../components/Categories/Categories";

export default function HomeScreen() {
  return (
    <SafeAreaView style={S.container}>
      <StatusBar style="dark" />
      {/* SearchBar */}
      <View style={S.header}>
        <View style={S.topBar}>
          <Icon.Search height={25} width={25} color="gray" />
          <TextInput style={S.inputSearch} placeholder="Search" />
          <View style={S.MapPin}>
            <Icon.MapPin height={20} width={20} color="gray" />
            <Text style={S.location}>Rio de Janeiro, RJ</Text>
          </View>
        </View>
        <View style={S.Sliders}>
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth={2.5}
            stroke={"white"}
          />
        </View>
      </View>

      {/* Main */}

      <ScrollView
        style={S.mainScrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Categories */}
        <Categories />
      </ScrollView>
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
    padding: 10,
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

  location: {
    color: theme.colors.color_gray_text_default,
    marginLeft: 10,
  },

  Sliders: {
    padding: 10,
    backgroundColor: theme.colors.background_color_red_default,
    borderRadius: 100,
    marginLeft: 10,
  },

  mainScrollView: {},
});
