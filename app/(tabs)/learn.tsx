import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, Button } from "react-native";
import Card from "@/components/card";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#0a7ea4", dark: "#0a7ea4" }}
      headerImage={
        <Ionicons size={310} name="book" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Learn</ThemedText>
      </ThemedView>
      <ThemedText>
        Learn to play chess and get better at the game with lessons, and
        <ThemedText style={{ fontWeight: "bold" }}> Game Review </ThemedText>
      </ThemedText>

      
      <Card>
        <ThemedText type="subtitle" style={styles.whiteText}> Learn The Pieces </ThemedText>
        <ThemedText style={styles.whiteText}> Learn the names of the pieces and how they move on the chess board. </ThemedText>
      </Card>

      <Card>
        <ThemedText type="subtitle" style={styles.whiteText}> Lessons </ThemedText>
        <ThemedText style={styles.whiteText}> Learn the fundamentals of the game, how to win, what you should be doing.</ThemedText>
      </Card>




      
      
    </ParallaxScrollView>
  );
}


const styles = StyleSheet.create({
  headerImage: {
    color: "#ff7f00",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  // This WhiteText is for the text that is inside of the Card view. It turns the text to be the color white.
  whiteText: {
    color: "#FFFFF"    
  },

  ittyBittyPadding: {
    top: 5
  }
});
