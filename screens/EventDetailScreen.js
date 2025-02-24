import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function EventDetailScreen({ route }) {
  const { event } = route.params;
  const region = {
    latitude: event.latitude,
    longitude: event.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <LinearGradient colors={["#caddfc", "#5c99fa"]} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{event.title}</Text>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.detailRow}>
            <Ionicons
              name="calendar"
              size={20}
              color="#6200ee"
              style={styles.detailIcon}
            />
            <Text style={styles.detailText}>Date: {event.date}</Text>
          </View>
          <View style={styles.detailRow}>
            <Ionicons
              name="location"
              size={20}
              color="#6200ee"
              style={styles.detailIcon}
            />
            <Text style={styles.detailText}>Location: {event.location}</Text>
          </View>
          <View style={styles.detailRow}>
            <Ionicons
              name="information-circle"
              size={20}
              color="#6200ee"
              style={styles.detailIcon}
            />
            <Text style={styles.detailText}>
              Description: {event.description}
            </Text>
          </View>
        </View>
        <View style={styles.mapContainer}>
          <MapView style={styles.map} region={region} customMapStyle={mapStyle}>
            <Marker
              coordinate={{
                latitude: event.latitude,
                longitude: event.longitude,
              }}
              title={event.title}
            />
          </MapView>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const mapStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }],
  },
  {
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#f5f5f5" }],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdbdbd" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#dadada" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c9c9c9" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
];

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: "center",
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  detailContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 15,
    padding: 20,
    width: "100%",
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  detailIcon: {
    marginRight: 10,
  },
  detailText: {
    fontSize: 18,
    color: "#333",
    flex: 1,
    flexWrap: "wrap",
  },
  mapContainer: {
    borderRadius: 15,
    overflow: "hidden",
    width: Dimensions.get("window").width - 40,
    height: 250,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
