import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { COLORS, SIZES, FONT, icons, images } from "../../constants";

import styles from "./welcome.styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const jobTypes = [
  "Full Time",
  "Part Time",
  "Remote",
  "Freelance",
  "Internship",
];

function Welcome() {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full Time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, dude</Text>
        <Text style={styles.welcomeMessage}>Find your perfect date</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
            placeholderTextColor={COLORS.tertiary}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resize="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
}

export default Welcome;
