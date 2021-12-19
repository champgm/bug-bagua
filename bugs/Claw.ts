import Divine from '../divination/Divine';
export class Claw {
  closed: boolean;
  extended: boolean;

  constructor() {
    this.closed = Divine.sample();
    this.extended = Divine.future();
  }

  public representsBrokenLine(): boolean {
    return !this.closed;
  }
  public affectsFuture(): boolean {
    return this.extended;
  }
}