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

  $('#signin-submit').on('submit', function () {
    $('#modalLRForm').modal('hide')
  })

  $('#signup-submit').on('submit', function () {
    $('#modalLRForm').modal('hide')
  })

  $('.changepw-button').on('click', function () {
    $('#changePwModal').modal('hide')
  })

  $('#signout').on('click', function () {
    $('#initialOnset').show()
  })

  // $('document').ready(() => {
  //   $('#modalLRForm').show()
  // })

  $('document').ready(() => {
    $('#newGame').hide()
  })

  $('document').ready(() => {
    $('#games-index').hide()
  })

  $('document').ready(() => {
    $('#games-show').hide()
  })

  // $('document').ready(() => {
  //   $('#game-show-id').hide()
  // })

  $('document').ready(() => {
    $('#games-index').hide()
  })

  $('document').ready(() => {
    $('.gameboard').hide()
  })

  $('document').ready(() => {
    $('#buttonChange').hide()
  })

  $('document').ready(() => {
    $('#signout').hide()
  })

  $('document').ready(() => {
    $('.smallgameboard').hide()
  })

  $('#newGame').on('click', gameEvents.onCreate)
  $('#games-index').on('click', gameEvents.onIndex)
  $('#games-show').on('submit', gameEvents.onShow)
  $('.box').on('click', gameEvents.onPlay)
  // $('#newGame').on('click', gameEvents.onReset)
})
