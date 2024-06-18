import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { categories } from "../../constants";
import theme from "../../theme/theme";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <View style={S.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={S.categories}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        {categories.map((category) => (
          <View key={category.id} style={S.categoryItemContainer}>
            <TouchableOpacity
              onPress={() => setActiveCategory(category.id)}
              style={S.categoryItem}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={category.image}
              />
              <Text
                style={{
                  fontSize: theme.fontSizes.font_base,
                  color: theme.colors.background_color_white_light,
                }}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const S = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  categories: {
    overflow: "scroll",
  },

  categoryItemContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  categoryItem: {
    padding: 10,
    marginRight: 10,
    borderRadius: 100,
    backgroundColor: theme.colors.background_color_red_default,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
