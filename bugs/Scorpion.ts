import { LegPair } from './Leg';
import { Claw } from './Claw';
import { Trigram } from '../divination/Trigram';
import { Hexagram } from '../divination/Hexagram';

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

  // getLeftTrigram(): Trigram {
  //   return new Trigram(
  //     this.leftClaw.open,
  //     this.leftFrontLegs.representsUnbrokenLine(),
  //     this.leftRearLegs.representsUnbrokenLine(),
  //   );
  // }

  // getRightTrigram(): Trigram {
  //   return new Trigram(
  //     this.rightClaw.open,
  //     this.rightFrontLegs.representsUnbrokenLine(),
  //     this.rightRearLegs.representsUnbrokenLine(),
  //   );
  // }

  toString(): string {
    const leftTrigram: Trigram = new Trigram(
      this.leftRearLegs.representsUnbrokenLine(), this.leftRearLegs.affectsFuture(),
      this.leftFrontLegs.representsUnbrokenLine(), this.leftFrontLegs.affectsFuture(),
      this.leftClaw.closed, this.leftClaw.affectsFuture(),
    );
    const leftFutureTrigram: Trigram = leftTrigram.toFuture();

    const rightTrigram: Trigram = new Trigram(
      this.rightRearLegs.representsUnbrokenLine(), this.rightRearLegs.affectsFuture(),
      this.rightFrontLegs.representsUnbrokenLine(), this.rightFrontLegs.affectsFuture(),
      this.rightClaw.closed, this.rightClaw.affectsFuture(),
    );
    const rightFutureTrigram: Trigram = rightTrigram.toFuture();

    const presentHexagram: Hexagram = new Hexagram(leftTrigram, rightTrigram);
    const futureHexagram: Hexagram = new Hexagram(leftFutureTrigram, rightFutureTrigram);

    //TODO: Rotate image 180 degrees so it matches claws corresponding to bottom line (hahaha...no)
    const stringRepresentation: string = `
              ___    ___
             (  ${this.leftClaw.closed ? '=' : '<'}    ${this.rightClaw.closed ? '=' : '>'}  )
             //        \\\\
             \\\\___..___//
              \\-(    )-/
              /__|__|__\\
            ${this.leftFrontLegs.legOne.touchingGround ? '\\' : '_'}_|__|__|__|_${this.rightFrontLegs.legOne.touchingGround ? '/' : '_'}
            ${this.leftFrontLegs.legTwo.touchingGround ? '\\' : '_'}_|__|__|__|_${this.rightFrontLegs.legTwo.touchingGround ? '/' : '_'}
            ${this.leftRearLegs.legOne.touchingGround ? '\\' : '_'}_|__\\__/__|_${this.rightRearLegs.legOne.touchingGround ? '/' : '_'}
            ${this.leftRearLegs.legTwo.touchingGround ? '\\' : '_'}_|__\\__/__|_${this.rightRearLegs.legTwo.touchingGround ? '/' : '_'}
${leftTrigram.paddedName}       \\\\__//       ${rightTrigram.paddedName}
${leftTrigram.topLineToString()}      \\||/   _)   ${rightTrigram.topLineToString()}
${leftTrigram.middleLineToString()}       ||   ( )   ${rightTrigram.middleLineToString()}
${leftTrigram.bottomLineToString()}       \\\\___//    ${rightTrigram.bottomLineToString()}
                   '---'
    |                            |        
    |                            |        
    V                            V

${leftFutureTrigram.paddedName}                  ${rightFutureTrigram.paddedName}
${leftFutureTrigram.topLineToString()}                  ${rightFutureTrigram.topLineToString()}
${leftFutureTrigram.middleLineToString()}                  ${rightFutureTrigram.middleLineToString()}
${leftFutureTrigram.bottomLineToString()}                  ${rightFutureTrigram.bottomLineToString()}

---------------PRESENT----------------

       ${presentHexagram.name}
              ${presentHexagram.top.topLineToString()}
              ${presentHexagram.top.middleLineToString()}
              ${presentHexagram.top.bottomLineToString()}

              ${presentHexagram.bottom.topLineToString()}
              ${presentHexagram.bottom.middleLineToString()}
              ${presentHexagram.bottom.bottomLineToString()}
              
---------------FUTURE-----------------

       ${futureHexagram.name}
              ${futureHexagram.top.topLineToString()}
              ${futureHexagram.top.middleLineToString()}
              ${futureHexagram.top.bottomLineToString()}

              ${futureHexagram.bottom.topLineToString()}
              ${futureHexagram.bottom.middleLineToString()}
              ${futureHexagram.bottom.bottomLineToString()}
                   `;


    return stringRepresentation;
  }
}