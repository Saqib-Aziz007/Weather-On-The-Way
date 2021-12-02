import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Appbar = ({
  leftIcon = 'near-me',
  rightIcon = 'map-search',
  onPressSearch,
  onPressCurrent,
  title = 'Weather On The Way',
  style,
}) => {
  return (
    <View style={[styles.appbar, style]}>
      <TouchableOpacity onPress={onPressCurrent}>
        <Icon name={leftIcon} size={40} />
      </TouchableOpacity>
      <Text style={{fontSize: 20}}>{title}</Text>
      <TouchableOpacity onPress={onPressSearch}>
        <Icon name={rightIcon} size={40} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: 'white',
    width: '100%',
    height: 60,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default Appbar;
