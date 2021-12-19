
export class Trigram {
  name: string;
  paddedName: string;

  constructor(
    public topLineUnbroken: boolean, public topLineFuture: boolean,
    public middleLineUnbroken: boolean, public middleLineFuture: boolean,
    public bottomLineUnbroken: boolean, public bottomLineFuture: boolean
  ) {
    const binaryString = Trigram.getBinary(bottomLineUnbroken, middleLineUnbroken, topLineUnbroken);
    this.name = binaryString;
    this.paddedName = binaryString;
    switch (binaryString) {
      case "000": { this.name = "Earth"; this.paddedName = "  Earth  "; break; }
      case "001": { this.name = "Mountain"; this.paddedName = "Mountain "; break; }
      case "010": { this.name = "Water"; this.paddedName = "  Water  "; break; }
      case "011": { this.name = "Wind"; this.paddedName = "  Wind   "; break; }
      case "100": { this.name = "Thunder"; this.paddedName = " Thunder "; break; }
      case "101": { this.name = "Fire"; this.paddedName = "  Fire   "; break; }
      case "110": { this.name = "Pond"; this.paddedName = "  Pond   "; break; }
      case "111": { this.name = "Heaven"; this.paddedName = " Heaven  "; break; }
    }
  }

  private lineString(unbroken: boolean, future: boolean): string {
    if (unbroken) {
      return `---------${future ? ' F' : '  '}`;
    }
    return `---   ---${future ? ' F' : '  '}`;
  }

  bottomLineToString(): string {
    return this.lineString(this.bottomLineUnbroken, this.bottomLineFuture);
  }

  middleLineToString(): string {
    return this.lineString(this.middleLineUnbroken, this.middleLineFuture);
  }

  topLineToString(): string {
    return this.lineString(this.topLineUnbroken, this.topLineFuture);
  }

  toString(): string {
    return `
${this.topLineToString()} ${this.topLineFuture ? 'F' : ' '}
${this.middleLineToString()} ${this.middleLineFuture ? 'F' : ' '}
${this.bottomLineToString()} ${this.bottomLineFuture ? 'F' : ' '}`;
  }

  getBinary(): string {
    return Trigram.getBinary(
      this.bottomLineUnbroken,
      this.middleLineUnbroken,
      this.topLineUnbroken
    );
  }

  toFuture(): Trigram {
    return new Trigram(
      this.topLineFuture ? !this.topLineUnbroken : this.topLineUnbroken, false,
      this.middleLineFuture ? !this.middleLineUnbroken : this.middleLineUnbroken, false,
      this.bottomLineFuture ? !this.bottomLineUnbroken : this.bottomLineUnbroken, false,
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
