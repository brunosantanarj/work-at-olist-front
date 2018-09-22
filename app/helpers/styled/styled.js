const toggleIndicatorClasses = (element, expression, className) => {
  element.classList.toggle(className, expression);
};

const toggleValidClassesInElement = (element, expression) => {
  element.classList.toggle('active', expression);
  element.classList.toggle('error', !expression);
  return expression;
};

export default {
  toggleIndicatorClasses,
  toggleValidClassesInElement,
};
