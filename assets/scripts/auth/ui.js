'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onSignUpFailure = responseData => {
  $('#message').text('Sign up failed :(')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignInSuccess = responseData => {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  store.user = responseData.user
}

const onSignInFailure = responseData => {
  $('#message').text('Sign in failed :(')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignOutSuccess = () => {
  console.log('successfully signed Out')
  $('#message').text('Signed out successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onSignOutFailure = () => {
  console.log('failure')
  $('#message').text('Sign out failed :(')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
