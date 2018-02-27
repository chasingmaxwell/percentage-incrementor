// @flow

/**
 * Store the percentage of an incrementing subset against a total.
 */
class PercentageIncrementor {
  total: number;
  subset: number;
  subsetCondition: (*) => boolean;

  /**
   * Construct a PercentageIncrementor.
   * @param {Function} subsetCondition
   *   A function which returns true if a given value should be included in the subset.
   */
  constructor(subsetCondition: $PropertyType<PercentageIncrementor, 'subsetCondition'>) {
    this.total = 0;
    this.subset = 0;
    this.subsetCondition = subsetCondition;
  }

  /**
   * Increment the total and potentially the subset with a given value.
   *
   * @param {*} val A value being added to the total.
   *
   * @returns {null}
   *   null.
   */
  increment(val: any) {
    if (this.subsetCondition(val)) {
      this.subset += 1;
    }
    this.total += 1;

    return this;
  }

  /**
   * Get the percentage of subset to total.
   *
   * @returns {Number} A float between 0 and 1 representing percentage.
   */
  valueOf() {
    return this.subset
      ? this.subset / this.total
      : 0;
  }
}

module.exports = PercentageIncrementor;
