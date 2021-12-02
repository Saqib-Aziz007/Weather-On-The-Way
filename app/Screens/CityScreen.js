import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Appbar from '../components/Appbar';
import {colors} from '../constants';
import useServices, {getWeather, useWeatherbyCity} from '../hooks/useService';

const image = {
  uri: 'https://raw.githubusercontent.com/Saqib-Aziz007/Clima/master/images/city_background.jpg',
};

const CityScreen = () => {
  const navigation = useNavigation();
  const [weatherData, setweatherData] = useState();
  const [cityName, setCityName] = useState('');
  const [loading, setLoading] = useState();
  //
  const handleSearch = async name => {
    //
    name = name.trim();
    console.log(name);
    if (name) {
      try {
        const data = await getWeather(name);
        setweatherData(data);
      } catch (error) {
        Alert.alert('Alert!', error?.response?.data?.message);
      }
    } else {
      Alert.alert('Alert!', 'Kindly Enter Valid City Name');
    }
    //setweatherData(await getWeather(name));
    //
  };

  useEffect(() => {
    if (weatherData) {
      navigation.navigate('Home', weatherData);
    } else {
      console.log('Data not returned by getWeather Function');
    }
  }, [weatherData]);

  return (
    <LinearGradient
      colors={[colors.firstgredientcolor, colors.secondgradientColor]}
      style={styles.lineargradient}>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter City Name"
          value={cityName}
          onChangeText={text => setCityName(text)}
        />
        <TouchableOpacity onPress={() => handleSearch(cityName)}>
          <View style={styles.button}>
            <Text style={styles.text}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  lineargradient: {
    flex: 1,
  },
  container: {
    padding: 20,
    flexDirection: 'row',
    width: '100%',
  },
  image: {
    flex: 1,
  },
  input: {
    height: 50,
    backgroundColor: 'honeydew',
    borderRadius: 5,
    width: '70%',
    fontSize: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: 120,
    height: 50,
    marginLeft: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default CityScreen;
