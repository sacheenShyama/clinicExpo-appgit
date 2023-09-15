import { View, ScrollView, StyleSheet, FlatList } from "react-native";
import React from "react";
import Button from "../components/Button";
import { Color, CustomBackgroundColor } from "../constants";

import { SafeAreaView } from "react-native-safe-area-context";
import Simpletext from "../components/SimpleText";
import Search from "../components/Search";
import OpendrawerButton from "../components/OpendrawerButton";
import CardsingleDoctor from "../components/CardsingleDoctor";
import CarddocSpecialist from "../components/CarddocSpecialist";
import CardHealthArticle from "../components/CardHealthArticle";
const doctorPng = require("../assets/icons/doctor.png");
const docOfcardio = require("../assets/icons/cardio.png");
const healthArticle = require("../assets/icons/HealthArticle.png");

const Home = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: CustomBackgroundColor.BackgroundColor,
      }}
    >
      <SafeAreaView style={{ padding: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 20,
            paddingBottom: 30,
          }}
        >
          <OpendrawerButton navigation={navigation} icon={"☰"} />
          <Simpletext
            SendText={"Home"}
            height={42}
            fontSize={16}
            fontWeight={600}
          />
          <View style={style.avatar}></View>
        </View>
        <Simpletext
          SendText={"Good Morning, Sachin"}
          fontSize={20}
          alignSelf={"flex-start"}
          height={50}
          fontWeight={500}
          color={Color.blackGrey}
        />
        <Search />
        <View style={style.headerSeeall}>
          <Simpletext
            SendText={"Find specialist Doctor"}
            fontSize={17}
            alignSelf={"flex-start"}
            height={70}
            fontWeight={500}
            color={Color.blackGrey}
          />
          <Button
            color={Color.blackGrey}
            buttonWidth={"auto"}
            backgroundColor={"#FAFAFA"}
            title={"See All"}
            paddingVertical={0}
            paddingLeft={0}
            margin={0}
            fontSize={13}
            paddingTop={-10}
            paddingRight={-1}
            onPress={() => navigation.navigate("finddoctor")}
          />
        </View>
        <FlatList
          horizontal
          data={[
            { key: "Cardiologist" },
            { key: "Endocrinologist" },
            { key: "Neurologist" },
            { key: "Dentist" },
          ]}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <CarddocSpecialist
                width={195}
                height={72}
                padding={8}
                paddingTop={13}
                image={docOfcardio}
                doctorof={item.key}
                numberofDoctor={"23 Doctors"}
              />
            </View>
          )}
        />

        <View style={style.headerSeeall}>
          <Simpletext
            SendText={"Top Doctor"}
            fontSize={17}
            alignSelf={"flex-start"}
            height={70}
            fontWeight={500}
            color={Color.blackGrey}
          />
          <Button
            color={Color.blackGrey}
            buttonWidth={"auto"}
            backgroundColor={"#FAFAFA"}
            title={"See All"}
            paddingVertical={0}
            paddingLeft={0}
            margin={0}
            fontSize={13}
            paddingTop={-10}
            paddingRight={-1}
            onPress={() => navigation.navigate("finddoctor")}
          />
        </View>
        <FlatList
          horizontal
          data={[
            { key: "Cardiologist" },
            { key: "Endocrinologist" },
            { key: "Neurologist" },
            { key: "Dentist" },
          ]}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <CardsingleDoctor
                width={317}
                height={142}
                padding={15}
                paddingTop={13}
                image={doctorPng}
                imageHeight={114}
                imageWidth={96}
                NameofDoctor={"Dr. Magnoli Sinclair"}
                specialistof={"Cardiologist"}
                Experiance={"6 Years"}
                distance={"500m away"}
              />
            </View>
          )}
        />
        <View style={style.headerSeeall}>
          <Simpletext
            SendText={"Health Article"}
            fontSize={17}
            alignSelf={"flex-start"}
            height={70}
            fontWeight={500}
            color={Color.blackGrey}
          />
          <Button
            color={Color.blackGrey}
            buttonWidth={"auto"}
            backgroundColor={"#FAFAFA"}
            title={"See All"}
            paddingVertical={0}
            paddingLeft={0}
            margin={0}
            fontSize={13}
            paddingTop={-10}
            paddingRight={-1}
          />
        </View>
        <CardHealthArticle
          image={healthArticle}
          height={310}
          width={"100%"}
          imageWidth={"90%"}
          imageHeight={184}
        />
      </SafeAreaView>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  headerSeeall: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    height: 42,
    width: 42,
    backgroundColor: "#D0E5E6",
    borderRadius: 20,
  },
  horizontalScrollstyle: {},
});

export default Home;
