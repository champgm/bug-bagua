import { Trigram } from "./Trigram";

export class Hexagram {
  name: string;
  number: number;
  constructor(top: Trigram, bottom: Trigram) {
    const binaryString = top.getBinary() + bottom.getBinary();
    this.name = binaryString;
    switch (binaryString) {
      case "000000": { this.number = 2; this.name = "Field"; break; }
      case "000001": { this.number = 23; this.name = "Stripping"; break; }
      case "000010": { this.number = 8; this.name = "Grouping"; break; }
      case "000011": { this.number = 20; this.name = "Viewing"; break; }
      case "000100": { this.number = 16; this.name = "Providing For"; break; }
      case "000101": { this.number = 0; this.name = "asdf"; break; }
      case "000110": { this.number = 0; this.name = "asdf"; break; }
      case "000111": { this.number = 12; this.name = "Obstruction"; break; }
      case "001000": { this.number = 15; this.name = "Humbling"; break; }
      case "001001": { this.number = 0; this.name = "asdf"; break; }
      case "001010": { this.number = 0; this.name = "asdf"; break; }
      case "001011": { this.number = 0; this.name = "asdf"; break; }
      case "001100": { this.number = 0; this.name = "asdf"; break; }
      case "001101": { this.number = 0; this.name = "asdf"; break; }
      case "001110": { this.number = 0; this.name = "asdf"; break; }
      case "001111": { this.number = 0; this.name = "asdf"; break; }
      case "010000": { this.number = 7; this.name = "Leading"; break; }
      case "010001": { this.number = 4; this.name = "Enveloping"; break; }
      case "010010": { this.number = 29; this.name = "Gorge"; break; }
      case "010011": { this.number = 0; this.name = "asdf"; break; }
      case "010100": { this.number = 0; this.name = "asdf"; break; }
      case "010101": { this.number = 0; this.name = "asdf"; break; }
      case "010110": { this.number = 0; this.name = "asdf"; break; }
      case "010111": { this.number = 6; this.name = "Arguing"; break; }
      case "011000": { this.number = 0; this.name = "asdf"; break; }
      case "011001": { this.number = 18; this.name = "Correcting"; break; }
      case "011010": { this.number = 0; this.name = "asdf"; break; }
      case "011011": { this.number = 0; this.name = "asdf"; break; }
      case "011100": { this.number = 0; this.name = "asdf"; break; }
      case "011101": { this.number = 0; this.name = "asdf"; break; }
      case "011110": { this.number = 28; this.name = "Great Exceeding"; break; }
      case "011111": { this.number = 0; this.name = "asdf"; break; }
      case "100000": { this.number = 24; this.name = "Returning"; break; }
      case "100001": { this.number = 27; this.name = "Swallowing"; break; }
      case "100010": { this.number = 3; this.name = "Sprouting"; break; }
      case "100011": { this.number = 0; this.name = "asdf"; break; }
      case "100100": { this.number = 0; this.name = "asdf"; break; }
      case "100101": { this.number = 21; this.name = "Gnawing Bite"; break; }
      case "100110": { this.number = 17; this.name = "Following"; break; }
      case "100111": { this.number = 25; this.name = "Without Embroiling"; break; }
      case "101000": { this.number = 0; this.name = "asdf"; break; }
      case "101001": { this.number = 22; this.name = "Adorning"; break; }
      case "101010": { this.number = 0; this.name = "asdf"; break; }
      case "101011": { this.number = 0; this.name = "asdf"; break; }
      case "101100": { this.number = 0; this.name = "asdf"; break; }
      case "101101": { this.number = 30; this.name = "Radiance"; break; }
      case "101110": { this.number = 0; this.name = "asdf"; break; }
      case "101111": { this.number = 13; this.name = "Concording People"; break; }
      case "110000": { this.number = 19; this.name = "Nearing"; break; }
      case "110001": { this.number = 0; this.name = "asdf"; break; }
      case "110010": { this.number = 0; this.name = "asdf"; break; }
      case "110011": { this.number = 0; this.name = "asdf"; break; }
      case "110100": { this.number = 0; this.name = "asdf"; break; }
      case "110101": { this.number = 0; this.name = "asdf"; break; }
      case "110110": { this.number = 0; this.name = "asdf"; break; }
      case "110111": { this.number = 10; this.name = "Treading"; break; }
      case "111000": { this.number = 11; this.name = "Pervading"; break; }
      case "111001": { this.number = 26; this.name = "Great Accumulating"; break; }
      case "111010": { this.number = 5; this.name = "Attending"; break; }
      case "111011": { this.number = 9; this.name = "Small Accumulating"; break; }
      case "111100": { this.number = 0; this.name = "asdf"; break; }
      case "111101": { this.number = 14; this.name = "Great Possessing"; break; }
      case "111110": { this.number = 0; this.name = "asdf"; break; }
      case "111111": { this.number = 1; this.name = "Force"; break; }
    }
  }
}