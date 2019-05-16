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

const gameBoard = ['', '', '', '', '', '', '', '', '']
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

let turn = 0
let currentToken = 'X'
const winner = currentToken

const takeTurns = function () {
  if (turn % 2 === 1) {
    currentToken = 'O'
  } else {
    currentToken = 'X'
  }
  return currentToken
}

const checkForWinner = function () {
  if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
  (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
(gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
(gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
(gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
(gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') ||
(gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
(gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')) {
    console.log('player x wins')
    $('#message').html('Player X Wins!')
    currentToken = 'X'
    return true
  } else if ((gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') ||
  (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') ||
(gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') ||
(gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') ||
(gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') ||
(gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') ||
(gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') ||
(gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')) {
    console.log('player o wins')
    $('#message').html('Player O Wins!')
    currentToken = 'O'
    return true
  } else if (turn === 9) {
    console.log('draw')
  }
}

const placeTokens = function () {
  $('#data-index0').on('click', (event) => {
    if (gameBoard[0] === '') {
      event.target.append(currentToken)
      gameBoard[0] = currentToken
      checkForWinner()
      if (checkForWinner() === true) {
        return winner
      }
      turn++
      takeTurns()
      $('#message').html(`Player ${currentToken}'s turn!`)
      console.log(gameBoard)
      console.log(turn)
    } else {
      $('#message').html('Already Played!')
    }
  })
  $('#data-index1').on('click', (event) => {
    if (gameBoard[1] === '') {
      event.target.append(currentToken)
      gameBoard[1] = currentToken
      checkForWinner()
      if (checkForWinner() === true) {
        return winner
      }
      turn++
      takeTurns()
      $('#message').html(`Player ${currentToken}'s turn!`)
    } else {
      $('#message').html('Already Played!')
    }
  })
  $('#data-index2').on('click', (event) => {
    if (gameBoard[2] === '') {
      event.target.append(currentToken)
      gameBoard[2] = currentToken
      checkForWinner()
      if (checkForWinner() === true) {
        return winner
      }
      turn++
      takeTurns()
      $('#message').html(`Player ${currentToken}'s turn!`)
    } else {
      $('#message').html('Already Played!')
    }
  })
  $('#data-index3').on('click', (event) => {
    if (gameBoard[3] === '') {
      event.target.append(currentToken)
      gameBoard[3] = currentToken
      checkForWinner()
      if (checkForWinner() === true) {
        return winner
      }
      turn++
      takeTurns()
      $('#message').html(`Player ${currentToken}'s turn!`)
    } else {
      $('#message').html('Already Played!')
    }
  })
  $('#data-index4').on('click', (event) => {
    if (gameBoard[4] === '') {
      event.target.append(currentToken)
      gameBoard[4] = currentToken
      checkForWinner()
      if (checkForWinner() === true) {
        return winner
      }
      turn++
      takeTurns()
      $('#message').html(`Player ${currentToken}'s turn!`)
    } else {
      $('#message').html('Already Played!')
    }
  })
  $('#data-index5').on('click', (event) => {
    if (gameBoard[5] === '') {
      event.target.append(currentToken)
      gameBoard[5] = currentToken
      checkForWinner()
      if (checkForWinner() === true) {
        return winner
      }
      turn++
      takeTurns()
      $('#message').html(`Player ${currentToken}'s turn!`)
    } else {
      $('#message').html('Already Played!')
    }
  })
  $('#data-index6').on('click', (event) => {
    if (gameBoard[6] === '') {
      event.target.append(currentToken)
      gameBoard[6] = currentToken
      checkForWinner()
      if (checkForWinner() === true) {
        return winner
      }
      turn++
      takeTurns()
      $('#message').html(`Player ${currentToken}'s turn!`)
    } else {
      $('#message').html('Already Played!')
    }
  })
  $('#data-index7').on('click', (event) => {
    if (gameBoard[7] === '') {
      event.target.append(currentToken)
      gameBoard[7] = currentToken
      checkForWinner()
      if (checkForWinner() === true) {
        return winner
      }
      turn++
      takeTurns()
      $('#message').html(`Player ${currentToken}'s turn!`)
    } else {
      $('#message').html('Already Played!')
    }
  })
  $('#data-index8').on('click', (event) => {
    if (gameBoard[8] === '') {
      event.target.append(currentToken)
      gameBoard[8] = currentToken
      checkForWinner()
      if (checkForWinner() === true) {
        return winner
      }
      turn++
      takeTurns()
      $('#message').html(`Player ${currentToken}'s turn!`)
    } else {
      $('#message').html('Already Played!')
    }
    console.log(gameBoard)
  })
}
placeTokens()


// add event listener on grid
// const addToken = function () {
// const grid = document.getElementsByClassName('row')
//
// grid.addEventListener('click', greeting)
//}
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
