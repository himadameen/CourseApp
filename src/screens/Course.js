import { Image, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import courses from '../api/Courses';

const Course = () => {

  const courseCard = ({ item }) => {
    return (
      <>
        <View style={styles.main_card}>
          <View style={styles.snd_card}>
            <View style={styles.img_card}>
              <Image style={styles.img} source={item.image} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.btn}>
              <TouchableOpacity style={styles.btn_2}
                onPress={() => {

                }}>
                <Text style={styles.options}>Course Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    )
  }



  return (
    <>
      <View style={styles.data_card}>
        <FlatList style={styles.data} data={courses}
          keyExtractor={(item) => item.id}
          renderItem={courseCard} />
      </View>
    </>
  )
}

export default Course

const styles = StyleSheet.create({
  data_card: {
    width: "100%",
    height: undefined,
    backgroundColor: "#EEF1FF"
  },
  main_card: {
    backgroundColor: "#F9F9F9",
    margin: 25,
    borderRadius: 20
  },
  img_card: {
    width: "100%",
    height: "35vh",
  },
  img: {
    width: "90%",
    height: "80%",
    marginHorizontal: 20,
    marginVertical: 25,
    borderRadius: 20,
    filter: "brightness(90%)"
  },
  title: {
    marginVertical: 15,
    fontSize: "20px",
    fontWeight: 800,
    fontStyle: "Oblique",
    letterSpacing: 3,
    textAlign: 'center',
    paddingBottom: "30px",
    textTransform: "Uppercase",
    color: "red"
  },
  description: {
    fontSize: 16,
    color: "lavender-blush",
    textAlign: "left",
    fontWeight: 500,
    width: "90%",
    lineHeight: 25,
    marginHorizontal: 20,
  },
  btn: {
    width: "100%",
    height: "10vh",
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn_2: {
    backgroundColor: "black",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  options: {
    color: "white",
    fontSize: "15px",
    fontWeight: 600,
    letterSpacing: 2
  }
})