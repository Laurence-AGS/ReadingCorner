import { useState, useEffect } from "react";
import { Redirect } from "expo-router";
import { AppState, AppStateStatus, StyleSheet } from "react-native";

import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HomeScreen() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Fetch the initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    // Handle app state changes for session auto-refresh
    const handleAppStateChange = (state: AppStateStatus) => {
      if (state === "active") {
        supabase.auth.startAutoRefresh();
      } else {
        supabase.auth.stopAutoRefresh();
      }
    };

    // Subscribe to app state changes
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    // Clean up
    return () => {
      subscription.remove();
      authListener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* {session && session.user ? <Redirect href="/(root)" /> : <Redirect href="/(auth)" />} */}
      <Redirect href="/(root)" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
