import Feather from "@expo/vector-icons/Feather";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [input, setInput] = useState<string>();

  const status = useQuery({
    queryKey: ["get-health"],
    queryFn: async () => {
      return axios
        .get("http://localhost:8888/chat/conversations")
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  });

  // const mutation = useMutation({
  //   mutationFn: (newMessage: string) => {
  //     return axios.post("http://localhost:8888/chat/conversations", {
  //       userMessage: newMessage,
  //       preferences: {
  //         mealType: [],
  //         mealOccasion: [],
  //         cookingEquipment: [],
  //         cookingTime: [],
  //         skillLevel: [],
  //         nutrition: [],
  //         cuisine: [],
  //         spiceLevel: [],
  //         meat: [],
  //         vegetables: [],
  //         servings: 0,
  //       },
  //     });
  //   },
  // });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#fff7ed" }}
    >
      {/* Chat messages */}
      <View style={{ flex: 1 }}></View>
      {/* Chat input */}
      <View
        style={{
          // backgroundColor: "#f22",
          padding: 20,
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{
            backgroundColor: "#fff",
            fontSize: 15,
            padding: 15,
            borderTopLeftRadius: 200,
            borderBottomLeftRadius: 200,
            flex: 1,
          }}
          placeholderTextColor="#999"
          value={input}
          onChangeText={setInput}
          placeholder="Tell me what you crave"
        />
        <View
          style={{
            backgroundColor: "#fff",
            borderTopRightRadius: 200,
            borderBottomRightRadius: 200,
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 2,
            flexDirection: "row",
          }}
        >
          {/* <Pressable style={{ padding: 10 }}>
            <Ionicons name="mic-outline" size={24} color="black" />
          </Pressable> */}
          <Pressable
            style={{
              width: 42,
              height: 42,
              backgroundColor: "#ff6900",
              borderRadius: "100%",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Feather name="send" size={18} color="white" />
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
