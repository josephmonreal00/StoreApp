import { WeatherDetails } from '../../Components/Products/WeatherDetails';

export interface Weather {
  dataseries: Array<WeatherDetails>;
}

// "dataseries": [{
//   "timepoint": 3,
//   "cloudcover": 9,
//   "seeing": 8,
//   "transparency": 5,
//   "lifted_index": -4,
//   "rh2m": 12,
//   "wind10m": {
//     "direction": "SE",
//     "speed": 2
//   },
//   "temp2m": 26,
//   "prec_type": "rain"
// }, {
