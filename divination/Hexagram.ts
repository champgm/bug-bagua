import { Trigram } from "./Trigram";

export class Hexagram {
  name: string;
  number: number;
  constructor(top: Trigram, bottom: Trigram) {
    const binaryString = top.getBinary() + bottom.getBinary();
    this.name = binaryString;
    switch (binaryString) {
      case "000000": { this.number = 2; this.name = "Field"; break; }
      case "000001": { this.number = 0; this.name = "asdf"; break; }
      case "000010": { this.number = 8; this.name = "Grouping"; break; }
      case "000011": { this.number = 0; this.name = "asdf"; break; }
      case "000100": { this.number = 0; this.name = "asdf"; break; }
      case "000101": { this.number = 0; this.name = "asdf"; break; }
      case "000110": { this.number = 0; this.name = "asdf"; break; }
      case "000111": { this.number = 0; this.name = "asdf"; break; }
      case "001000": { this.number = 0; this.name = "asdf"; break; }
      case "001001": { this.number = 0; this.name = "asdf"; break; }
      case "001010": { this.number = 0; this.name = "asdf"; break; }
      case "001011": { this.number = 0; this.name = "asdf"; break; }
      case "001100": { this.number = 0; this.name = "asdf"; break; }
      case "001101": { this.number = 0; this.name = "asdf"; break; }
      case "001110": { this.number = 0; this.name = "asdf"; break; }
      case "001111": { this.number = 0; this.name = "asdf"; break; }
      case "010000": { this.number = 7; this.name = "Leading"; break; }
      case "010001": { this.number = 4; this.name = "Enveloping"; break; }
      case "010010": { this.number = 0; this.name = "asdf"; break; }
      case "010011": { this.number = 0; this.name = "asdf"; break; }
      case "010100": { this.number = 0; this.name = "asdf"; break; }
      case "010101": { this.number = 0; this.name = "asdf"; break; }
      case "010110": { this.number = 0; this.name = "asdf"; break; }
      case "010111": { this.number = 6; this.name = "Arguing"; break; }
      case "011000": { this.number = 0; this.name = "asdf"; break; }
      case "011001": { this.number = 0; this.name = "asdf"; break; }
      case "011010": { this.number = 0; this.name = "asdf"; break; }
      case "011011": { this.number = 0; this.name = "asdf"; break; }
      case "011100": { this.number = 0; this.name = "asdf"; break; }
      case "011101": { this.number = 0; this.name = "asdf"; break; }
      case "011110": { this.number = 0; this.name = "asdf"; break; }
      case "011111": { this.number = 0; this.name = "asdf"; break; }
      case "100000": { this.number = 0; this.name = "asdf"; break; }
      case "100001": { this.number = 0; this.name = "asdf"; break; }
      case "100010": { this.number = 3; this.name = "Sprouting"; break; }
      case "100011": { this.number = 0; this.name = "asdf"; break; }
      case "100100": { this.number = 0; this.name = "asdf"; break; }
      case "100101": { this.number = 0; this.name = "asdf"; break; }
      case "100110": { this.number = 0; this.name = "asdf"; break; }
      case "100111": { this.number = 0; this.name = "asdf"; break; }
      case "101000": { this.number = 0; this.name = "asdf"; break; }
      case "101001": { this.number = 0; this.name = "asdf"; break; }
      case "101010": { this.number = 0; this.name = "asdf"; break; }
      case "101011": { this.number = 0; this.name = "asdf"; break; }
      case "101100": { this.number = 0; this.name = "asdf"; break; }
      case "101101": { this.number = 0; this.name = "asdf"; break; }
      case "101110": { this.number = 0; this.name = "asdf"; break; }
      case "101111": { this.number = 0; this.name = "asdf"; break; }
      case "110000": { this.number = 0; this.name = "asdf"; break; }
      case "110001": { this.number = 0; this.name = "asdf"; break; }
      case "110010": { this.number = 0; this.name = "asdf"; break; }
      case "110011": { this.number = 0; this.name = "asdf"; break; }
      case "110100": { this.number = 0; this.name = "asdf"; break; }
      case "110101": { this.number = 0; this.name = "asdf"; break; }
      case "110110": { this.number = 0; this.name = "asdf"; break; }
      case "110111": { this.number = 0; this.name = "asdf"; break; }
      case "111000": { this.number = 0; this.name = "asdf"; break; }
      case "111001": { this.number = 0; this.name = "asdf"; break; }
      case "111010": { this.number = 5; this.name = "Attending"; break; }
      case "111011": { this.number = 9; this.name = "Small Accumulating"; break; }
      case "111100": { this.number = 0; this.name = "asdf"; break; }
      case "111101": { this.number = 0; this.name = "asdf"; break; }
      case "111110": { this.number = 0; this.name = "asdf"; break; }
      case "111111": { this.number = 1; this.name = "Force"; break; }
    }
  }
}