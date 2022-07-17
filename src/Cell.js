import React, { useState, useEffect } from "react";

import './App.css'

function get_available_numbers(board, row, col) {
  const all_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let used_nums = []
  for (let c = 0; c < board.length; c++) {
    if (board[row][c] !== 0)
      used_nums.push(board[row][c])
  }
  for (let r = 0; r < board.length; r++) {
    if (board[r][col] !== 0)
      used_nums.push(board[r][col])
  }

  //rows 0, 1 and 2 are in square number 0 (2/3 => 0)
  let row_square = Math.floor(row / 3);
  let col_square = Math.floor(col / 3);

  for (let r = row_square * 3; r < (row_square + 1) * 3; r++) {
    for (let c = col_square * 3; c < (col_square + 1) * 3; c++) {
      if (board[r][c] !== 0)
        used_nums.push(board[r][c])
    }
  }
  return all_nums.filter(x => used_nums.indexOf(x) === -1);
}

export default function Cell(props) {
  const { row, col, board, setBoard } = props;

  const [number, setNumber] = useState(board[row][col] === 0 ? null : board[row][col]);

  const availableNumbers = number ? null : get_available_numbers(board, row, col);
  const missingNumbers = number ? null : [...Array(9 - availableNumbers.length).keys()]

  // console.log(availableNumbers)

  const handleClick = (num) => {
    setNumber(num)
    board[row][col] = num;
    setBoard([...board])
  }

  useEffect(() => {
    if (availableNumbers && availableNumbers.length === 1)
      setNumber(availableNumbers[0])
  }, [availableNumbers]);


  return (
    <div className="cell">
      {number ?
        (
          <div className="big-container">
            <span className="big-number">{number}</span>
          </div>
        )
        :
        <div className="small-container">
          {
            availableNumbers.map(num =>
              <span key={num} className="small-number" onClick={() => handleClick(num)}>{num}</span>
            )
          }
          {
            missingNumbers.length > 0 && (
              missingNumbers.map(num =>
                <span key={num} className="blank-number"></span>
              )
            )
          }

        </div>
      }
    </div>
  )
}