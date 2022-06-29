
//----------- TAREFA 1 -----------

 function add(n1, n2){

   let soma = n1 + n2

   return soma

}

console.log(add(2,8))

//----------- TAREFA 2 -----------

function multiply(n1, n2){

   let resultado = 0

   for(let i = 0; i < n2; i++){
      
       resultado = add(n1, resultado )

   }

   return resultado
}

console.log(multiply(2,8))

//----------- TAREFA 3 -----------

function power(n1,n2){

   
   let multnumbers = 1

   for( let i = 0; i < n2; i++){
      multnumbers= multiply( multnumbers,n1)
   }

   return multnumbers

}

console.log(power(2,8))

//----------- TAREFA 4 -----------

function factorial(n1){

   let resultado = 1

   for(let i = 1; i <= n1; i++){
      
      resultado = multiply(resultado,i)

   }

   return resultado
   
}

console.log(factorial(10))

//----------- EXTRA -----------

function fibonacci(posicao){

   let anterior = 0
   let proximo = 1
   let soma = 0
  
   for(let i = 0; i < posicao; i++){

      soma = add(anterior,proximo)
      anterior = proximo
      proximo = soma

   }

   return anterior

}

console.log(fibonacci(7))

   




