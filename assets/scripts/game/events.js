'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

let turn = 0
const player_x = 'X'
const player_o = 'O'
let currentPlayer = player_x

const onCreate = (event) => {
  event.preventDefault()
  $('.gameboard').show()
  $('.box').html('')
  turn = 0
  currentPlayer = player_x

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

// const store.game.cells = ['', '', '', '', '', '', '', '', '']

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
  // console.log('turn is now ', turn)
  if ((store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') ||
  (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') ||
(store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') ||
(store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') ||
(store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') ||
(store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') ||
(store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') ||
(store.game.cells[2] === 'X' && store.game.cells[4] === 'X' && store.game.cells[6] === 'X')) {
    // console.log('player x wins')
    $('#message').html('Player X Wins!')
    currentPlayer = player_x
    // store.game.over = true
    return true
  } else if ((store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') ||
  (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') ||
(store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') ||
(store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') ||
(store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') ||
(store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') ||
(store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') ||
(store.game.cells[2] === 'O' && store.game.cells[4] === 'O' && store.game.cells[6] === 'O')) {
    // console.log('player o wins')
    $('#message').html('Player O Wins!')
    currentPlayer = player_o
    // store.game.over = true
    return true
  } else if (!store.game.cells.includes('')) {
    // console.log('draw')
    // $(event.target).html(currentPlayer)
    $('#message').html('Draw!')
    // store.game.over = true
    return true
  }
}

// const onReset = (event) => {
//   event.preventDefault()
//   $('.box').html('')
//   turn = 0
//   currentPlayer = player_x
// store.game.over = true
//   store.game.cells[i] = ''
//
// return store.game.cells
// }

const isGameOver = function () {
  if (checkForWinner() !== true) {
    return false
  } else {
    return true
  }
}

const gameData = {
  game: {
    cell: {
      index: 0,
      value: currentPlayer
    },
    over: false
  }
}

const onPlay = (event) => {
  if (($(event.target).html() === '') && checkForWinner() !== true) {
    event.preventDefault()

    store.game.cells[$(event.target).data('index')] = currentPlayer
    checkForWinner()
    gameData.game.cell.index = $(event.target).data('index')
    gameData.game.cell.value = currentPlayer
    // console.log(gameData)
    // checkForWinner()
    gameData.game.over = isGameOver()
    $(event.target).html(currentPlayer)
    api.update(gameData)
      .then(() => {
        // $(event.target).html(currentPlayer)
        // console.log(store.game)
        if (checkForWinner() !== true) {
          turn++
          // console.log('turn increased to ', turn)
          // console.log(store.game.cells)
          takeTurns()
          // store.game.cells[$(event.target).data('index')] = currentPlayer

          $('#message').html(`Player ${currentPlayer}'s turn!`)
        }
        // if (turn === 9) {
        //   checkForWinner()
        //   if (checkForWinner() !== true) {
        //     console.log('draw')
        //     $(event.target).html(currentPlayer)
        //     $('#message').html('Draw!')
        //     // store.game.over = true
        //     return true
        //   }
        // }
      })
      .catch(ui.onPlayFailure)
    // console.log(store.game.cells)
  } else if (checkForWinner() === true) {
    $('#message').html('Game over! Click new game to start over!')
    // gameData.game.over = isGameOver()
  } else if ($(event.target).html() !== '') {
    $('#message').html('Already Played!')
    // console.log('============')
  }
  // console.log(isGameOver())
}

module.exports = {
  onCreate,
  onIndex,
  onShow,
  onPlay
  // onUpdate,
  // onReset
}
