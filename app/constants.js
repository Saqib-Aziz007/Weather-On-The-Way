const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const date = new Date();
export const formatedDate = {
  date: date.getDate(),
  day: days[date.getDate()],
  month: months[date.getMonth()],
  year: date.getFullYear(),
};

const getWeatherIcon = condition => {
  if (condition < 300) {
    return '๐ฉ';
  } else if (condition < 400) {
    return '๐ง';
  } else if (condition < 600) {
    return 'โ๏ธ';
  } else if (condition < 700) {
    return 'โ๏ธ';
  } else if (condition < 800) {
    return '๐ซ';
  } else if (condition == 800) {
    return 'โ๏ธ';
  } else if (condition <= 804) {
    return 'โ๏ธ';
  } else {
    return '๐คทโ';
  }
};

const getMessage = temp => {
  if (temp > 25) {
    return "It's ๐ฆ time";
  } else if (temp > 20) {
    return 'Time for shorts and ๐';
  } else if (temp < 10) {
    return "You'll need ๐งฃ and ๐งค";
  } else {
    return 'Bring a ๐งฅ just in case';
  }
};

export {getWeatherIcon, getMessage};

export const colors = {
  primary: 'black',
  secondary: 'white',
  firstgredientcolor: '#FD97A0',
  secondgradientColor: '#9BB0FF',
  tomato: 'tomato',
};

export const images = {
  splashImage: require('../assets/cloud.png'),
};
