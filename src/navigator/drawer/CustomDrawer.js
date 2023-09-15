import {View, Text} from 'react-native';
import React from 'react';
import Simpletext from '../../components/SimpleText';

const CustomDrawer = ({navigation}) => {
  return (
    <View
      style={{
        padding: 20,
      }}>
      <Simpletext
        SendText={'Log Out'}
        onPress={() => navigation.navigate('Login')}
        alignSelf={'flex-start'}
        height={50}
      />
    </View>
  );
};

export default CustomDrawer;
