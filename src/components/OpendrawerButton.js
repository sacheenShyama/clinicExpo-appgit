import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const OpendrawerButton = ({navigation, icon}) => {
  const navigate = navigation;
  return (
    <View>
      <Text
        style={style.textSyle}
        onPress={() => {
          navigate.openDrawer();
        }}>
        {icon}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  textSyle: {
    fontSize: 23,
    height: 'auto',
    width: 'auto',
    fontWeight: 'bold',
    paddingTop: 5,
  },
});

export default OpendrawerButton;
