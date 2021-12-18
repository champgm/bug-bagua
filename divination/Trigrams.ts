
export class Trigram {
  name: string;

  constructor(
    public bottomLineUnbroken: boolean,
    public middleLineUnbroken: boolean,
    public topLineUnbroken: boolean,
  ) {
    const binaryString = Trigram.getBinary(bottomLineUnbroken, middleLineUnbroken, topLineUnbroken);
    switch (binaryString) {
      case "000": {
        this.name = "Earth";
        break;
      }
      case "001": {
        this.name = "Mountain";
        break;
      }
      case "010": {
        this.name = "Water";
        break;
      }
      case "011": {
        this.name = "Wind";
        break;
      }
      case "100": {
        this.name = "Thunder";
        break;
      }
      case "101": {
        this.name = "Fire";
        break;
      }
      case "110": {
        this.name = "Pond";
        break;
      }
      case "111": {
        this.name = "Heaven";
        break;
      }
    }
  }

  private lineString(unbroken: boolean): string {
    if (unbroken) {
      return '---';
    }
    return '- -';
  }

  lineToString(index: number): string {
    if (index == 0) return this.lineString(this.bottomLineUnbroken);
    if (index == 1) return this.lineString(this.middleLineUnbroken);
    if (index == 2) return this.lineString(this.topLineUnbroken);
    throw new Error("Invalid line number, cannot convert to string.");
  }

  static getBinary(
    bottomLineUnbroken: boolean,
    middleLineUnbroken: boolean,
    topLineUnbroken: boolean
  ): string {
    let binaryString = "";
    binaryString += bottomLineUnbroken ? "1" : "0";
    binaryString += middleLineUnbroken ? "1" : "0";
    binaryString += topLineUnbroken ? "1" : "0";
    return binaryString;
  }
}

export const trigramMap: { [key: string]: Trigram } = {
  "000": new Trigram(false, false, false),
  "001": new Trigram(false, false, true),
  "010": new Trigram(false, true, false),
  "011": new Trigram(false, true, true),
  "100": new Trigram(true, false, false),
  "101": new Trigram(true, false, true),
  "110": new Trigram(true, true, false),
  "111": new Trigram(true, true, true),
};
