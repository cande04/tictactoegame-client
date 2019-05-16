'use strict'

const store = require('../store')
const api = require('./api')

const onCreateSuccess = () => {
  store.game = api.game
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

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure
}
