import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Course from './src/screens/Course';
import Contact from './src/screens/Contact';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={{
              headerShown: false
            }} />
            <Stack.Screen name='About' component={About} options={{
              headerTitleStyle: {
                fontSize: 22,
                fontStyle: "oblique",
                textTransform: "uppercase"
              },
              headerTitleAlign: "center",
              headerTitle: "About us",

            }} />
            <Stack.Screen name="Course" component={Course}
              options={{
                headerTitleStyle: {
                  fontSize: 22,
                  fontStyle: "oblique",
                  textTransform: "uppercase"
                },
                headerTitleAlign: "center",
                headerTitle: "Courses",
              }}
            />
            <Stack.Screen name='Contact' component={Contact}
              options={{
                headerTitleStyle: {
                  fontSize: 22,
                  fontStyle: "oblique",
                  textTransform: "uppercase"
                },
                headerTitleAlign: "center",
                headerTitle: "Contact us",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
