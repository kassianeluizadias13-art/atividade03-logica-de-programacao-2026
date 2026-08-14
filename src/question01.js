    import leia from "readline-sync"

    var vendedores = leia.question("Quantos vendedores serao solicitados: ")


    for (var contador = 1; contador <= vendedores; contador++) {
        var venda = leia.questionInt("Valor de vendas " + contador + ": ")

    } if(venda > 5000){
        console.log("Vendedor com gasto de + de 5k: " + vendedores

        )
    } ;
    
    if(venda <= 5000){
        console.log("Vendedor com gasto de 5k ou menos: " + vendedores
            
        )
    
    };

    var total = venda * vendedores
    console.log("Valor total: " + total)