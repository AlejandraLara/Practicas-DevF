console.log("Funciona!");


//alert("Esto es un alert");
//prompt("Dame un número: ");
//var edad= prompt("Dime tu edad: ");


//console.log("La edad del usuario es:" + edad);
//if (edad >= 18) {
//alert("El usuario es mayor de edad")
//} else {
//	alert("El usuario no es mayor de edad");
	
//}

//x = prompt("dame un numero")
//	var r = x % 2;
		//if (r ===0) {
		//	alert("Fizz")

		//}else {
			//alert("Buzz")
		//}
//}
//fizzbuzzSimple(x);

//var numero = 0;

//function saludar(nombre){
	//var saludar = "hola " + nombre;
	//alert(saludar);
	//return saludar;
//}
 
//var miFuncion = function(param1, param2){

//}
//elem.click(function (){

//});

function fibonacci(n) {
	var res = 0;	


	if(n == 1){
		res = 0;
	} else if(n == 2){
		res = 1;
	} else{
		res= fibonacci(n-2) + fibonacci (n-1);
	}
	return res;
}
// forma sencilla -- pero es infinita y se va trabar mi navgeadorfibonacci(n-2) + fibonacci(n-1);

function factorial(n){
	var resultado = 0;
	if(n ==1 ){
		resultado = 1;
	}else{
		resultado= n *factorial(n-1);
	}
	return resultado;
}

function imprimirFibonacci(campo_texto){
	//console.log(campo_texto.value);
	var n = campo_texto.value;
	console.log(fibonacci(n));

}