import { Observable } from './patterns';
import { SELECTORS } from './constants';
import { STRENGTH_PASSWORD } from './helpers';

import './styles/index.scss';

const { inputPassword } = SELECTORS;
const { strength } = STRENGTH_PASSWORD;

const headingObserver = new Observable();
headingObserver.subscribe(strength);

inputPassword.addEventListener('input', ({ target }) => headingObserver.notify(target.value));
