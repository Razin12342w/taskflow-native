import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo List</Text>
      </View>

      <View style={styles.body}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>

        <Text style={styles.today}>Today</Text>
        <Text style={styles.date}>March 4,2010</Text>

        <View style={styles.taskBox}>
          <Text
            style={[
              styles.taskText,
              {
                textDecorationLine: "line-through",
                opacity: 0.5,
              },
            ]}
          >
            ☑ Do exercise
          </Text>
        </View>
        <View style={styles.taskBox}>
          <Text
            style={[
              styles.taskText,
              {
                textDecorationLine: "line-through",
                opacity: 0.5,
              },
            ]}
          >
            o Do Exercise
          </Text>
        </View>
        <View style={styles.taskBox}>
          <Text style={styles.taskText}>○ Make veg salad</Text>
          <Text style={styles.time}>10:00 am</Text>
        </View>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00CFC8",
  },
  header: {
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  body: {
    backgroundColor: "#111",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
    position: "relative",
    minHeight: "80%",
  },
  today: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  date: {
    fontSize: 16,
    color: "grey",
    marginBottom: 20,
  },
  taskBox: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    marginBottom: 15,
    borderRadius: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  taskText: {
    color: "grey",
    fontSize: 18,
  },
  time: {
    color: "#aaa",
    fontSize: 15,
  },
  addButton:{
    width:70,
    height:70,
    borderRadius:35,
    justifyContent:"center",
    backgroundColor:"#00CFC8",
    alignItems:"center",
    bottom:30,
    right:30,
    position:"absolute"
  },
  plus: {
    marginTop: -5,
    fontSize: 40,
    color:"#000"
  },
});