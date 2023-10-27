import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
export default function Home() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const URL = "https://fakestoreapi.com/products";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const handleItemPress = (item) => {
    navigation.navigate("Details", { item });
  };

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleItemPress(item)}>
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.title} </Text>
                <Text style={styles.price}>{item.price}$ </Text>
                <View style={styles.buyButton}>
                  <Text style={styles.buyButtonText}>Buy</Text>
                </View>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 5,
    borderWidth: 2,
    marginVertical: 2,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },
  infoContainer: {
    flexDirection: "column",
    width: "60%",
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    borderRadius: 30,
  },
  title: {
    textAlign: "center",
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 6,
    color: "#20232a",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
  price: {
    fontSize: 15,
    textAlign: "center",
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
