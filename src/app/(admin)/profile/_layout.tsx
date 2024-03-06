import Colors from "@/src/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function ProfileStack() {
  return (
    <Stack>
      <Stack.Screen
        name="profile"
        options={{
          title: "Profile",
          headerRight: () => (
            <Link href="/(admin)/profile/editProfile" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      
    </Stack>
  );
}
