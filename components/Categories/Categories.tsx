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
                  color: theme.colors.background_color_gray_dark,
                  maxWidth: 100,
                  textAlign: "center",
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
  container: {},

  categories: {
    overflow: "scroll",
  },

  categoryItemContainer: {
    display: "flex",
  },

  categoryItem: {
    padding: 10,
    marginRight: 10,
    borderRadius: 100,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
