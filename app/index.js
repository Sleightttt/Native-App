import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import styles from "../styles/style";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, FONT, icons, images } from "../constants";
import Welcome from "../components/Welcome/welcome";
import Popularjobs from "../components/PopularJobs/popularjobs";
import Nearbyjobs from "../components/NearbyJobs/nearbyjobs";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/screenheaderbtn";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "Dating App",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />

          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
