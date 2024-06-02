import React from 'react';
import { Image, StyleSheet, Platform, View } from 'react-native';
import Chessboard from 'react-native-chessboard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.reactLogo}
          />
        }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome Dev Arora!</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedText type="defaultSemiBold"> Warmup by playing some chess with yourself! </ThemedText>
        <View style={styles.chessboardContainer}>
          <Chessboard style={styles.chessboard} />
        </View>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Your Plan for Today:</ThemedText>
          <ThemedText>
            Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
            Press{' '}
            <ThemedText type="defaultSemiBold">
              {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
            </ThemedText>{' '}
            to open developer tools.
          </ThemedText>
        </ThemedView>
      </ParallaxScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  chessboardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  chessboard: {
    width: 10, // Adjust the width to make the chessboard smaller
    height: 10, // Adjust the height to make the chessboard smaller
  },
});
