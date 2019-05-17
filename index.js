'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// scripts
require('./assets/scripts/app.js')

// styles
require('./assets/styles/index.scss')

// const gameBoard = ['', '', '', '', '', '', '', '', '']
// let turn = 0

// const turn =
// $(() => {
//   let takeTurn = 0
//   $('#data-index0').on('click', (event) => {
//     event.target.append('X')
//   })
//   console.log(takeTurn++)
//
// })

// let turn = 0
// const player_x = 'X'
// const player_o = 'O'
// let currentPlayer = player_x
// const winner = currentPlayer


// const takeTurns = function () {
//   if (turn % 2 === 1) {
//     currentPlayer = player_o
//   } else {
//     currentPlayer = player_x
//   }
//   return currentPlayer
// }

// const resetGame = function () {
//   turn = 0
//   for (let i = 0; i < gameBoard.length; i++) {
//     gameBoard[i] = ''
//   }
//   return gameBoard
// }
//
// $('#newGame').on('submit', (event) => {
//   event.preventDefault()
//   resetGame()
//   $('.box').html('')
// })

let isGameOver = function () {
  if (checkForWinner) {
    return true
  } else {
    return false
  }
}

// const checkForWinner = function () {
//   if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
//   (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
// (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
// (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
// (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
// (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') ||
// (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
// (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')) {
//     console.log('player x wins')
//     $('#message').html('Player X Wins!')
//     currentPlayer = player_x
//     return true
//   } else if ((gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') ||
//   (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') ||
// (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') ||
// (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') ||
// (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') ||
// (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') ||
// (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') ||
// (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')) {
//     console.log('player o wins')
//     $('#message').html('Player O Wins!')
//     currentPlayer = player_o
//     return true
//   } else if (turn === 8) {
//     console.log('draw')
//     $('#message').html('Draw!')
//     return true
//   }
// }

// const placeTokens = function (event) {
//   $('#data-index0').on('click', (event) => {
//     if (gameBoard[0] === '') {
//       event.target.append(currentPlayer)
//       gameBoard[0] = currentPlayer
//       checkForWinner()
//       if (checkForWinner() === true) {
//         return winner
//       }
//       turn++
//       takeTurns()
//       $('#message').html(`Player ${currentPlayer}'s turn!`)
//       console.log(gameBoard)
//       console.log(turn)
//     } else {
//       $('#message').html('Already Played!')
//     }
//   })
//   $('#data-index1').on('click', (event) => {
//     if (gameBoard[1] === '') {
//       event.target.append(currentPlayer)
//       gameBoard[1] = currentPlayer
//       checkForWinner()
//       if (checkForWinner() === true) {
//         return winner
//       }
//       turn++
//       takeTurns()
//       $('#message').html(`Player ${currentPlayer}'s turn!`)
//     } else {
//       $('#message').html('Already Played!')
//     }
//   })
//   $('#data-index2').on('click', (event) => {
//     if (gameBoard[2] === '') {
//       event.target.append(currentPlayer)
//       gameBoard[2] = currentPlayer
//       checkForWinner()
//       if (checkForWinner() === true) {
//         return winner
//       }
//       turn++
//       takeTurns()
//       $('#message').html(`Player ${currentPlayer}'s turn!`)
//     } else {
//       $('#message').html('Already Played!')
//     }
//   })
//   $('#data-index3').on('click', (event) => {
//     if (gameBoard[3] === '') {
//       event.target.append(currentPlayer)
//       gameBoard[3] = currentPlayer
//       checkForWinner()
//       if (checkForWinner() === true) {
//         return winner
//       }
//       turn++
//       takeTurns()
//       $('#message').html(`Player ${currentPlayer}'s turn!`)
//     } else {
//       $('#message').html('Already Played!')
//     }
//   })
//   $('#data-index4').on('click', (event) => {
//     if (gameBoard[4] === '') {
//       event.target.append(currentPlayer)
//       gameBoard[4] = currentPlayer
//       checkForWinner()
//       if (checkForWinner() === true) {
//         return winner
//       }
//       turn++
//       takeTurns()
//       $('#message').html(`Player ${currentPlayer}'s turn!`)
//     } else {
//       $('#message').html('Already Played!')
//     }
//   })
//   $('#data-index5').on('click', (event) => {
//     if (gameBoard[5] === '') {
//       event.target.append(currentPlayer)
//       gameBoard[5] = currentPlayer
//       checkForWinner()
//       if (checkForWinner() === true) {
//         return winner
//       }
//       turn++
//       takeTurns()
//       $('#message').html(`Player ${currentPlayer}'s turn!`)
//     } else {
//       $('#message').html('Already Played!')
//     }
//   })
//   $('#data-index6').on('click', (event) => {
//     if (gameBoard[6] === '') {
//       event.target.append(currentPlayer)
//       gameBoard[6] = currentPlayer
//       checkForWinner()
//       if (checkForWinner() === true) {
//         return winner
//       }
//       turn++
//       takeTurns()
//       $('#message').html(`Player ${currentPlayer}'s turn!`)
//     } else {
//       $('#message').html('Already Played!')
//     }
//   })
//   $('#data-index7').on('click', (event) => {
//     if (gameBoard[7] === '') {
//       event.target.append(currentPlayer)
//       gameBoard[7] = currentPlayer
//       checkForWinner()
//       if (checkForWinner() === true) {
//         return winner
//       }
//       turn++
//       takeTurns()
//       $('#message').html(`Player ${currentPlayer}'s turn!`)
//     } else {
//       $('#message').html('Already Played!')
//     }
//   })
//   $('#data-index8').on('click', (event) => {
//     if (gameBoard[8] === '') {
//       event.target.append(currentPlayer)
//       gameBoard[8] = currentPlayer
//       checkForWinner()
//       if (checkForWinner() === true) {
//         return winner
//       }
//       turn++
//       takeTurns()
//       $('#message').html(`Player ${currentPlayer}'s turn!`)
//     } else {
//       $('#message').html('Already Played!')
//     }
//     console.log(gameBoard)
//   })
//
// }
// placeTokens()

// module.exports = {
  // gameBoard,
  // placeTokens,
  // checkForWinner,
  // takeTurns,
  // resetGame
// }

// add event listener on grid
// const addToken = function () {
// const grid = document.getElementsByClassName('row')
//
// grid.addEventListener('click', greeting)
// }
// addToken()


// const playOnBoard = function () {
//   const boardSpot = document.getElementsByClassName('box')
//   if (boardSpot === '') {
//     $(boardSpot).on('click', (event) => {
//       event.target.append('currentToken')
//       turn++
//     })
//   } else {
//     $('#message').text('Try again!')
//   }
// }
// playOnBoard()
