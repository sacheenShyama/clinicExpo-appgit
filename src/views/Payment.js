const {SafeAreaView, ScrollView, StyleSheet, View} = require('react-native');
import React, {useEffect, useCallback} from 'react';
import {CustomBackgroundColor} from '../constants';
import Simpletext from '../components/SimpleText';
import {useFonts} from 'expo-font';

import Button from '../components/Button';

import {CreditCardInput} from 'react-native-payment-card';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Payment = ({navigation}) => {
  const handleCardInputChange = formData => {
    console.log(formData);
  };

  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-Regular': require('../assets/font/Montserrat.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ScrollView
      style={{
        backgroundColor: CustomBackgroundColor.BackgroundColor,
      }}>
      <SafeAreaView>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 20,
            paddingBottom: 30,
          }}>
          <Ionicons name="arrow-back-outline" size={25} color="black" />
          <Simpletext
            SendText={'Payment'}
            height={'auto'}
            fontSize={16}
            fontWeight={600}
          />
          <Ionicons name="ellipsis-vertical" size={20} color="black" />
        </View>
        <CreditCardInput
          style={{margin: 0}}
          autoFocus
          requiresName
          requiresCVC
          labelStyle={style.labelStyles}
          inputStyle={style.inputStyles}
          validColor={'black'}
          invalidColor={'red'}
          placeholderColor={'darkgray'}
          onChange={handleCardInputChange}
        />
        <Button
          borderRadius={25}
          title={'PAY NOW'}
          fontSize={12}
          fontWeight={700}
          paddingLeft={35}
          paddingRight={35}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  labelStyles: {
    color: 'black',
    fontSize: 16,
  },
  inputStyles: {
    marginTop: 15,
    marginLeft: 0,
    padding: 10,
  },
});
export default Payment;
