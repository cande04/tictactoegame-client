'use strict'

const store = require('../store')
// const api = require('./api')

const onCreateSuccess = (responseData) => {
  store.game = responseData.game
  $('#message').text(`Let's play! Player X can start!`)
  $('form').trigger('reset')
}

const onCreateFailure = () => {
  $('#message').text('Failed to start new game')
  $('form').trigger('reset')
  setTimeout(() => $('#message').html(''), 5000)
}

const onIndexSuccess = responseData => {
  const games = responseData.games
  $('#stats').append(`<p>${games.length}</p>`)
  setTimeout(() => $('#stats').html(''), 5000)
}

const onIndexFailure = () => {
  $('#message').text('Failed to get all games :()')
  $('form').trigger('reset')
  setTimeout(() => $('#message').html(''), 5000)
}

const onShowSuccess = responseData => {
  console.log('success', responseData)
  $('#small-gameboard').show()
  // for (let i = 0; i < responseData.game.cells.length; i++) {
  const cells = responseData.game.cells[$('.small-box').data('index')]
  $('.small-box').html(cells)
  // }
  // if ($('.small-box').data('index') === responseData.game.cells[i]) {
  //   $('.small-box').html(responseData.game.cells[i])
  // }
  // }
  // console.log(responseData.game.cells)

  // for (let i = 0; i < responseData.game.cells.length; i++) {
  //   $('.small-box').data('index').html(responseData.game.cells[i])
  // }

  const text = JSON.stringify(responseData.game.cells)
  $('#stats').text('Here were the moves: ' + text)
  setTimeout(() => $('#stats').html(''), 5000)
  // $('#message').removeClass()
  // $('#message').addClass('success')
  setTimeout(() => $('#small-gameboard').hide(), 5000)
}

const onShowFailure = responseData => {
  console.log('failure')
  $('#message').text('Failed to get game :(')
  $('form').trigger('reset')
  setTimeout(() => $('#message').html(''), 5000)
  // $('#message').removeClass()
  // $('#message').addClass('failure')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure
}
