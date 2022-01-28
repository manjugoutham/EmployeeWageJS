function validatePIN(pin) {
    if (/^(\d{4}|\d{6})$/.test(pin)) {
      return true;
    } else {
      return false;
    }
  }
  console.log(validatePIN("123456"));
  console.log(validatePIN("12345"));