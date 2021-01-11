/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from './pages/TabBar';
import { Explore } from './pages/Explore';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FullPageProduct, fullPageProduct } from './pages/FullPageProduct';
import {AffirmAccount} from './pages/AffirmAccount';
import {Profile} from './pages/Profile';



const Stack = createStackNavigator();

function MainStackNav() {
  return (
    <Stack.Navigator headerMode={false} initialRouteName="Explore">
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Discover" component={FullPageProduct} />
        <Stack.Screen name="AffirmAccount" component={AffirmAccount} />

    </Stack.Navigator>
  );
}
const Tab = createMaterialTopTabNavigator();

const App: () => React$Node = () => {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator initialRouteName="MainStackNav" swipeEnabled={false} tabBarPosition="bottom" tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name="MainStackNav" component={MainStackNav} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
