'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#noSignIn').text('Signed up successfully. Now, sign in above!')
  store.user = responseData.user
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  // $('#signin-button').hide()
  // $('#newGame').show()
  // $('#games-index').show()
  // $('#games-show').show()
  // $('#game-show-id').show()
  // $('#signout').show()
  // $('#buttonChange').show()
  // $('#modalLRForm').modal('hide')
  // $('.gameboard').hide()
}

const onSignUpFailure = responseData => {
  $('#noSignIn').text('Sign up failed :(')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  $('#message').text('Signed in successfully! Click new game to begin!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  store.user = responseData.user
  $('#everythingGame').show()
  $('#signin-button').hide()
  $('#newGame').show()
  $('#games-index').show()
  $('#games-show').show()
  $('#game-show-id').show()
  $('#signout').show()
  $('#buttonChange').show()
  $('#modalLRForm').modal('hide')
  $('.gameboard').hide()
  $('#noSignIn').text('')
  $('.jumbotron').hide()
}

const onSignInFailure = responseData => {
  $('#noSignIn').text('Wrong Username/Password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  // console.log('successfully signed Out')
  $('.footer').text('Signed Out Successfully! Thanks for playing!')
  $('.box').html('')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('#everythingGame').hide()
  $('#initialOnset').show()
  $('#signin-submit').on('submit', () => {
    $('#modalLRForm').modal('show')
  })
  $('.jumbotron').show()
  $('#signin-button').show()
  $('.smallgameboard').hide()
  setTimeout(() => $('.footer').text(''), 5000)
}

const onSignOutFailure = () => {
  // console.log('failure')
  $('#message').text('Sign out failed :(')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Password changed successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('#changePwModal').modal('hide')
}

const onChangePasswordFailure = () => {
  $('#noChangePw').text('Update password failed :(')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
