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
  $('#signout').on('click', authEvents.onSignOut)
  $('#changepw').on('submit', authEvents.onChangePassword)

  $('.signin-button').on('click', function () {
    $('#signinModal').modal('hide')
  })

  $('.signup-button').on('click', function () {
    $('#signupModal').modal('hide')
  })

  $('.changepw-button').on('click', function () {
    $('#changePwModal').modal('hide')
  })

  $('document').ready(() => {
    $('#newGame').hide()
  })

  $('document').ready(() => {
    $('#games-index').hide()
  })

  $('document').ready(() => {
    $('#games-show').hide()
  })

  $('document').ready(() => {
    $('#games-index').hide()
  })

  $('document').ready(() => {
    $('#gameboard').hide()
})

  $('document').ready(() => {
    $('#buttonChange').hide()
  })

  $('document').ready(() => {
    $('#signout').hide()
  })

  $('document').ready(() => {
    $('#small-gameboard').hide()
  })


  $('#newGame').on('submit', gameEvents.onCreate)
  $('#games-index').on('submit', gameEvents.onIndex)
  $('#games-show').on('submit', gameEvents.onShow)
  $('.box').on('click', gameEvents.onPlay)
  $('#newGame').on('submit', gameEvents.onReset)
})
