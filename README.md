# percentage-incrementor

Store the percentage of an incrementing subset against a total.

## Installation

`yarn add percentage-incrementor` or `npm i --save percentage-incrementor`

## Usage

```javascript
const PercentageIncrementor = require('percentage-incrementor');

// Store the percentage of truthy values incremented.
const truthyPercent = new PercentageIncrementor(val => !!val);

// Starts at 0.
truthyPercent.valueOf();
// 0

truthyPercent.increment(false).valueOf();
// 0

truthyPercent.increment(true).valueOf();
// 0.5

truthyPercent.increment(true).valueOf();
// 0.666666666

// Use it as a primitive.
if (truthyPercent > 0.5) {
  console.log('yay!');
}
// yay!
```


