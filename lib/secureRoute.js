const jwt = require('jsonwebtoken') // * to decode the token
const User = require('../models/user') // * and the user model, to look up the user trying to use the token
const { secret } from '../config/environment'

async function secureRoute(req, res, next) {
  try {
    console.log('req.headers', req.headers)
    if (!req.headers.authorization) throw new Error() // * if they didnt proved the correct headers, theyre out

    const token = req.headers.authorization.replace('Bearer ', '') // * if they did, get the value of that authorization header
    console.log('token', token)
    const payload = await jwt.verify(token, secret) // * attempt to decode that token
    console.log('payload', payload)
    const user = await User.findById(payload.sub) // * find the user from the payload, decoded from the token
    console.log('user', user)
    if (!user) throw new Error() // * if user is null, theyre out
    
    req.currentUser = user
    
    next() // * if all is good, they can move on with the rest of their request
  } catch (err) {
    res.status(401).json({ message: err.message }) //* any token verify error, or any thrown error, will cause the response 401 unauthorized, and the request will not be let into the controller
  }
}

module.exports = secureRoute
