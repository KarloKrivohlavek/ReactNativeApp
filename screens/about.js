import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import image from "../assets/image.jpg";
export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>API zadatak - Web shop</Text>
      <Text style={styles.title3}>
        Korišten React Native, Expo, React Navigation
      </Text>
      <Text style={styles.title3}>Za API korišten Fake Store API </Text>
      <Image source={image} style={styles.imageStyle} />

      <Text style={styles.title2}>Napravio : Karlo Krivohlavek</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    marginVertical: 50,

    width: 200,
    height: 200,
    borderRadius: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  title2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  title3: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  container: {
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "black",
    flex: 1,
  },
});
