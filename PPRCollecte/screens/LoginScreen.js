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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (email === "admin@example.com" && password === "123456") {
      Alert.alert("✅ Connexion réussie !");
      navigation?.navigate?.("Home"); // navigation si elle est passée
    } else {
      Alert.alert("❌ Identifiants incorrects");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.pin}></View>
          <Text style={styles.syncIcon}>🛰</Text>
          <Text style={styles.logoText}>PPRCollecte</Text>
        </View>

        <Text style={styles.title}>Connexion à PPRCollecte</Text>

        {/* Email */}
        <Text style={styles.label}>Adresse e-mail</Text>
        <TextInput
          placeholder="exemple@domaine.com"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Mot de passe */}
        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          placeholder="••••••••"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        {/* Switch & lien */}
        <View style={styles.actions}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Switch value={remember} onValueChange={setRemember} />
            <Text style={{ marginLeft: 8 }}>Se souvenir</Text>
          </View>
          <Text style={styles.link}>Mot de passe oublié ?</Text>
        </View>

        {/* Bouton */}
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={{ color: "#0f172a", fontWeight: "bold" }}>
            Se connecter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b82f6",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  loginBox: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
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
    backgroundColor: "#a0e7ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    alignSelf: "center",
    position: "relative",
  },
  pin: {
    width: 25,
    height: 25,
    backgroundColor: "#2196f3",
    borderRadius: 50,
    transform: [{ rotate: "-45deg" }],
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
