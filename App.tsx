import { MockedProvider } from '@apollo/react-testing'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import 'react-native-gesture-handler'

import DelightScreen from './src/screens/DelightScreen'
import EndScreen from './src/screens/EndScreen'
import HomeScreen from './src/screens/HomeScreen'
import QuestionScreen from './src/screens/QuestionScreen'
import StartScreen from './src/screens/StartScreen'

import quiz0QueryMock from './src/queryMocks/quiz0QueryMock'
import quiz1QueryMock from './src/queryMocks/quiz1QueryMock'
import quizzesQueryMock from './src/queryMocks/quizzesQueryMock'

const RootStack = createStackNavigator()
const MainStack = createStackNavigator()

const MainStackScreens = () => (
  <MainStack.Navigator screenOptions={{ headerShown: false }}>
    <MainStack.Screen name="HomeScreen" component={HomeScreen} />
    <MainStack.Screen name="StartScreen" component={StartScreen} />
    <MainStack.Screen name="QuestionScreen" component={QuestionScreen} />
    <MainStack.Screen name="EndScreen" component={EndScreen} />
  </MainStack.Navigator>
)

const App = () => (
  <MockedProvider mocks={[quiz0QueryMock, quiz1QueryMock, quizzesQueryMock]} addTypename={false}>
    <NavigationContainer>
      <RootStack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="MainStackScreens" component={MainStackScreens} />
        <RootStack.Screen name="DelightScreen" component={DelightScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  </MockedProvider>
)

export default App
