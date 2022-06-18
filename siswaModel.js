const mongoose = require('mongoose')

const denahKontak = mongoose.Schema({
    nama: {
        type: String,
        required: true,
      },
      tanggallahir: {
        type: String,
        required: true,
      },
      jeniskelamin: String,
      hobi: String,
      create_date: {
        type: Date,
        default: Date.now,
      },
})

const dataSiswa = (module.exports = mongoose.model('dataDiri', denahKontak))
module.exports.get = function(callback, limit) {
    dataSiswa.find(callback).limit(limit)
}