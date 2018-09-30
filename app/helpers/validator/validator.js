import { REGEX, SELECTORS } from '../../constants';
import { STYLED, STRENGTH_PASSWORD } from '..';
import { Observable } from '../../patterns';

const {
  accountName,
  accountEmail,
  accountConfirmPassword,
  submitButton,
} = SELECTORS;

const { hasEmail } = REGEX;
const { setInputStyleValidation, toggleStyle } = STYLED;

const data = {
  name: {
    isValid: false,
    value: null,
  },
  email: {
    isValid: false,
    value: null,
  },
  password: {
    isValid: false,
    value: null,
  },
  confirmPassword: {
    isValid: false,
    value: null,
  },
};

const validForm = (form) => {
  const {
    name, email, password, confirmPassword,
  } = form;

  const isButtonEnabled = name.isValid && email.isValid
    && password.isValid && confirmPassword.isValid;

  toggleStyle(submitButton, isButtonEnabled, 'account-button-is--valid');
  isButtonEnabled ? submitButton.removeAttribute('disabled') : submitButton.setAttribute('disabled', 'disabled');
};

const configObserver = new Observable();
configObserver.subscribe(validForm);

const notify = () => configObserver.notify(data);

const fieldValidator = (value, field, validationExpression, element) => {
  console.time();
  data[field] = {
    isValid: Boolean(validationExpression),
    value,
  };
  setInputStyleValidation(element, validationExpression);
  notify();
  console.timeEnd();
};

const validateName = value => fieldValidator(value, 'name', value.trim(), accountName);
const validateEmail = value => fieldValidator(value, 'email', hasEmail.test(value), accountEmail);
const validatePassword = target => fieldValidator(target.value, 'password', STRENGTH_PASSWORD.strengthIndicatorStyle(target.value), target);
const validateConfirmPassword = value => fieldValidator(value, 'confirmPassword', value === data.password.value, accountConfirmPassword);

export default {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  data,
};

// input password default approach = default: 0.1650390625ms
// input passoword target approach is more fast = default: 0.157958984375ms
