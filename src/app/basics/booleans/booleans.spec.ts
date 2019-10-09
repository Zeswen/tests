import { isLoggedIn } from './booleans';

describe('Boolean tests', () => {
  it('should return true', () => {
    const res = isLoggedIn();
    expect(res).toBeTruthy();
  });
});
