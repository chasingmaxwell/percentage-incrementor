const PercentIncrementor = require('../lib/index.js');

describe('PercentIncrementor', () => {
  let truthPercentage;

  beforeEach(() => {
    truthPercentage = new PercentIncrementor(val => !!val);
  });

  it('starts at zero', () => {
    expect(truthPercentage.valueOf()).toBe(0);
  });

  it('increments the total', () => {
    truthPercentage.increment(0);
    expect(truthPercentage.total).toBe(1);
  });

  it('tracks the percentage of subset to total', () => {
    truthPercentage.increment(0);
    expect(truthPercentage.increment(true) == 0.5).toBe(true); // eslint-disable-line eqeqeq
  });
});
