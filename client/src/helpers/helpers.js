/**
 * This is a collection of helper functions called in various parts of our app.
 */

/**
 * This fucntion takes a number and turns it into price format
 * @param value a number to be converted to USD format 
 */
const moneyFormat = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

/**
 * This function ensures a number entered was positive
 * @param value a number 
 */
const validateNumericalEntry = (value) => {
  return value >= 0;
}

/**
 * This function ensures a number entered was positive and not a decimal
 * @param value a number
 */
const validateWholeNumericalEntry = (value) => {
  return value >= 0 && !value.toString().includes(".");
}

/**
 * Export functions
 */
module.exports = {
  moneyFormat, validateNumericalEntry, validateWholeNumericalEntry
};
