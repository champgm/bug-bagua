import { LegPair } from './Leg';
import { Claw } from './Claw';
import { Trigram, trigramMap } from '../divination/Trigram';

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
    const leftTrigram: Trigram = new Trigram(
      !this.leftClaw.open,
      this.leftFrontLegs.representsUnbrokenLine(),
      this.leftRearLegs.representsUnbrokenLine()
    );
    const leftFutureTrigram: Trigram = new Trigram(
      this.leftClaw.extended ? !leftTrigram.bottomLineUnbroken : leftTrigram.bottomLineUnbroken,
      this.leftFrontLegs.touchingEachOther ? !leftTrigram.middleLineUnbroken : leftTrigram.middleLineUnbroken,
      this.leftRearLegs.touchingEachOther ? !leftTrigram.bottomLineUnbroken : leftTrigram.bottomLineUnbroken,
    );
    const rightTrigram: Trigram = new Trigram(
      !this.rightClaw.open,
      this.rightFrontLegs.representsUnbrokenLine(),
      this.rightRearLegs.representsUnbrokenLine()
    );
    const rightFutureTrigram: Trigram = new Trigram(
      this.rightClaw.extended ? !rightTrigram.bottomLineUnbroken : rightTrigram.bottomLineUnbroken,
      this.rightFrontLegs.touchingEachOther ? !rightTrigram.middleLineUnbroken : rightTrigram.middleLineUnbroken,
      this.rightRearLegs.touchingEachOther ? !rightTrigram.bottomLineUnbroken : rightTrigram.bottomLineUnbroken,
    );
    const stringRepresentation: string = `
              ___    ___
             (  ${this.leftClaw.open ? '<' : '='}    ${this.rightClaw.open ? '>' : '='}  )
             //        \\\\
             \\\\___..___//
              \\-(    )-/
              /__|__|__\\
            ${this.leftFrontLegs.legOne.touchingGround ? '\\' : '_'}_|__|__|__|_${this.rightFrontLegs.legOne.touchingGround ? '/' : '_'}
            ${this.leftFrontLegs.legTwo.touchingGround ? '\\' : '_'}_|__|__|__|_${this.rightFrontLegs.legTwo.touchingGround ? '/' : '_'}
            ${this.leftRearLegs.legOne.touchingGround ? '\\' : '_'}_|__\\__/__|_${this.rightRearLegs.legOne.touchingGround ? '/' : '_'}
            ${this.leftRearLegs.legTwo.touchingGround ? '\\' : '_'}_|__\\__/__|_${this.rightRearLegs.legTwo.touchingGround ? '/' : '_'}
${leftTrigram.paddedName}       \\\\__//           ${rightTrigram.paddedName}
${leftTrigram.topLineToString()}${this.leftClaw.extended ? ' F' : '  '}      \\||/   _)       ${rightTrigram.topLineToString()}${this.rightClaw.extended ? ' F' : '  '}
${leftTrigram.middleLineToString()}${this.leftFrontLegs.touchingEachOther ? ' F' : '  '}       ||   ( )       ${rightTrigram.middleLineToString()}${this.rightFrontLegs.touchingEachOther ? ' F' : '  '}
${leftTrigram.bottomLineToString()}${this.leftRearLegs.touchingEachOther ? ' F' : '  '}       \\\\___//        ${rightTrigram.bottomLineToString()}${this.rightRearLegs.touchingEachOther ? ' F' : '  '}
                   '---'

------------------FUTURE------------------

${leftFutureTrigram.paddedName}                        ${rightFutureTrigram.paddedName}
${leftFutureTrigram.topLineToString()}                        ${rightFutureTrigram.topLineToString()}
${leftFutureTrigram.middleLineToString()}                        ${rightFutureTrigram.middleLineToString()}
${leftFutureTrigram.bottomLineToString()}                        ${rightFutureTrigram.bottomLineToString()}
                   `;


    return stringRepresentation;
  }
}