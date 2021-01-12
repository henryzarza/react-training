// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import 'mutationobserver-shim';

jest.mock('i18next', () => ({
  t: (key, params) => (params ? `${key} ${JSON.stringify(params)}` : key)
}));
