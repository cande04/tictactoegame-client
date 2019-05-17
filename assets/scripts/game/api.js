'use strict'

const config = require('../config')
const store = require('../store')

const create = () => {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: '{}',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + formData.game.id,
    method: 'GET',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = (gameData) => {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    data: gameData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  index,
  show,
  update
}
