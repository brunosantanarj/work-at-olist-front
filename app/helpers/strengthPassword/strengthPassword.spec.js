import STRENGTH_PASSWORD from './strengthPassword';

const {
  minimumCharacter,
  hasUpperCase,
  hasNumber,
  strengthIndicatorStyle,
  indicatorsStrength,
} = STRENGTH_PASSWORD;

describe('strength password', () => {
  test('should have minimum 6 digits in password', () => {
    expect(minimumCharacter('my-password')).toBeTruthy();
  });

  test('should have return false in case minimum length less than 6', () => {
    expect(minimumCharacter('12345')).toBeFalsy();
  });

  test('should have uppercase letters in password', () => {
    expect(hasUpperCase('mY-password')).toBeTruthy();
  });

  test('should have return false in case not have uppercase letters', () => {
    expect(hasUpperCase('my-password')).toBeFalsy();
  });

  test('should have number in password', () => {
    expect(hasNumber('password12')).toBeTruthy();
  });

  test('should have return false in case not have numbers in password', () => {
    expect(hasNumber('password')).toBeFalsy();
  });

  test('should have indicators strength equal a weak', () => {
    const score = indicatorsStrength([true, false, false]);
    expect(score).toBe(1);
  });

  test('should have indicators strength equal a weak', () => {
    const score = strengthIndicatorStyle('H');
  });
});
