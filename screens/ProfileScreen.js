import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  // Dummy profile data for demonstration
  const user = { name: "John Doe", email: "johndoe@example.com" };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.detail}>Name: {user.name}</Text>
      <Text style={styles.detail}>Email: {user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
  detail: { fontSize: 18, marginBottom: 10 },
});
