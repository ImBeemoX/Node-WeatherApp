const request = require('request')

const url

request({url: url}, (error, response) => {
  const dataList = JSON.parse(response.body)
     console.log(response)
     console.log(error)
})