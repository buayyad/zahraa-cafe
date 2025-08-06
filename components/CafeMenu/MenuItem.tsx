import { MenuItemTypes } from "@/data/menu/menu";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface MenuItemProps {
  menuItem: MenuItemTypes;
}

const MenuItem = ({ menuItem }: MenuItemProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/menu-item-detail?id=${menuItem.id}`)}
      key={menuItem.id}
      style={styles.menuItem}
    >
      <Image
        contentFit="contain"
        source={{ uri: menuItem.image }}
        style={styles.menuImage}
      />
      <Text style={styles.menuText}>{menuItem.name}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  menuImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  menuText: {
    color: "#3C3431",
    fontSize: 12,
    width: 160,
    textAlign: "center",
  },
  menuItem: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});
