import { getGods } from './arrays';

describe('Array tests', () => {
  it('should return at least 3 gods', () => {
    const res = getGods();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });
  it('should return Me and I', () => {
    const res = getGods();
    expect(res).toContain('Me');
    expect(res).toContain('I');
  });
});
