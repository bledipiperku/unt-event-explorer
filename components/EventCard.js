import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

export default function EventCard({ event }) {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.95);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 500 });
    scale.value = withTiming(1, { duration: 500 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Card style={styles.card} elevation={5}>
        {/* Header image */}
        <Card.Cover
          source={require("../assets/event_default.png")}
          style={styles.cover}
          imageStyle={styles.coverImage}
          resizeMode="cover"
        />
        <Card.Content style={styles.cardContent}>
          <Title style={styles.title}>{event.title}</Title>
          <View style={styles.infoRow}>
            <Ionicons name="calendar" size={16} color="#888" />
            <Paragraph style={styles.infoText}>{event.date}</Paragraph>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="location" size={16} color="#888" />
            <Paragraph style={styles.infoText}>{event.location}</Paragraph>
          </View>
        </Card.Content>
      </Card>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  card: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#caddfc",
  },
  cover: {
    height: 100,
    backgroundColor: "#caddfc",
    width: "100%",
  },
  coverImage: {
    margin: 0,
    padding: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingVertical: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  infoText: {
    marginLeft: 6,
    fontSize: 14,
    color: "#555",
  },
});
