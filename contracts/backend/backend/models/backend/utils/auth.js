const jwt = require('jsonwebtoken')

const generateToken = (address) => {
  return jwt.sign({ address }, process.env.JWT_SECRET, { expiresIn: '1d' })
}

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}
