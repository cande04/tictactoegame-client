'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onCreate = (event) => {
  event.preventDefault()

  api.create()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndex = (event) => {
  event.preventDefault()

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShow = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.show(formData)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

// const onUpdate = (event) => {
//   event.preventDefault()
//
//   const form = event.target
//   const formData = getFormFields(form)
//
//   api.update(formData)
//     .then(() => console.log(formData))
//     .catch(() => console.log('failure'))
// }

const gameBoard = ['', '', '', '', '', '', '', '', '']
let turn = 0
const player_x = 'X'
const player_o = 'O'
let currentPlayer = player_x

// const winner = currentPlayer


const takeTurns = function () {
  if (turn % 2 === 1) {
    currentPlayer = player_o
  } else {
    currentPlayer = player_x
  }
  return currentPlayer
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
    currentPlayer = player_x
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
    currentPlayer = player_o
    return true
  } else if (turn === 8) {
    console.log('draw')
    $('#message').html('Draw!')
    // store.user.game.over = true
    return true
  }
}

const isGameOver = function () {
  if (checkForWinner() !== true) {
    return false
  } else {
    return true
  }
}

const onPlay = (event) => {
  if (($(event.target).html() === '') && checkForWinner() !== true) {
    event.preventDefault()
    $(event.target).html(currentPlayer)
    // api.update(event.target)
    for (let i = 0; i < gameBoard.length; i++) {
      gameBoard[$(event.target).data('index')] = currentPlayer
    }
    // store.game.over = false
    checkForWinner()
    turn++
    takeTurns()
    $('#message').html(`Player ${currentPlayer}'s turn!`)
    console.log(gameBoard)
  } else {
    $('#message').html('Already Played!')
  }
  console.log(isGameOver())
}

const onReset = (event) => {
  event.preventDefault()
  $('.box').html('')
  turn = 0
  // store.user.game.over = true
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = ''
  }
  return gameBoard
}

module.exports = {
  onCreate,
  onIndex,
  onShow,
  onPlay,
  // onUpdate,
  onReset
}
