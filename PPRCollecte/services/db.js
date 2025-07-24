import { useSQLiteContext } from "expo-sqlite";

export function useDatabase() {
  const db = useSQLiteContext();

  if (!db) {
    throw new Error(
      "SQLite context not found. Make sure SQLiteProvider is active."
    );
  }

  const initDB = async () => {
    try {
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS login (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nom TEXT,
          prenom TEXT,
          mail TEXT,
          mdp TEXT,
          role TEXT
        );
      `);
    } catch (err) {
      console.error("Erreur initDB:", err);
    }
  };

  const insertDummyUser = async () => {
    try {
      const results = await db.getAllAsync(
        `SELECT * FROM login WHERE mail = ?`,
        ["admin@example.com"]
      );
      if (results.length === 0) {
        await db.runAsync(
          `INSERT INTO login (nom, prenom, mail, mdp, role) VALUES (?, ?, ?, ?, ?)`,
          ["Admin", "PPR", "admin@example.com", "123456", "agent"]
        );
      }
    } catch (err) {
      console.error("Erreur insertDummyUser:", err);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const results = await db.getAllAsync(
        `SELECT * FROM login WHERE mail = ? AND mdp = ?`,
        [email, password]
      );
      return results[0] || null;
    } catch (err) {
      console.error("Erreur loginUser:", err);
      return null;
    }
  };

  return { initDB, insertDummyUser, loginUser };
}
