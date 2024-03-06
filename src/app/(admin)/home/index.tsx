import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import Colors from "@/src/constants/Colors";

const HomeScreen: React.FC = () => {
  // Dummy data for posts
  const posts = [
    { id: "1", title: "Bestemmie 1", content: "Dio" },
    { id: "2", title: "Bestemmie 2", content: "lama donna" },
    { id: "3", title: "Bestemmie 3", content: "anubis" },
    // Add more posts as needed
  ];

  // Dummy data for horizontal flatlist
  const horizontalData = [
    { id: "1", title: "perche sta" },
    { id: "2", title: "porcodio di" },
    { id: "3", title: "flat list ORIZZONTALE" },
    { id: "4", title: "demmerda" },
    { id: "5", title: "non" },
    { id: "6", title: "è " },
    { id: "7", title: "orizzontale?" },
    { id: "8", title: "dio scalzo" },
    { id: "9", title: "Item 3" },
    { id: "0", title: "Item 3" },

    // Add more items as needed
  ];

  return (
    <View style={styles.container}>
      {/* Horizontal FlatList */}
      <ScrollView horizontal>
        <FlatList
          data={horizontalData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.horizontalItem}>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </ScrollView>

      {/* Vertical FlatList for posts */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  horizontalItem: {
    backgroundColor: Colors.light.background,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  postItem: {
    backgroundColor: Colors.light.background,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  postTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default HomeScreen;
