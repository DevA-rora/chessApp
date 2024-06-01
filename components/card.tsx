import React, { useState } from "react";
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Linking, Platform } from "react-native";
import * as Haptics from "expo-haptics";

const Card = ({ children, link }) => {
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    if (Platform.OS == "ios" || Platform.OS == "android") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    }
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    if (link) {
      Linking.openURL(link);
    }
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={handlePress}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <View style={styles.cardContent}>
          {children}
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#28241c",
    shadowOffset: { width: -5, height: 5 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
});

export default Card;
