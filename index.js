var con = require('./connection');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/Cadastro.html");
});

app.post('/', function (req, res) {
    var nome = req.body.nome;
    var cpf = req.body.cpf;
    var data_nasc = req.body.data_nasc;
    var rg = req.body.rg;
    var expedicao = req.body.expedicao;
    var telefone = req.body.telefone;
    var email = req.body.email;
    var uc_geradora = req.body.uc_geradora;
    var cep = req.body.cep;
    var ucs_beneficiadas = req.body.ucs_beneficiadas;
    var disjuntor_medidor = req.body.disjuntor_medidor;
    var localizacao = req.body.localizacao;
    var latitude = req.body.latitude
    var longitude = req.body.longitude;
    var poste = req.body.poste;
    var kit = req.body.kit;

    con.connect(function (error) {
        if (error) throw error;

        var sql = "INSERT INTO informações(nome, cpf, data_nasc, rg, expedição, telefone, email, uc_geradora, cep, ucs_beneficiadas, disjuntor_medidor, localização, latitude, longitude, poste, kit) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        var values = [nome, cpf, data_nasc, rg, expedicao, telefone, email, uc_geradora, cep, ucs_beneficiadas, disjuntor_medidor, localizacao, latitude, longitude, poste, kit];

        con.query(sql, values, function (error, result) {
            if (error) throw error;
            res.send('sucesso ' + result.insertId);
        });
    });
});

app.listen(7000);

//acessar a tela de cadastro: http://127.0.0.1:7000/