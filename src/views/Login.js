import { ScrollView } from "react-native";
import React from "react";
import Input from "../components/Input";
import Simpletext from "../components/SimpleText";
import Button from "../components/Button";
import CustomeImage from "../components/CustomeImage";
const phoneIcon = require("../assets/icons/phone.png");
const Mainimage = require("../assets/icons/login_banner.png");
const Plus = require("../assets/icons/plus.png");

const Login = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <CustomeImage
        image={Plus}
        viewBackgroundColor={"#D0E5E6"}
        viewWidth={"100%"}
        imageBackgroundColor={"white"}
        imageContainerHeight={82}
        imageContainerWidth={89}
        imageAlignSelf={"center"}
        imageJustifyContent={"center"}
        imageContainerAlignSelf={"center"}
        imageContainerJustifyContent={"center"}
        paddingTop={30}
        paddingRight={0}
        paddingBottom={10}
        paddingLeft={0}
        borderRadius={10}
      />
      <CustomeImage
        image={Mainimage}
        viewBackgroundColor={"#D0E5E6"}
        viewWidth={"100%"}
        imageContainerHeight={265}
        imageContainerWidth={396}
        imageAlignSelf={"center"}
        imageJustifyContent={"center"}
        imageContainerAlignSelf={"center"}
        imageContainerJustifyContent={"center"}
        paddingTop={30}
        paddingRight={0}
        paddingBottom={15}
        paddingLeft={0}
      />
      <Input
        Icon={phoneIcon}
        placeholder="Enter Mobile Number "
        paddingTop={25}
        keyboardType={"numeric"}
      />
      <Button title={"Login"} onPress={() => navigation.navigate("Parent")} />
      <Simpletext
        SendText={"Or click on register if you'r new "}
        fontWeight={"bold"}
        textAlign={"center"}
        height={30}
      />
      <Button
        title={"Register"}
        onPress={() => navigation.navigate("Register")}
        paddingTop={1}
      />

      <Simpletext
        SendText={"Or quick continue with"}
        fontWeight={"bold"}
        textAlign={"center"}
        height={60}
      />
    </ScrollView>
  );
};

export default Login;
