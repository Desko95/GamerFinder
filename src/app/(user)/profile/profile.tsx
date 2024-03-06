import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome from @expo/vector-icons
import { defaultPizzaImage } from "@/src/components/ProductListItem";


const ProfileScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* Profile Image */}
      <Image
        source={{ uri: defaultPizzaImage }} // Replace 'profileImageURI' with the actual image URI
        style={{ width: 150, height: 150, borderRadius: 75 }}
      />
      {/* User Nickname */}
      <Text style={{ marginTop: 20, fontSize: 20 }}>User Nickname</Text>
      {/* User Bio */}
      <Text style={{ marginTop: 10, fontSize: 16 }}>User Bio</Text>
      {/* Edit Profile Icon */}
      
    </View>
  );
};

export default ProfileScreen;



// import { FlatList } from 'react-native';
// import products from '@/assets/data/products';
// import ProductListItem from '@/src/components/ProductListItem';
// import { View } from '@/src/components/Themed';

// export default function ProfileScreen() {
//   return (
//     <View>
//       Ciao
//     </View>
//   );
// }
