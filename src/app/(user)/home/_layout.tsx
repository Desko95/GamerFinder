import Colors from "@/src/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function homeStack() {
  return (
    <Stack screenOptions={{
      headerRight: () => (
        <Link href="/cart" asChild>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome
                name="home"
                size={25}
                color={Colors.light.tint}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </Link>
      ),
    }}>
      <Stack.Screen name="index" options={{ title: 'home' }} />
    </Stack>
  );
}