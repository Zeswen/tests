import { EventEmitter } from '@angular/core';

export class Player2 {
  hp: number;
  hpChange = new EventEmitter<number>();
  constructor() {
    this.hp = 100;
  }

  receiveDamage(dmg: number) {
    if (dmg > this.hp) {
      this.hp = 0;
    } else {
      this.hp -= dmg;
    }
    this.hpChange.emit(this.hp);
  }
}
