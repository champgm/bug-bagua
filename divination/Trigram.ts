
export class Trigram {
  name: string;
  paddedName: string;

  constructor(
    public bottomLineUnbroken: boolean,
    public middleLineUnbroken: boolean,
    public topLineUnbroken: boolean,
  ) {
    const binaryString = Trigram.getBinary(bottomLineUnbroken, middleLineUnbroken, topLineUnbroken);
    this.name = binaryString;
    this.paddedName = binaryString;
    switch (binaryString) {
      case "000": {
        this.name = "Earth";
        this.paddedName = "  Earth  ";
        break;
      }
      case "001": {
        this.name = "Mountain";
        this.paddedName = "Mountain ";
        break;
      }
      case "010": {
        this.name = "Water";
        this.paddedName = "  Water  ";
        break;
      }
      case "011": {
        this.name = "Wind";
        this.paddedName = "  Wind   ";
        break;
      }
      case "100": {
        this.name = "Thunder";
        this.paddedName = " Thunder ";
        break;
      }
      case "101": {
        this.name = "Fire";
        this.paddedName = "  Fire   ";
        break;
      }
      case "110": {
        this.name = "Pond";
        this.paddedName = "  Pond   ";
        break;
      }
      case "111": {
        this.name = "Heaven";
        this.paddedName = " Heaven  ";
        break;
      }
    }
  }

  private lineString(unbroken: boolean): string {
    if (unbroken) {
      return '---------';
    }
    return '---   ---';
  }

  bottomLineToString(): string {
    return this.lineString(this.bottomLineUnbroken);
  }

  middleLineToString(): string {
    return this.lineString(this.middleLineUnbroken);
  }

  topLineToString(): string {
    return this.lineString(this.topLineUnbroken);
  }

  getBinary(): string {
    return Trigram.getBinary(
      this.bottomLineUnbroken,
      this.middleLineUnbroken,
      this.topLineUnbroken
    );
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
