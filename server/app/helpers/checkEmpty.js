const isStringValid = (key, val) => {
  return {
    message: key.toUpperCase() + " should not be empty",
    ok: isStringAndNotEmpty(val),
  };
};

// HELPERS?
const isStringAndNotEmpty = (val) => {
  return isString(val) && isNotEmpty(val);
};

const isNotEmpty = (val) => {
  return val !== "" && val !== null && val !== undefined;
};
const isString = (val) => {
  return typeof val === "string";
};

module.exports = {
  isStringValid,
};
