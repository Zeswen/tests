import { Player2 } from './player2';

describe('EventEmitter tests', () => {
  let player2 = new Player2();
  beforeEach(() => (player2 = new Player2()));
  it('should emit an event when receiving dmg', () => {
    let newHp = 0;
    player2.hpChange.subscribe(hp => (newHp = hp));
    player2.receiveDamage(1000);
    expect(newHp).toBe(0);
  });
  it('should survive when receiving less than 100dmg', () => {
    let newHp = 0;
    player2.hpChange.subscribe(hp => (newHp = hp));
    player2.receiveDamage(50);
    expect(newHp).toBe(50);
  });
});
