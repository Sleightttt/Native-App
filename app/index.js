import { View, Text, ScrollView, SafeAreaView } from "react-native";
import styles from "../styles/style";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, FONT } from "../constants/theme";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      styles={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
            shadowColor: "transparent",
            elevation: 0,
          },
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
