import { STYLED } from '..';
import { REGEX, SELECTORS } from '../../constants';

const { toggleValidClassesInElement, toggleIndicatorClasses } = STYLED;
const { hasNumberRegex, hasUpperCaseRegex } = REGEX;
const {
  inputPassword, strengthCharacter, strengthUppercase, strengthNumber,
  weakIndicator, mediumIndicator, strongIndicator,
} = SELECTORS;

const minimumCharacter = text => text.length >= 6;
const hasUpperCase = text => hasUpperCaseRegex.test(text);
const hasNumber = text => hasNumberRegex.test(text);

const indicatorsStrength = indicators => indicators.filter(valid => valid).length;

const strengthIndicatorStyle = (text) => {
  const strengthScore = indicatorsStrength([
    toggleValidClassesInElement(strengthCharacter, minimumCharacter(text)),
    toggleValidClassesInElement(strengthUppercase, hasUpperCase(text)),
    toggleValidClassesInElement(strengthNumber, hasNumber(text)),
  ]);

  toggleIndicatorClasses(weakIndicator, strengthScore === 1, 'weak');
  toggleIndicatorClasses(inputPassword, strengthScore === 1, 'weak');

  toggleIndicatorClasses(weakIndicator, strengthScore === 2, 'medium');
  toggleIndicatorClasses(mediumIndicator, strengthScore === 2, 'medium');
  toggleIndicatorClasses(inputPassword, strengthScore === 2, 'medium');

  toggleIndicatorClasses(weakIndicator, strengthScore === 3, 'strong');
  toggleIndicatorClasses(mediumIndicator, strengthScore === 3, 'strong');
  toggleIndicatorClasses(strongIndicator, strengthScore === 3, 'strong');
  toggleIndicatorClasses(inputPassword, strengthScore === 3, 'strong');
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
