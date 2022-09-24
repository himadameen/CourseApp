import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.img_box}>
          <Image style={styles.img} source={require('../../assets/img1.jpg')} />
        </View>
        <View style={styles.content}>
          <Text style={styles.txt}>Welcome to</Text>
          <Text style={styles.txt_1}>Red Fox Education</Text>
          <Text style={styles.txt_2}>A journey of <Text style={{ color: "green" }}>success</Text></Text>
          <Text style={styles.txt_2}>begin with <Text style={{ color: "green" }}>single</Text> step 👣</Text>
          <Text style={styles.txt_3}>Fun learning with Red Fox it takes you with innovative towards software tech stack and take you another level of challenging future</Text>
        </View>
      </View>
      <View style={styles.menu_bar}>
        <View style={styles.line}></View>
        <Menu />
        <View style={styles.line}></View>
      </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({

  body: {
    flex: 1,
    width: "100%",
  },
  img_box: {
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 40,
    backgroundColor: "#F9F9F9",
  },
  img: {
    height: undefined,
    aspectRatio: 1.5,
    resizeMode: "cover",
    margin: 20,
    borderRadius: 20
  },
  content: {
    // backgroundColor: "beige",
    marginTop: 10,
    marginHorizontal: 10,
    height: "60%",
  },
  txt: {
    textAlign: 'center',
    fontSize: "28px",
    fontWeight: 600,
    letterSpacing: 4,
    textTransform: "capitalize",
    marginVertical: 15,
    textStyle: "italic"
  },
  txt_1: {
    color: "red",
    textAlign: "center",
    fontSize: 25,
    fontWeight: 600,
    letterSpacing: 5,
    marginVertical: 15,
    fontStyle: "oblique",
    textTransform: "uppercase",
  },
  txt_2: {
    marginVertical: 14,
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: 3,
    textAlign: "center",
    textTransform: "capitalize",
  },
  txt_3: {
    fontSize: 20,
    fontWeight: 400,
    margin: 20,
    textTransform: "capitalize",
    lineHeight: 35,
  },
  menu_bar: {
    marginVertical: -20,
  },
  line: {
    borderWidth: 1,
    borderColor: "grey",
    marginVertical: 20,
    left: "5%",
    marginRight: "10%"
  }
})