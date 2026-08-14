import leia from "readline-sync"

var tentativas = 3


while (senha !== "4321" && tentativas > 0) {
   var senha = leia.question("Digite a senha: ")

    if (senha !== "4321") {
        console.log("senha incorreta. Tente novamente")
        tentativas--
     }
    }
    if (tentativas > 0) {
    console.log("acesso permitido")
    } else {
    console.log("acesso bloqueado. Vc ultrapassou do limite de tentativas.")
    }