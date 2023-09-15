import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Simpletext from "../components/SimpleText";
import Input from "../components/Input";
import Button from "../components/Button";
const phoneIcon = require("../assets/icons/phone.png");
const person = require("../assets/icons/person.png");
const envelop = require("../assets/icons/envelopeclosed.png");

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Simpletext
          SendText={
            "Your phone number is not registered yet. let us know basic details for registration"
          }
          fontWeight={"normal"}
          textAlign={"center"}
          height={170}
        />
        <Input
          Icon={phoneIcon}
          placeholder={"Mobile Number "}
          paddingTop={10}
          paddingBottom={15}
          keyboardType={"numeric"}
        />
        <Input
          Icon={person}
          placeholder={"Full Name "}
          paddingTop={10}
          paddingBottom={15}
          keyboardType={"default"}
        />
        <Input
          Icon={envelop}
          placeholder={"Email Address "}
          paddingTop={10}
          paddingBottom={15}
          IconMarginTop={17}
          keyboardType={"email-address"}
        />
        <Button
          title={"Login"}
          onPress={() => navigation.navigate("Login")}
          paddingTop={1}
        />
        <Simpletext
          SendText={"Back to sign in"}
          fontWeight={"bold"}
          height={150}
        />
        <Simpletext
          SendText={"We,ll send an OTP on above given phone number"}
          height={100}
          width={270}
          textAlign={"center"}
        />
        <View style={{ height: 100, backgroundColor: "white" }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
