import { LegPair } from './Leg';
import { Claw } from './Claw';
import { Trigram } from '../divination/Trigrams';

export class Scorpion {
  rightClaw: Claw;
  rightFrontLegs: LegPair;
  rightRearLegs: LegPair;

  leftClaw: Claw;
  leftFrontLegs: LegPair;
  leftRearLegs: LegPair;

  constructor() {
    this.rightClaw = new Claw();
    this.rightFrontLegs = new LegPair();
    this.rightRearLegs = new LegPair();
    this.leftClaw = new Claw();
    this.leftFrontLegs = new LegPair();
    this.leftRearLegs = new LegPair();
  }

  getLeftTrigram(): Trigram {
    return new Trigram(
      this.leftClaw.open,
      this.leftFrontLegs.representsUnbrokenLine(),
      this.leftRearLegs.representsUnbrokenLine()
    );
  }

  getRightTrigram(): Trigram {
    return new Trigram(
      this.rightClaw.open,
      this.rightFrontLegs.representsUnbrokenLine(),
      this.rightRearLegs.representsUnbrokenLine()
    );
  }

  toString(): string {
    const stringRepresentation: string = `
    ___    ___
    ( _<    >_ )
    //        \\
    \\___..___//
     '-(    )-'
      __|__|__
     /__|__|__\
     /__|__|__\
     /__\__/__\
     /__\__/__\
       /\__/\
       \ || /  _)
         ||   ( )
         \\___//
          '---'`;
    

    return '';
  }
}