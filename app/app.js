import { Observable } from './patterns';
import { SELECTORS } from './constants';
import { VALIDATOR, sendData } from './helpers';

import './styles/index.scss';

const {
  account,
  accountName,
  accountEmail,
  accountPassword,
  accountConfirmPassword,
} = SELECTORS;

const {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} = VALIDATOR;

const accountPasswordObserver = new Observable();
const accountNameObserver = new Observable();
const accountEmailObserver = new Observable();
const accountConfirmPasswordObserver = new Observable();

accountNameObserver.subscribe(validateName);
accountEmailObserver.subscribe(validateEmail);
accountPasswordObserver.subscribe(validatePassword);
accountConfirmPasswordObserver.subscribe(validateConfirmPassword);

accountName.addEventListener('input', ({ target }) => accountNameObserver.notify(target.value));
accountEmail.addEventListener('input', ({ target }) => accountEmailObserver.notify(target.value));
accountPassword.addEventListener('input', ({ target }) => accountPasswordObserver.notify(target));
accountConfirmPassword.addEventListener('input', ({ target }) => accountConfirmPasswordObserver.notify(target.value));
account.addEventListener('submit', sendData);
