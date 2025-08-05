import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

const imgURI =
  "https://media.istockphoto.com/id/1467739359/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=612x612&w=0&k=20&c=tE80r7iDn7S9YwIJVuKAm5KmpJPVz5HbRDc975IlKVo=";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ImageBackground
      contentPosition="center"
      source={{ uri: imgURI }}
      style={styles.background}
    >
      <TouchableOpacity onPress={() => router.push("/menu")}>
        <Text style={styles.buttonText}>Browse our special coffee ☕️</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

interface Styles {
  background: ViewStyle;
  buttonText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  background: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    backgroundColor: "#F9F6F095",
    color: "#3C3431",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
