import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Beranda, Input, Edit } from './src/screens';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Beranda" component={Beranda} /> */}
        <Stack.Screen
          name="Beranda"
          component={Beranda}
          options={({ navigation: { navigate } }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigate('Input', {
                  tipe: 'add',
                })}
                style={{ padding: 10, justifyContent: 'flex-end' }}
              >
                <Ionicons name="md-add-circle" size={40} color="salmon" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Input" component={Input} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;