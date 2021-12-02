import axios from 'axios';
import React, {useEffect, useState} from 'react';
import useLocation from './useLocation';

const _apiKey = 'a4703c88849076d59227e0da2752ae3b';
const baseApi = 'https://api.openweathermap.org/data/2.5/weather?';

const useServices = () => {
  const location = useLocation();
  const [weatherdata, setWeatherdata] = useState({
    condition: 0,
    temp: 0,
    name: 'Loading...',
  });
  useEffect(() => {
    if (location) getWeather(location);
  }, [location]);

  const getWeather = async location => {
    if (location) {
      const response = await axios
        .get(
          `${baseApi}lat=${location.latitude}&lon=${location.longitude}&appid=${_apiKey}&units=metric`,
        )
        .catch(e => console.log(e));
      const data = response.data;
      setWeatherdata({
        condition: data.weather[0].id,
        temp: data.main.temp,
        name: data.name,
      });
    } else {
      console.log('Location not found!!');
    }
  };

  return weatherdata;
};

export default useServices;

// export const useWeatherbyCity = city => {
//   console.log('hook start:', city);
//   const [weatherdata, setWeatherdata] = useState({
//     condition: 0,
//     temp: 0,
//     name: '',
//   });
//   useEffect(() => {
//     getWeather(city);
//   }, [city]);

//   const getWeather = async city => {
//     console.log('function Reached', city);
//     if (city) {
//       const response = await axios.get(
//         `${baseApi}q=${city}&appid=${_apiKey}&units=metric`,
//       );
//       const data = response.data;
//       console.log(data);
//       setWeatherdata({
//         condition: data.weather[0].id,
//         temp: data.main.temp,
//         name: data.name,
//       });
//     } else {
//       console.log('City not found!!');
//     }
//   };

//   return weatherdata;
// };

export const getWeather = async city => {
  console.log('function Reached', city);
  let weatherData = {};
  if (city) {
    const response = await axios.get(
      `${baseApi}q=${city}&appid=${_apiKey}&units=metric`,
    );
    const data = response.data;
    weatherData = {
      condition: data.weather[0].id,
      temp: data.main.temp,
      name: data.name,
    };
  } else {
    console.log('City not found!!');
  }
  return weatherData;
};
