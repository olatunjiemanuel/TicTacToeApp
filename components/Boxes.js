import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

const Boxes = props => {
  const {onPress, boxStyles, input, disable} = props;
  return (
    <TouchableWithoutFeedback onPress={onPress} disabled={disable}>
      <View style={boxStyles}>
        <Text style={styles.text}>{input}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Boxes;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
