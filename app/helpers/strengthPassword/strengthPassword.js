import { STYLED } from '..';
import { REGEX, SELECTORS } from '../../constants';

const { togglePasswordDescriptionStyle, toggleIndicatorClasses } = STYLED;
const { hasNumberRegex, hasUpperCaseRegex } = REGEX;
const {
  inputPassword, indicator,
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

  toggleIndicatorClasses(indicator, strengthScore === 1, 'weak-indicator');
  toggleIndicatorClasses(inputPassword, strengthScore === 1, 'input-error');

  toggleIndicatorClasses(indicator, strengthScore === 2, 'medium-indicator');
  toggleIndicatorClasses(inputPassword, strengthScore === 2, 'input-warning');

  toggleIndicatorClasses(indicator, strengthScore === 3, 'strong-indicator');
  toggleIndicatorClasses(inputPassword, strengthScore === 3, 'input-success');

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
