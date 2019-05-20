'use strict'

const store = require('../store')
// const api = require('./api')

const onCreateSuccess = (responseData) => {
  store.game = responseData.game
  $('#message').text(`Let's play! Player X can start!`)
  $('form').trigger('reset')
  $('.smallgameboard').hide()
  $('.gameboard').show()
}

const onCreateFailure = () => {
  $('#message').text('Failed to start new game')
  $('form').trigger('reset')
  setTimeout(() => $('#message').html(''), 5000)
}

const onIndexSuccess = responseData => {
  const games = responseData.games
  $('#stats').append(`<p>You've played ${games.length} games!</p>`)
  setTimeout(() => $('#stats').html(''), 5000)
}

const onIndexFailure = () => {
  $('#stats').text('Failed to get all games :()')
  $('form').trigger('reset')
  setTimeout(() => $('#message').html(''), 5000)
}

const onShowSuccess = responseData => {
  // console.log('success', responseData)
  // console.log(responseData.game.cells.length)
  // console.log(responseData.game.cells)
  store.game = responseData.game
  // console.log(store.game)
  $('form').trigger('reset')

  $('.smallgameboard').show()
  // for (let i = 0; i < responseData.game.cells.length; i++) {
  // const cells = responseData.game.cells[$('.small-box').data('index')]
  // $('.small-box').html(cells)
  // }
  // if ($('.small-box').data('index') === responseData.game.cells[i]) {
  //   $('.small-box').html(responseData.game.cells[i])
  // }
  // }
  // console.log(responseData.game.cells)

  for (let i = 0; i < responseData.game.cells.length; i++) {
    // $('.small-box').html(responseData.game.cells[i])
    if ($('#small-box').data('smindex') === responseData.game.cells.index) {
      $(`div[data-smindex=${i}]`).html(responseData.game.cells[i])
    }
  }
  // $('div').trigger('reset')

  // const text = JSON.stringify(responseData.game.cells)
  // $('#stats').text('Here were the moves: ' + text)
  // setTimeout(() => $('#stats').html(''), 5000)
  // $('#message').removeClass()
  // $('#message').addClass('success')
  // setTimeout(() => $('#small-gameboard').hide(), 5000)
}

const onShowFailure = responseData => {
  // console.log('failure')
  $('#stats').text('Must enter a valid game ID')
  $('form').trigger('reset')
  setTimeout(() => $('#message').html(''), 5000)
  // $('#message').removeClass()
  // $('#message').addClass('failure')
}

const onPlayFailure = responseData => {
  $('#message').text('Failed to make a move')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onPlayFailure
}
