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
  games.forEach(game => {
    $('#stats').append(`<p>${game.id}: cells ${game.cells}`)
  })
}

const onIndexFailure = () => {
  $('#message').text('Failed to get all games :()')
}

const onShowSuccess = responseData => {
  console.log('success', responseData)
  const text = responseData.game.text
  $('#message').text('Showing game: ' + text)
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
