import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Card from "@/components/Card";
import * as WebBrowser from "expo-web-browser";

// TODO: Organise this file so that it actually makes sense
// TODO: Find a way to implement the card components similar to the actual chess.com chess app

// This is the top banner for the puzzle
export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#FFA500", dark: "#FFA500" }}
      headerImage={
        <Ionicons
          size={310}
          name="extension-puzzle-outline"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Puzzles</ThemedText>
      </ThemedView>

      <ThemedText>
        Chess puzzles to sharpen your tactical skills and strategic thinking.
      </ThemedText>

      <Card link="https://lichess.org/training" image={require("/Users/devarora/Code-Projects/Web-Apps/chessApp/chessApp/assets/images/adaptive-icon.png")}>
        <ThemedText type="subtitle" style={styles.whiteText}> Puzzles </ThemedText>
        <ThemedText type="defaultSemiBold" style={styles.greyText}> Train with over 500,000 puzzles. </ThemedText>
      </Card> 

      <Card link="https://www.chess.com/puzzles/rush" image={require("/Users/devarora/Code-Projects/Web-Apps/chessApp/chessApp/assets/images/adaptive-icon.png")}> 
        <ThemedText type="subtitle" style={styles.whiteText}> Puzzle Rush </ThemedText>
        <ThemedText type="defaultSemiBold" style={styles.greyText}> Race against the clock, 3 strikes and you're out! </ThemedText>
      </Card>

      <Card link="https://www.chess.com/puzzles/battle" image={require("/Users/devarora/Code-Projects/Web-Apps/chessApp/chessApp/assets/images/adaptive-icon.png")}> 
        <ThemedText type="subtitle" style={styles.whiteText}> Puzzle Battle </ThemedText>
        <ThemedText type="defaultSemiBold" style={styles.greyText}> Rush against another player to win! </ThemedText>
      </Card>

      <Card link="https://www.chess.com/daily-chess-puzzle" image={require("/Users/devarora/Code-Projects/Web-Apps/chessApp/chessApp/assets/images/adaptive-icon.png")}> 
        <ThemedText type="subtitle" style={styles.whiteText}> Daily Puzzle </ThemedText>
        <ThemedText type="defaultSemiBold" style={styles.greyText}> Puzzles get harder throughout the week </ThemedText>
      </Card>

      <Card link="" image={require("/Users/devarora/Code-Projects/Web-Apps/chessApp/chessApp/assets/images/adaptive-icon.png")}> 
        <ThemedText type="subtitle" style={styles.whiteText}> Custom Puzzles </ThemedText>
        <ThemedText type="defaultSemiBold" style={styles.greyText}> Choose puzzles by theme and rating </ThemedText>
      </Card>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  whiteText: {
    color: "#FFFFFF",
  },
  greyText: {
    color: "#a19d9d",
  },
});
