'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
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
