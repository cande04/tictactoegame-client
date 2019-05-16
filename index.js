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
let currentToken = 'x'

const takeTurns = function () {
  if (turn % 2 === 1) {
    currentToken = 'o'
  } else {
    currentToken = 'x'
  }
  return currentToken
}


const placeTokens = function () {
  $('#data-index0').on('click', (event) => {
    if (gameBoard[0] === '') {
      event.target.append(currentToken)
      gameBoard[0] = currentToken
      turn++
      takeTurns()
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
      turn++
      takeTurns()
    } else {
      $('#message').html('Already Played!')
    }
  })
  $('#data-index2').on('click', (event) => {
    if (gameBoard[2] === '') {
      event.target.append(currentToken)
      gameBoard[2] = currentToken
      turn++
      takeTurns()
    } else {
      $('#message').html('Already Played!')
    }
  })
  $('#data-index3').on('click', (event) => {
    if (gameBoard[3] === '') {
      event.target.append(currentToken)
      gameBoard[3] = currentToken
      turn++
      takeTurns()
    } else {
      $('#message').html('Already Played!')
    }
  })
  $('#data-index4').on('click', (event) => {
      if (gameBoard[4] === '') {
      event.target.append(currentToken)
      gameBoard[4] = currentToken
      turn++
      takeTurns()
    } else {
      $('#message').html('Already Played!')
    }
  })
  $('#data-index5').on('click', (event) => {
      if (gameBoard[5] === '') {
      event.target.append(currentToken)
      gameBoard[5] = currentToken
      turn++
      takeTurns()
    } else {
      $('#message').html('Already Played!')
    }
  })
  $('#data-index6').on('click', (event) => {
    if (gameBoard[6] === '') {
      event.target.append(currentToken)
      gameBoard[6] = currentToken
      turn++
      takeTurns()
    } else {
      $('#message').html('Already Played!')
    }
  })
  $('#data-index7').on('click', (event) => {
    if (gameBoard[7] === '') {
      event.target.append(currentToken)
      gameBoard[7] = currentToken
      turn++
      takeTurns()
    } else {
      $('#message').html('Already Played!')
    }
  })
  $('#data-index8').on('click', (event) => {
    if (gameBoard[8] === '') {
      event.target.append(currentToken)
      gameBoard[8] = currentToken
      turn++
      takeTurns()
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
