import Divine from '../divination/Divine';
export class Leg {
  touchingGround: boolean;

  constructor() {
    this.touchingGround = Divine.sample();
  }
}

export class LegPair {
  legOne: Leg;
  legTwo: Leg;
  touchingEachOther: boolean;

  constructor() {
    this.legOne = new Leg();
    this.legTwo = new Leg();
    this.touchingEachOther = Divine.future();
  }

  public representsUnbrokenLine(): boolean {
    return this.legOne.touchingGround && this.legTwo.touchingGround
      || !this.legOne.touchingGround && !this.legTwo.touchingGround;
  }

  public affectsFuture(): boolean {
    return this.touchingEachOther;
  }
}