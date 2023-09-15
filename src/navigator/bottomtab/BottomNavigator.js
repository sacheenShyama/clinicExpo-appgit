import {View, Text, Image} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../views/Home';
import DoctorDetails from '../../views/DoctorDetails';
import FindDoctor from '../../views/FindDoctor';
import PatientDetail from '../../views/PatientDetail';
import Payment from '../../views/Payment';
import Home_tab from './Home_tab';
const home = require('../../assets/icons/home.png');
const stethoscope = require('../../assets/icons/stethoscope.png');
const person = require('../../assets/icons/patientDetail.png');
const payment = require('../../assets/icons/payment.png');
const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Home_tab"
        component={Home_tab}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={home}
                style={{
                  tintColor: tabInfo.focused ? '#21A6AD' : '#BCC3C4',
                }}
              />
            );
          },
        }}
      />

      <Bottom.Screen
        name="DoctorDetails"
        component={DoctorDetails}
        options={{
          title: 'Doctor detail',
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={stethoscope}
                style={{
                  tintColor: tabInfo.focused ? '#21A6AD' : '#BCC3C4',
                }}
              />
            );
          },
        }}
      />

      <Bottom.Screen
        name="Payment"
        component={Payment}
        options={{
          title: 'Payment',
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={payment}
                style={{
                  tintColor: tabInfo.focused ? '#21A6AD' : '#BCC3C4',
                }}
              />
            );
          },
        }}
      />

      <Bottom.Screen
        name="Patientdetails"
        component={PatientDetail}
        options={{
          title: 'Patient Detail',
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={person}
                style={{
                  tintColor: tabInfo.focused ? '#21A6AD' : '#BCC3C4',
                }}
              />
            );
          },
        }}
      />

      {/* <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={home}
                style={{
                  tintColor: tabInfo.focused ? '#21A6AD' : '#BCC3C4',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="finddoctor"
        component={FindDoctor}
        options={{
          title: 'Find Doctor',
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={stethoscope}
                style={{
                  tintColor: tabInfo.focused ? '#21A6AD' : '#BCC3C4',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="DoctorDetails"
        component={DoctorDetails}
        options={{
          title: 'Doctor detail',
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={stethoscope}
                style={{
                  tintColor: tabInfo.focused ? '#21A6AD' : '#BCC3C4',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Payment"
        component={Payment}
        options={{
          title: 'Payment',
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={payment}
                style={{
                  tintColor: tabInfo.focused ? '#21A6AD' : '#BCC3C4',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Patientdetails"
        component={PatientDetail}
        options={{
          title: 'Patient Detail',
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={person}
                style={{
                  tintColor: tabInfo.focused ? '#21A6AD' : '#BCC3C4',
                }}
              />
            );
          },
        }}
      /> */}
    </Bottom.Navigator>
  );
};
export default BottomNavigator;
