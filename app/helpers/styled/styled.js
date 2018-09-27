const toggleStyle = (element, expression, className) => {
  element.classList.toggle(className, expression);
};

const toggleStyleWithExpression = ({ valid, invalid }, element, expression) => {
  element.classList.toggle(valid, expression);
  element.classList.toggle(invalid, !expression);
  return expression;
};

const togglePasswordDescriptionStyle = (element, expression) => toggleStyleWithExpression({
  valid: 'indicator-description-is--valid',
  invalid: 'indicator-description-is--invalid',
}, element, expression);

const setInputStyleValidation = (element, expression) => toggleStyleWithExpression({
  valid: 'input-success',
  invalid: 'input-error',
}, element, expression);

export default {
  toggleStyle,
  togglePasswordDescriptionStyle,
  toggleStyleWithExpression,
  setInputStyleValidation,
};
