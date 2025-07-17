import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const userPosition = {
    latitude: 7.5,
    longitude: 10.5,
    latitudeDelta: 50,
    longitudeDelta: 50,
  };

  return (
    <View style={styles.container}>
      {/* Barre du haut */}
      <View style={styles.topBar}>
        <View style={styles.profile}>
          <View style={styles.avatar}></View>
          <Text style={styles.agentText}>Agent Terrain</Text>
        </View>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.logoutText}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>

      {/* Carte */}
      <MapView style={styles.map} initialRegion={userPosition}>
        <Marker
          coordinate={{
            latitude: userPosition.latitude,
            longitude: userPosition.longitude,
          }}
          title="Vous êtes ici"
          pinColor="red"
        />
      </MapView>

      {/* Bouton flottant */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() =>
          Alert.alert("➕ Nouvelle collecte", "Formulaire à ouvrir")
        }
      >
        <Text style={{ fontSize: 30, color: "white" }}>+</Text>
      </TouchableOpacity>

      {/* Barre d'état GPS */}
      <View style={styles.statusBar}>
        <Text>📡 GPS: Activé | 🔄 Sync: 11h30 | 🌐 En ligne</Text>
      </View>

      {/* Boutons bas */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => Alert.alert("💾 Données sauvegardées")}
        >
          <FontAwesome5 name="save" size={14} color="#fff" />
          <Text style={styles.btnText}> Sauvegarder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.syncBtn}
          onPress={() => Alert.alert("🔄 Synchronisation lancée")}
        >
          <FontAwesome5 name="sync" size={14} color="#fff" />
          <Text style={styles.btnText}> Synchroniser</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => setMenuOpen(!menuOpen)}
        >
          <Entypo name="menu" size={18} color="#fff" />
          <Text style={styles.btnText}> Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Légende */}
      <View style={styles.legend}>
        <Text>
          ➕ Nouvelle collecte | 📍 Position GPS | 🔄 Sync offline/online
        </Text>
      </View>

      {/* Menu latéral (optionnel, à faire plus tard) */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 50, // 🔽 plus bas
  },
  topBar: {
    backgroundColor: "#1976d2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12, // 🟢 Moins d’espace en haut
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#1565c0",
  },
  profile: { flexDirection: "row", alignItems: "center" },
  agentText: { color: "#fff", fontSize: 16 },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  logoutButton: {
    backgroundColor: "#64b5f6",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  logoutText: { color: "#fff", fontSize: 14 },
  map: { flex: 1 },
  fab: {
    position: "absolute",
    bottom: 185, // 🔼 avant : 120
    right: 20,
    width: 56,
    height: 56,
    backgroundColor: "#1976d2",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    zIndex: 10,
  },
  statusBar: {
    backgroundColor: "#e3f2fd",
    alignItems: "center",
    padding: 6,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 4,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ccc",
    marginBottom: Platform.OS === "ios" ? 18 : 6, // 🔼 remonte la barre bas
  },
  saveBtn: {
    flexDirection: "row",
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  syncBtn: {
    flexDirection: "row",
    backgroundColor: "#2196f3",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  menuBtn: {
    flexDirection: "row",
    backgroundColor: "#757575",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: { color: "#fff", marginLeft: 4, fontSize: 14 },
  legend: {
    backgroundColor: "#fff",
    padding: 6,
    borderTopWidth: 0,
    borderColor: "#ddd",
    alignItems: "center",
    marginBottom: Platform.OS === "ios" ? 30 : 8, // 🔼 on remonte légèrement la légende
  },
});
