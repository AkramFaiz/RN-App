import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "sans-serif",
    color: "#FFFFFF",
  },
  error: { color: "#b12323" },
  image: {
    flex: 1,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  largeText: {
    fontSize: 24,
  },
  normalText: {
    fontSize: 14,
  },
  textWhite: {
    color: "#FFFFFF",
  },
  textBlue: {
    backgroundColor: "blue",
    color: "#FFFFFF",
  },
  inputStyle: {
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    marginBottom: 5,
    borderColor: "grey",
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 16,
  },
  loaderContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorText: { color: "red" },
  screen: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchOverlay: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  }

});
