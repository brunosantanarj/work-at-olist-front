export default {
  hasNumberRegex: /(\d+)/,
  hasSpecialCharacterRegex: /[!@#$%^&*(),.?":{}|/\\ˆ˜]/g,
  hasLowerCaseRegex: /[a-z]/,
  hasUpperCaseRegex: /[A-Z]/,
  hasEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
