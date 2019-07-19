import { join } from 'path';

export default {
  plugins: [
    [
      join(__dirname, '..', require('../package').main || 'index.js'),
      {
        features: ['fetch', 'es5', 'es6', 'es7', 'Array.from', ]
      }
    ]
  ],
}
