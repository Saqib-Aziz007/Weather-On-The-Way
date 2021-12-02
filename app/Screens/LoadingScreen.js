import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, images} from '../constants';
import useServices from '../hooks/useService';

const LoadingScreen = ({route, navigation}) => {
  const data = useServices();
  const call = route.params;
  console.log(call);
  useEffect(() => {
    if (data) {
      if (call) {
        navigation.navigate('Home', data);
      } else {
        setTimeout(() => navigation.navigate('Home', data), 3000);
      }
    }
  }, [data, call]);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.splashImage} />
      <Text style={styles.text}>Weather On The Way</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'orange',
    fontFamily: 'Yellowtail-Regular',
  },
});

export default LoadingScreen;
