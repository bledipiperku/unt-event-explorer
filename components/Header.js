import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Ionicons name="md-calendar" size={28} color="#fff" style={styles.icon} />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: "#6200ee",
    paddingHorizontal: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  icon: { marginRight: 10 },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
  },
});
