const moneyFormat = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

const validateNumericalEntry = (value) => {
  return value >= 0;
}

const validateWholeNumericalEntry = (value) => {
  return value >= 0 && !value.toString().includes(".");
}

module.exports = {
  moneyFormat, validateNumericalEntry, validateWholeNumericalEntry
};
