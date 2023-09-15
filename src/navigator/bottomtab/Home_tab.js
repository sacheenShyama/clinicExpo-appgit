import {View, Text} from 'react-native';
import React from 'react';
import Home from '../../views/Home';
import {createStackNavigator} from '@react-navigation/stack';
import FindDoctor from '../../views/FindDoctor';
import OpendrawerButton from '../../components/OpendrawerButton';
const stack = createStackNavigator();
const Home_tab = ({navigation}) => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="finddoctor"
        options={{
          title: 'Find Doctor',
          headerRight: () => (
            <OpendrawerButton navigation={navigation} icon={'⋮'} />
          ),
          headerTitleAlign: 'center',
          headerRightContainerStyle: {
            paddingRight: 20,
          },
        }}
        component={FindDoctor}
      />
    </stack.Navigator>
  );
};

export default Home_tab;
