import Promise from 'promise-polyfill';

import { VALIDATOR } from '..';
import { SELECTORS } from '../../constants';
import { Loading, Success } from '../../UI';

const { submitButton, wrapper } = SELECTORS;

const accountService = data => new Promise(resolve => setTimeout(() => {
  resolve({
    status: 200,
    data,
  });
}, 4000));

const sendData = (event) => {
  event.preventDefault();
  submitButton.innerHTML = Loading;
  accountService(VALIDATOR.data)
    .then((response) => {
      if (response.status === 200) {
        wrapper.innerHTML = Success;
      }
    });
};

export default sendData;
