import { Player } from './classes';

describe('Class tests', () => {
  let player = new Player();
  beforeEach(() => {
    player = new Player();
  });
  it('should return 80hp if receives 20dmg', () => {
    const res = player.receiveDamage(20);
    expect(res).toBe(80);
  });
  it('should return 50hp if receives 50dmg', () => {
    const res = player.receiveDamage(50);
    expect(res).toBe(50);
  });
  it('should return 0hp if receives 100dmg', () => {
    const res = player.receiveDamage(100);
    expect(res).toBe(0);
  });
});
