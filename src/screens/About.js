import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const About = () => {

  const [detail, setDetail] = useState([]);

  const callApi = async () => {
    const url = await fetch('https://thapatechnical.github.io/userapi/users.json');
    const response = await url.json();
    setDetail(response);
  }

  const data = ({ item }) => {
    return (
      <>
        <View style={styles.data_s}>
          <View style={styles.cards}>
            <View style={styles.image_card}>
              <Image style={styles.images} source={{
                uri: item.image
              }} />
            </View>
            <View style={styles.cnt}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.common}>{item.email}</Text>
              <Text style={styles.common}>+91 {item.mobile}</Text>
            </View>
          </View>
        </View>
      </>
    )
  }

  useEffect(() => {
    callApi()
  }, [])

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Red Fox Education</Text>
        <Text style={styles.vission}>Your dream <Text style={{ color: "green" }}>Our Goal</Text> !!</Text>
        <View style={styles.img_box}>
          <Image style={styles.img} source={require('../../assets/logo.png')} />
        </View>
        <View style={styles.description}>
          <Text style={styles.title_2}>About me</Text>
          <Text style={styles.descrip_2}>
            We offer comprehensive online classes to children and adults globally for gaining interest towards Software development. Join our Global Classroom where students of all ages and from all over the world learn with experienced, passionate and committed educators.
          </Text>
        </View>
        <View style={styles.mentors}>
          <Text style={styles.member}>Potential Members</Text>
          <FlatList data={detail} renderItem={data}
            horizontal showsHorizontalScrollIndicator={false} />
        </View>
        <Text style={styles.social_txt}>Follow on social network</Text>
        <View style={styles.social}>
          <TouchableOpacity style={styles.btn_s} onPress={() => {
            Linking.openURL('https://www.instagram.com/redfoxedtech/')
          }}>
            <Image style={styles.social_icons} source={{
              uri: "	https://cdn-icons-png.flaticon.com/128/733/733558.png"
            }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_s} onPress={() => {
            Linking.openURL('https://www.facebook.com/redfoxeducation')
          }}>
            <Image style={styles.social_icons} source={{
              uri: "https://cdn-icons-png.flaticon.com/512/733/733547.png"
            }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_s} onPress={() => {
            Linking.openURL('https://www.youtube.com/channel/UC8yFTwPOPq73pcYgVWIFFuQ')
          }}>
            <Image style={styles.social_icons} source={{
              uri: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png"
            }} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default About

const styles = StyleSheet.create({

  container: {
    width: "100%",
  },
  title: {
    textAlign: 'center',
    margin: 25,
    fontSize: 25,
    fontWeight: 800,
    letterSpacing: 4,
    fontStyle: "Oblique",
    color: "red",
    textTransform: "uppercase",
  },
  vission: {
    textAlign: 'center',
    margin: 8,
    fontSize: 20,
    fontWeight: 700,
    textTransform: "capitalize",
    letterSpacing: 5
  },
  img_box: {
    width: "30%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 140,
    borderRadius: 500
  },
  img: {
    borderRadius: 60,
    resizeMode: 'stretch',
    width: 100,
    height: 90,
  },
  description: {
    backgroundColor: "#EEF1FF",
  },
  title_2: {
    margin: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 800,
    fontStyle: 'oblique',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  descrip_2: {
    margin: 20,
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 30
  },
  member: {
    fontSize: 20,
    fontWeight: 800,
    fontStyle: "oblique",
    marginTop: 25,
    letterSpacing: 3,
    textAlign: "center",
    textTransform: "Uppercase"
  },

  data_s: {
    marginVertical: 40,
    marginHorizontal: 50,
    height: "100%"
  },
  cards: {
    width: "100%",
    paddingBottom: 20,
    marginLeft: 25,
    backgroundColor: "#F9F9F9",
    borderRadius: 20
  },
  image_card: {
    width: "100%",
    height: "40%",
    marginTop: 15,
    resizeMode: "cover",
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    width: 90,
    height: 100,
    borderRadius: 15
  },
  cnt: {
    margin: 20,
  },
  name: {
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: 700,
    fontStyle: "oblique",
    textTransform: "capitalize",
    textAlign: 'center',
    letterSpacing: 3
  },
  common: {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: 500,
    textTransform: "lowercase",
    letterSpacing: 3,
    textAlign: 'center'
  },
  social_txt: {
    textAlign: 'center',
    margin: 10,
    paddingTop: 10,
    fontSize: 15,
    letterSpacing: 4,
    fontStyle: 'oblique',
    fontWeight: 500,
  },
  social: {
    width: "100%",
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-evenly'
  },
  social_icons: {
    marginVertical: 12,
    width: 40,
    height: 40
  },
  cnt: {
    flexDirection: 'column',
  },
})