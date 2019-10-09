import { message } from './string';

describe('String tests', () => {
  it('should return a string', () => {
    const res = message('Zeswen');
    expect(typeof res).toBe('string');
  });
  it('should return greetings to the name provided', () => {
    const name = 'Zeswen';
    const res = message(name);
    expect(res).toContain(name);
  });
});
