import RectangularButton from "components/RectangularButton/RectangularButton";
import React from "react";
import { Button, Text, View } from "react-native";

interface MainScreenButtonProps {
  title: string;
  onPress: () => void;
}

const MainScreenButton: React.FC<MainScreenButtonProps> = ({
  title,
  onPress,
}) => {
  return <Button title={title} onPress={onPress} />;
};

const MainScreen: React.FC = () => {
  return (
    <View
      style={{
        backgroundColor: "#335C67",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingTop: 130,
        paddingBottom: 30,
        height: "100%",
      }}
    >
      <View
        style={{
          marginBottom: 110,
        }}
      >
        <Text
          style={{
            color: "#FFF3B0",
            fontSize: 28,
          }}
        >
          Character Generator
        </Text>
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <RectangularButton
          title="New Character"
          onPress={() => {
            console.log("New Character");
          }}
        />
        <MainScreenButton
          onPress={() => {
            console.log("New Character");
          }}
          title={"New Character"}
        />
        <MainScreenButton
          onPress={() => {
            console.log("Load Character");
          }}
          title={"Load Character"}
        />
        <MainScreenButton
          onPress={() => {
            console.log("Settings");
          }}
          title={"Settings"}
        />
        <MainScreenButton
          onPress={() => {
            console.log("About Us");
          }}
          title={"About Us"}
        />
      </View>
    </View>
  );
};

export default MainScreen;
