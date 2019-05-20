'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('#signin-button').hide()
  $('#newGame').show()
  $('#games-index').show()
  $('#games-show').show()
  $('#game-show-id').show()
  $('#signout').show()
  $('#buttonChange').show()
  $('#signup-submit').on('submit', () => {
    $('#panel7').modal('hide')
  })
}

const onSignUpFailure = responseData => {
  $('#message').text('Sign up failed :(')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  store.user = responseData.user
  $('#signin-button').hide()
  $('#newGame').show()
  $('#games-index').show()
  $('#games-show').show()
  $('#game-show-id').show()
  $('#signout').show()
  $('#buttonChange').show()
  $('#signin-submit').on('submit', () => {
    $('#modalLRForm').modal('hide')
  })
}

const onSignInFailure = responseData => {
  $('#message').text('Sign in failed :(')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  console.log('successfully signed Out')
  $('#message').text('Signed out successfully!')
  $('.box').html('')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('#everythingGame').hide()
  $('#initialOnset').show()
  $('#signin-submit').on('submit', () => {
    $('#modalLRForm').modal('show')
  })
  $('#signin-button').show()
}

const onSignOutFailure = () => {
  console.log('failure')
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
}

const onChangePasswordFailure = () => {
  $('#message').text('Update password failed :(')
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
