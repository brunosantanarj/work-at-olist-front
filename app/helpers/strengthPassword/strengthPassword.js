import { STYLED } from '..';
import { REGEX, SELECTORS } from '../../constants';

const { togglePasswordDescriptionStyle, toggleStyle } = STYLED;
const { hasNumberRegex, hasUpperCaseRegex } = REGEX;
const {
  accountPassword, indicator,
  strengthCharacter, strengthUppercase, strengthNumber,
} = SELECTORS;

const minimumCharacter = text => text.length >= 6;
const hasUpperCase = text => hasUpperCaseRegex.test(text);
const hasNumber = text => hasNumberRegex.test(text);

const indicatorsStrength = indicators => indicators.filter(valid => valid).length;

const strengthIndicatorStyle = (text) => {
  const strengthScore = indicatorsStrength([
    togglePasswordDescriptionStyle(strengthCharacter, minimumCharacter(text)),
    togglePasswordDescriptionStyle(strengthUppercase, hasUpperCase(text)),
    togglePasswordDescriptionStyle(strengthNumber, hasNumber(text)),
  ]);

  toggleStyle(indicator, strengthScore <= 1, 'weak-indicator');
  toggleStyle(accountPassword, strengthScore <= 1, 'input-error');

  toggleStyle(indicator, strengthScore === 2, 'medium-indicator');
  toggleStyle(accountPassword, strengthScore === 2, 'input-warning');

  toggleStyle(indicator, strengthScore === 3, 'strong-indicator');
  toggleStyle(accountPassword, strengthScore === 3, 'input-success');

  return strengthScore === 3;
};

const strength = text => strengthIndicatorStyle(text);

export default {
  minimumCharacter,
  hasUpperCase,
  hasNumber,
  strengthIndicatorStyle,
  indicatorsStrength,
  strength,
};
