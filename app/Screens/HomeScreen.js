import React, {useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, formatedDate, getMessage, getWeatherIcon} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import useServices from '../hooks/useService';
import Appbar from '../components/Appbar';

const HomeScreen = ({route, navigation}) => {
  const data = route.params;
  // const data = useServices();
  // if (data) {
  //   console.log('data from weatherservice:', data);
  // } else {
  //   console.log('no data on home screen');
  // }
  const handleCurrent = () => {
    navigation.navigate('Loading', {call: 'Reload'});
  };

  return (
    <>
      <Appbar
        onPressCurrent={() => handleCurrent()}
        onPressSearch={() => navigation.navigate('City')}
      />
      <LinearGradient
        colors={[colors.firstgredientcolor, colors.secondgradientColor]}
        style={styles.lineargradient}>
        <View style={styles.container}>
          <View style={styles.dateIconContainer}>
            <View>
              <Text style={styles.day}>{formatedDate.day}</Text>
              <Text style={styles.date}>
                {`${formatedDate.month} ${formatedDate.date}/ ${formatedDate.year}`}
              </Text>
            </View>
            <View>
              <Text style={styles.icon}>{getWeatherIcon(data.condition)}</Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            {/* <Icon name="weather-sunny" size={300} color="yellow" /> */}
            <Text style={styles.temp}>{Math.round(data.temp)}</Text>
            <Text style={styles.degtemp}>{'°C'}</Text>
          </View>
          <View style={styles.messagecontainer}>
            <Text style={styles.message}>
              {`${getMessage(data.temp)} in`}
              <Text style={{color: colors.primary}}>{` ${data.name}`}</Text>
            </Text>
          </View>
          {/* </ImageBackground> */}
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  lineargradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    flex: 1,
    padding: 20,
  },
  dateIconContainer: {
    flexDirection: 'row',
    // marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    elevation: 3,
    opacity: 0.5,
  },
  messagecontainer: {},
  day: {
    color: colors.secondary,
    fontSize: 50,
    fontWeight: 'bold',
    letterSpacing: 5,
  },
  date: {
    color: colors.primary,
    fontSize: 25,
  },
  iconContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  degtemp: {
    color: colors.secondary,
    fontSize: 40,
    top: 40,
  },
  icon: {
    fontSize: 100,
  },
  message: {
    color: colors.secondary,
    fontSize: 60,
    fontWeight: 'bold',
  },
  temp: {
    color: colors.primary,
    fontSize: 150,
  },
});

export default HomeScreen;
