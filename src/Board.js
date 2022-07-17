
export default class Board {

  all_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  row_col_num = this.all_nums.length;
  game = Array(9).fill().map(() => Array(9).fill(0));


  constructor() {
  }

  get_game(){
    return this.game;
  }

  update_board(row, col, num){
    this.game[row][col] = num;
    return this
  }

  get_row_available_numbers(row) {
    let used_nums = []
    for (let c = 0; c < this.row_col_num; c++) {
      if (this.game[row][c] != 0)
        used_nums.push(this.game[row][c])
    }
    return this.all_nums.filter(x => used_nums.indexOf(x) === -1)

  }

  get_col_available_numbers(col) {

  }

}