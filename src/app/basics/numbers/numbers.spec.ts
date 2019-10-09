import { increment } from './numbers';

describe('Number tests', () => {
  it('should return 100 if its higher than 100', () => {
    const res = increment(300);
    expect(res).toBe(100);
  });
  it('should return the number provided + 1 if its lower than 100', () => {
    const res = increment(50);
    expect(res).toBe(51);
  });
});
