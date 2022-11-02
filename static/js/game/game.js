export default class Game {
  constructor(params) {
    this.row = params.row;
    this.cell = params.cell;
    this.matrix = params.matrix || new Array(this.row).fill(new Array(this.cell).fill(0));
  }

}