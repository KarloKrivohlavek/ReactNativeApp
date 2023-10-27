import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Details() {
  const route = useRoute();

  const item = route.params.item;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.priceRatingContainer}>
        <Text style={styles.price}>Price: ${item.price}</Text>

        <Text style={styles.price}>Rating: {item.rating.rate}</Text>
      </View>
      <View style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy</Text>
      </View>

      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    marginLeft: 20,
  },
  desc: {
    fontSize: 14,
  },
  priceRatingContainer: {
    flexDirection: "row",
  },
  buyButton: {
    backgroundColor: "red",
    borderRadius: 5,
    textAlign: "center",
    width: 100,
    alignSelf: "center",
  },
  buyButtonText: {
    textAlign: "center",
    fontSize: 20,
  },
});
