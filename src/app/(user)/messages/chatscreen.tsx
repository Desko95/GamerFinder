import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome from @expo/vector-icons

interface Message {
  id: number;
  text: string;
  user: string;
}

const ChatScreen: React.FC = () => {
  const [inputMessage, setInputMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputMessage,
        user: "You", // Replace with actual user information
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Text>{`${item.user}: ${item.text}`}</Text>
          </View>
        )}
      />
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            padding: 8,
          }}
          placeholder="Type your message..."
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
        />
        <TouchableOpacity
          onPress={handleSendMessage}
          style={{ marginLeft: 10 }}
        >
          <FontAwesome name="send" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
