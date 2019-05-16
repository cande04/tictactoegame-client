'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
// const gameEvents = require('./examples/events')

$(() => {
  $('#signup').on('submit', authEvents.onSignUp)
  $('#signin').on('submit', authEvents.onSignIn)
  $('#signout').on('submit', authEvents.onSignOut)
  $('#changepw').on('submit', authEvents.onChangePassword)
  // $('#data-index0').on('click', () => console.log('you clicked the box1!'))
  // $('#data-index1').on('click', () => console.log('you clicked the box2!'))
  // $('#data-index2').on('click', () => console.log('you clicked the box3!'))
  // $('#data-index3').on('click', () => console.log('you clicked the box4!'))
  // $('#data-index4').on('click', () => console.log('you clicked the box5!'))
  // $('#data-index5').on('click', () => console.log('you clicked the box6!'))
  // $('#data-index6').on('click', () => console.log('you clicked the box7!'))
  // $('#data-index7').on('click', () => console.log('you clicked the box8!'))
  // $('#data-index8').on('click', () => console.log('you clicked the box9!'))
})
