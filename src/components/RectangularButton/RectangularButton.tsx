import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./RectangularButton.styles";
import { RectangularButtonPropTypes } from "./types";

const RectangularButton: React.FC<RectangularButtonPropTypes> = ({
  title,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      // title={title}
      onPress={onPress}
      disabled={disabled}
      style={styles.buttonContainer}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RectangularButton;
