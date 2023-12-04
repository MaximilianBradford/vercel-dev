import { sort } from 'radash';

import { sort } from 'radash';
const fish = [
  {
    name: 'Marlin',
    weight: 105
  },
  {
    name: 'Bass',
    weight: 8
  },
  {
    name: 'Trout',
    weight: 13
  }
]
const arr = sort(fish, f => f.weight) // => [bass, trout, marlin]
console.log(arr)