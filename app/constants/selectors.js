const selector = document.querySelector.bind(document);

const inputPassword = selector('#password');
const strengthCharacter = selector('#character');
const strengthUppercase = selector('#uppercase');
const strengthNumber = selector('#number');

const weakIndicator = selector('.indicator-item-weak');
const mediumIndicator = selector('.indicator-item-medium');
const strongIndicator = selector('.indicator-item-strong');

export default {
  inputPassword,
  strengthCharacter,
  strengthUppercase,
  strengthNumber,
  weakIndicator,
  mediumIndicator,
  strongIndicator,
};
