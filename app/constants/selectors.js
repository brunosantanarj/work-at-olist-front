const selector = document.querySelector.bind(document);

const inputPassword = selector('#account-password');
const strengthCharacter = selector('#character');
const strengthUppercase = selector('#uppercase');
const strengthNumber = selector('#number');

const indicator = selector('.strength-indicator');

export default {
  inputPassword,
  strengthCharacter,
  strengthUppercase,
  strengthNumber,
  indicator,
};
