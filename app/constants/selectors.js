const selector = document.querySelector.bind(document);

const account = selector('#account');
const accountName = selector('#account-name');
const accountEmail = selector('#account-email');
const accountPassword = selector('#account-password');
const accountConfirmPassword = selector('#account-confirm-password');
const strengthCharacter = selector('#character');
const strengthUppercase = selector('#uppercase');
const strengthNumber = selector('#number');
const submitButton = selector('.account-button');
const wrapper = selector('.wrapper-content');

const indicator = selector('.strength-indicator');

export default {
  account,
  accountName,
  accountEmail,
  accountPassword,
  accountConfirmPassword,
  strengthCharacter,
  strengthUppercase,
  strengthNumber,
  indicator,
  submitButton,
  wrapper,
};
