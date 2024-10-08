import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: "row",
    padding: 10,
  },
  image: { width: 50, height: 50, borderRadius: 10 },
  contentContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: "space-between"
  },
  title: { fontSize: 18, fontWeight: "bold", color: "#333" },
  subTitle: { fontSize: 14, color: "#666", marginVertical: 4 },
  details: { fontSize: 12, color: "#666" },
  description: { fontSize: 12, color: "#333", marginTop: 8 },
});
