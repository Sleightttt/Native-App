import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";

import { Stack, useRouter, useSearchParams } from "expo-router";

import { useCallback, useState } from "react";
// import {
//   Company,
//   JobAbout,
//   JobFooter,
//   JobTabs,
//   ScreenHeaderBtn,
//   Specifics,
// } from "../../components";

import { COLORS, SIZES, FONT, icons, images } from "../../constants";
import useFetch from "../../hook/useFetch";

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();
  return <Text>JobDetails</Text>;
};

export default JobDetails;
