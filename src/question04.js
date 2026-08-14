import leia from "readline-sync"

var pedido = leia.keyInSelect([" Hambúrguer - R$ 20,00`", " Cachorro-quente - R$ 15,00`", 
    "Refrigerante - R$ 7,00", "Batata frita - R$ 12,00`"])

while(pedido !== 4){
    var pedido = leia.keyInSelect([" Hambúrguer - R$ 20,00`", " Cachorro-quente - R$ 15,00`", 
        "Refrigerante - R$ 7,00", "Batata frita - R$ 12,00`"])
    

      console.log("Item adicionado ao carrinho.")
      
} 

var aborgue = 20
      var hotdog = 15
      var refri = 7
      var batata = 12

 if(pedido === 0) {
console.log("Valor: " + aborgue + "R$")

} if(pedido === 1) {
    console.log("Valor: " + hotdog + "R$")
    
    } if(pedido === 2) {
        console.log("Valor: " + refri + "R$" )
        
        } if(pedido === 3) {
            console.log("Valor: " + batata + "R$")
            
            }
                
             
        
    
