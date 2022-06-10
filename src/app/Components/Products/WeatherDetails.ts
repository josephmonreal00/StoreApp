import { Wind } from '../../Components/Products/wind';

export interface WeatherDetails {
  timepoint: number;
  cloudcover: number;
  seeing: number;
  transparency: number;
  lifted_index: number;
  rh2m: number;
  wind10m: Wind;
  temp2m: number;
  prec_type: string;
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
