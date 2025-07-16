import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Switch,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (email === "admin@example.com" && password === "123456") {
      Alert.alert("✅ Connexion réussie !");
      navigation?.navigate?.("Home");
    } else {
      Alert.alert("❌ Identifiants incorrects");
    }
  };

  return (
    <LinearGradient colors={["#3b82f6", "#10b981"]} style={styles.container}>
      <View style={styles.loginBox}>
        {/* Logo avec gradient et icône localisation */}
        <LinearGradient
          colors={["#e0f7ff", "#ccfbf1"]}
          style={styles.logoContainer}
        >
          <FontAwesome5 name="map-marker-alt" size={32} color="#2196f3" />
          <Text style={styles.syncIcon}>🛰</Text>
          <Text style={styles.logoText}>PPRCollecte</Text>
        </LinearGradient>

        <Text style={styles.title}>Connexion à PPRCollecte</Text>

        <Text style={styles.label}>Adresse e-mail</Text>
        <TextInput
          placeholder="exemple@domaine.com"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#cbd5e1"
        />

        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          placeholder="••••••••"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#cbd5e1"
        />

        <View style={styles.actions}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Switch value={remember} onValueChange={setRemember} />
            <Text style={{ marginLeft: 8 }}>Se souvenir</Text>
          </View>
          <Text style={styles.link}>Mot de passe oublié ?</Text>
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={{ color: "#0f172a", fontWeight: "bold" }}>
            Se connecter
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  loginBox: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 20,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 16,
    position: "relative",
  },
  syncIcon: {
    position: "absolute",
    top: 2,
    right: 2,
    fontSize: 14,
    color: "#4caf50",
    transform: [{ rotate: "15deg" }],
  },
  logoText: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "bold",
    color: "#1b1b1b",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
    color: "#0f172a",
  },
  label: {
    marginTop: 10,
    marginBottom: 4,
    fontSize: 15,
    color: "#1e293b",
  },
  input: {
    backgroundColor: "#334155",
    color: "#f1f5f9",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  link: {
    color: "#38bdf8",
    fontSize: 13,
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: "#38bdf8",
    padding: 14,
    alignItems: "center",
    borderRadius: 8,
  },
});
