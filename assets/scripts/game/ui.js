'use strict'

const store = require('../store')
// const api = require('./api')

const onCreateSuccess = (responseData) => {
  store.game = responseData.game
}

const onCreateFailure = () => {
  $('#message').text('Failed to start new game')
}

const onIndexSuccess = responseData => {
  const games = responseData.games
  $('#stats').append(`<p>${games.length}</p>`)
}

const onIndexFailure = () => {
  $('#message').text('Failed to get all games :()')
}

const onShowSuccess = responseData => {
  console.log('success', responseData)
  const text = JSON.stringify(responseData.game.cells)
  $('#message').text('Here were the moves: ' + text)
  // $('#message').removeClass()
  // $('#message').addClass('success')
}

const onShowFailure = responseData => {
  console.log('failure')
  $('#message').text('Failed to get game :(')
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
