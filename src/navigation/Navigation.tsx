import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home/Home'
import { Colors } from '../shared/theme'
import FilterIcons from '../shared/icons/FilterIcons'
import HeaderLeftTitle from '../shared/components/HeaderLeftTitle/HeaderLeftTitle'
import FighterDetails from '../screens/FighterDetails/FighterDetails'
import { routes } from './routes'
import FilterFighters from '../screens/FilterFighters/FilterFighters'
import { TouchableOpacity } from 'react-native'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.Header
          },
          headerTintColor: Colors.Header
        }}
      >
        <Stack.Screen
          name={routes.HOME}
          component={Home}
          options={({ navigation }) => {
            return {
              headerShown: true,
              headerRight: () => (
                <>
                  <TouchableOpacity onPress={() => navigation.navigate(routes.FILTERS)}>
                    <FilterIcons />
                  </TouchableOpacity>
                </>
              ),
              headerLeft: () => <HeaderLeftTitle name={routes.HOME} />
            }
          }}
        />
        <Stack.Screen
          name={routes.FIGHTERDETAILS}
          component={FighterDetails}
          options={({ route }) => {
            return {
              headerShown: true,

              headerLeft: () => {
                return (
                  <>
                    <HeaderLeftTitle name={route?.params?.name} isBackArrow />
                  </>
                )
              }
            }
          }}
        />
        <Stack.Screen
          name={routes.FILTERS}
          component={FilterFighters}
          options={() => {
            return {
              headerShown: true,
              headerLeft: () => {
                return (
                  <>
                    <HeaderLeftTitle name={routes.FILTERS} isBackArrow />
                  </>
                )
              }
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
