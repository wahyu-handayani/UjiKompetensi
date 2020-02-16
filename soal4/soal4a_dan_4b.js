const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
 
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'soal4'
});

conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
app.use(bodyParser.json());

app.get('/4a',(req, res) => {
  let sql = "select unit.nama_unit, obat.nama as nama_obat, persediaan.stock, obat.satuan as satuan_obat, persediaan.tanggal_kadaluarsa from unit,persediaan,obat where obat.id_obat=persediaan.id_obat and unit.id_unit=persediaan.id_unit order by unit.nama_unit";
  conn.query(sql, (err, results) => {
    if(err) throw err;
    res.json({
      results: results
    });
  });
});
app.get('/4b',(req, res) => {
    let sql = "select obat.nama as nama_obat, unit.nama_unit, persediaan.stock, persediaan.tanggal_kadaluarsa from obat,unit,persediaan where obat.id_obat=persediaan.id_obat and unit.id_unit=persediaan.id_unit and persediaan.tanggal_kadaluarsa='2020-02-21' order by persediaan.stock desc";
    conn.query(sql, (err, results) => {
      if(err) throw err;
      res.json({
        results: results
      });
    });
  });
 
app.listen(7000, () => {
  console.log('Server is running...');
});

// untuk soal no. 4b, tanggal kadaluarsa obat-obat yang akan kadaluarsa 7 hari kedepan ditampilakan pada tanggal 2020-02-21