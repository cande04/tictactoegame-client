'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('#signup').on('submit', authEvents.onSignUp)
  $('#signin').on('submit', authEvents.onSignIn)
  $('#signout').on('submit', authEvents.onSignOut)
  $('#changepw').on('submit', authEvents.onChangePassword)

  $('#newGame').on('submit', gameEvents.onCreate)
  $('#games-index').on('submit', gameEvents.onIndex)
})
