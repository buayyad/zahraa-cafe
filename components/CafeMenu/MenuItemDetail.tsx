import { menu } from "@/data/menu/menu";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const MenuItemDetail = () => {
  const { id } = useLocalSearchParams();
  const menuItemDetails = menu.find((item) => item.id === Number(id));

  return (
    <View style={styles.container}>
      <View style={styles.headerImageContainer}>
        <Image
          contentFit="cover"
          style={styles.headerImage}
          source={{ uri: menuItemDetails?.image }}
        />
        <LinearGradient
          colors={["transparent", "#F9F6F0"]}
          style={styles.headerGradient}
        />
      </View>

      <View style={styles.menuDetails}>
        <Text style={styles.menuTitle}>{menuItemDetails?.name}</Text>
        <Text style={styles.menuDescription}>
          {menuItemDetails?.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F6F0",
    height: "100%",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundText: {
    fontSize: 18,
    color: "#4e3f39",
  },
  headerImageContainer: {
    position: "relative",
    height: 300,
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  headerGradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "40%",
  },
  menuDetails: {
    justifyContent: "center",
    alignItems: "center",
    rowGap: 20,
    paddingHorizontal: 20,
  },
  menuTitle: {
    fontSize: 28,
    color: "#4e3f39",
  },
  menuDescription: {
    fontSize: 16,
    color: "#4e3f39",
  },
});

export default MenuItemDetail;
