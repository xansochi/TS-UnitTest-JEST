/* eslint-disable @typescript-eslint/no-unused-vars */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Calculate } from '../events/calculate';

describe('Test Checker', () => {
  test('demo', () => { expect(true).toBe(true);});
});

describe('Simple Calc Tests', () => {
  test('+', () => {
    expect(Calculate('+',9,2)).toBe(11);
  });
  test('--', () => {
    expect(Calculate('+',-9,-2)).toBe(-11);
  });
  test('-+', () => {
    expect(Calculate('+',-9,2)).toBe(-7);
  });

  test('-', () => {
    expect(Calculate('-',9,2)).toBe(7);
  });
  test('+-', () => {
    expect(Calculate('-',-9,2)).toBe(-11);
  });
  test('--', () => {
    expect(Calculate('-',-9,-2)).toBe(-7);
  });

  test('/', () => {
    expect(Calculate('*',9,2)).toBe(18);
  });
  test('/', () => {
    expect(Calculate('*',-9,2)).toBe(-18);
  });
  test('/', () => {
    expect(Calculate('*',-9,-2)).toBe(18);
  });

  test('/', () => {
    expect(Calculate('/',9,2)).toBe(4.5);
  });
  test('/', () => {
    expect(Calculate('/',-9,2)).toBe(-4.5);
  });
  test('/', () => {
    expect(Calculate('/',-9,-2)).toBe(4.5);
  });

  test('/0', () => {
    expect(Calculate('/',9,0)).toBe(Infinity);
  });

  test('0/*', () => {
    expect(Calculate('/',0,9)).toBe(0);
  });
});

describe('Main Render Test', () => {
  test('Renders the main page', () => {
    render(<App />);
    expect(screen.getByTestId('custom-element')).toHaveTextContent(/форма для расчетов/);
  });
});


