const request = require('request')

const url

request({url: url}, (error, response) => {
  const data = JSON.parse(response.body)
     console.log(response)
})