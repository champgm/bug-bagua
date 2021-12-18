import Divine from '../divination/Divine';
export class Claw {
  open: boolean;
  extended: boolean;

  constructor() {
    this.open = Divine.sample();
    this.extended = Divine.future();
  }

  public representsBrokenLine(): boolean {
    return this.open;
  }
  public affectsFuture(): boolean {
    return this.extended;
  }
}