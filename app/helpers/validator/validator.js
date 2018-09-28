import { REGEX, SELECTORS } from '../../constants';
import { STYLED, STRENGTH_PASSWORD } from '..';
import { Observable } from '../../patterns';

const {
  accountName,
  accountEmail,
  accountPassword,
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
  data[field] = {
    isValid: Boolean(validationExpression),
    value,
  };
  setInputStyleValidation(element, validationExpression);
  notify();
};

const validateName = value => fieldValidator(value, 'name', value.trim(), accountName);
const validateEmail = value => fieldValidator(value, 'email', hasEmail.test(value), accountEmail);
const validatePassword = value => fieldValidator(value, 'password', STRENGTH_PASSWORD.strengthIndicatorStyle(value), accountPassword);
const validateConfirmPassword = value => fieldValidator(value, 'confirmPassword', value === data.password.value, accountConfirmPassword);

export default {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  data,
};
