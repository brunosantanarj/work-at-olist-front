const toggleIndicatorClasses = (element, expression, className) => {
  element.classList.toggle(className, expression);
};

const togglePasswordDescriptionStyle = (element, expression) => {
  element.classList.toggle('indicator-description-is--valid', expression);
  element.classList.toggle('indicator-description-is--invalid', !expression);
  return expression;
};

export default {
  toggleIndicatorClasses,
  togglePasswordDescriptionStyle,
};
