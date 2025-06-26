const mongoose = require('mongoose')

const RecordSchema = new mongoose.Schema({
  patientAddress: String,
  ipfsHash: String,
  doctorAddress: String,
  timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Record', RecordSchema)
