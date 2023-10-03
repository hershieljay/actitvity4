import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/Main';
import Map from './screens/Map';
import Meter from './screens/Pedometer';
import Speech from './screens/Speech';
import Web from './screens/Web';
import Baro from './screens/Barometer';
import Alert from './screens/Alert';
import Collapse from './screens/Collapse';
import Spin from './screens/Spinner';
import Flat from './screens/Flastlist';
import Touch from './screens/Touch';
import Switch from './screens/Switch';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
    <Drawer.Screen name="Get Started" component={Main} />
    <Drawer.Screen name="Alert/PopUp/Toast" component={Alert} />
    <Drawer.Screen name="Collapse/Carousel" component={Collapse} />
    <Drawer.Screen name="Spinner" component={Spin} />
    <Drawer.Screen name="FlatList" component={Flat} />
    <Drawer.Screen name="Touchable" component={Touch} />
    <Drawer.Screen name="Switch/Slider" component={Switch} />
    <Drawer.Screen name="Map" component={Map} />
    <Drawer.Screen name="Pedometer" component={Meter} />
    <Drawer.Screen name="ScrollView/Speech" component={Speech} />
    <Drawer.Screen name="Web" component={Web} />
    <Drawer.Screen name="Barometer" component={Baro} />
  </Drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
