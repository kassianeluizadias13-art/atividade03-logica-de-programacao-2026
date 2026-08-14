import leia from "readline-sync"

do{

    var Valorlitros = litros * gasolina
var gasolina = 6.20
var etanol = 4.30
var diesel = 5.90
    var combustivel = leia.keyInSelect(["Gasolina - R$ 6,20", "Etanol - R$ 4,30", "Diesel - R$ 5,90"])
    var litros = leia.questionFloat("Quantos litros deseja colocar? ")
        if(combustivel !== 3 ){
            console.log("Combustivel adicionado")
         
        }
     

} while(combustivel)
    console.log(Valorlitros)