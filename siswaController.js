dataSiswa = require("./siswaModel");
exports.index = function (req, res) {
  dataSiswa.get(function (err, info) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "Sukses",
      message: "Data Siswa Berhasil Diambil",
      data: info,
    });
  });
};

exports.new = function(req, res){
    let dataDiri = new dataSiswa()
    dataDiri.nama = req.body.nama ? req.body.nama : dataDiri.nama;
    dataDiri.tanggallahir = req.body.tanggallahir;
    dataDiri.jeniskelamin = req.body.jeniskelamin;
    dataDiri.hobi = req.body.hobi;
    dataDiri.save(function(err){
        if(err){
            res.json({
                status: 'data tidak sah',
                message: err
            })
        }
        res.json({
            message: "Kontak Baru Berhasil Dibuat",
            data: dataDiri
        })
    })

}