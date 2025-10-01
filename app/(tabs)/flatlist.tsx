import { FlatList, StyleSheet } from "react-native";

import { Text } from "@/components/Themed";

const clubs = [
  { id: "1", title: "EP", description: "21!21!21!" },
  { id: "2", title: "XBX", description: "opening prayer" },
  { id: "3", title: "PKA", description: "country" },
  { id: "4", title: "XCD", description: "too cool for school" },
  { id: "5", title: "OX", description: "izzie's club" },
];

export default function FlatListScreen() {
  return (
    <FlatList
      data={clubs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
