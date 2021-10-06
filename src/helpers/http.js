const {response} = require('express')

module.exports.ok = (data) => {
    return response.status(200).json(data)
}