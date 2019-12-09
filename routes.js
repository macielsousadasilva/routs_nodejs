const express = require("express")
const app = express();

//Rota raiz
app.get("/", function(req, res){
    res.send("Você está na rota raiz")
})

//Rota com arquivo html
app.get("/html", function(req, res){
    res.sendfile(__dirname+"/index.html")
})

//Rota com parametro
app.get("/parametros/:p1/:p2", function(req, res){
    var p = req.params;
    //A função send so pode ser enviado uma unica vez!
    res.send("Este e o param1: " + p.p1 + "<br>Este e o param2: " + p.p2)
})

//Essa função deve sempre ficar no fim do seu codigo
app.listen(8050, function(){
    console.log("Servidor rodando")
})