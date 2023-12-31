import React from "react";
import { Image, SafeAreaView, StyleSheet, TextInput, View } from "react-native";

const Input = ({
  placeholder,
  Icon,
  paddingTop,
  paddingBottom,
  padding,
  keyboardType,
  IconMarginTop,
  onChange,
  backgroundColor,
  paddingRight,
  paddingLeft,
  borderRadius,
  containerBackgroundColor,
  multiline,
  width,
  height,
  textPadding,
}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingRight: paddingRight ? paddingRight : 20,
          paddingLeft: paddingLeft ? paddingLeft : 20,
          paddingTop: paddingTop ? paddingTop : 0,
          paddingBottom: paddingBottom ? paddingBottom : 0,
          backgroundColor: containerBackgroundColor
            ? containerBackgroundColor
            : "white",
        }}
      >
        <View
          style={[
            styles.inputContainer,
            {
              borderRadius: borderRadius ? borderRadius : 15,
              backgroundColor: backgroundColor ? backgroundColor : "#EBEBEB",
            },
          ]}
        >
          {Icon ? (
            <Image
              source={Icon}
              style={{
                marginTop: IconMarginTop ? IconMarginTop : 12,
                marginBottom: 15,
              }}
            />
          ) : null}
          <TextInput
            multiline={multiline ? multiline : false}
            style={[
              styles.InputStyle,
              {
                fontWeight: "bold",
                backgroundColor: backgroundColor ? backgroundColor : "#EBEBEB",
                width: width ? width : "auto",
                height: height ? height : "auto",
                padding: padding ? padding : 0,
                paddingLeft: textPadding ? textPadding : 20,
              },
            ]}
            placeholder={placeholder}
            placeholderTextColor="darkgray"
            keyboardType={keyboardType}
            onChange={onChange}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    color: "black",
    width: "100%",

    flexDirection: "row",
    paddingLeft: 15,
  },
  InputStyle: {
    fontSize: 15,
    color: "black",
  },
});
export default Input;
