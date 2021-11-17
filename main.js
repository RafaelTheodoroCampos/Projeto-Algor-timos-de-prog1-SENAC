function Calcular(){

var gasolina = document.getElementById("Gasolina").value;
var álcool = document.getElementById("Álcool").value;

var div = parseFloat(gasolina)/parseFloat(álcool);

if(div>0.7){
  alert("Cliente, é mais economico comprar gasolina")
}

if(div<0.7){
  alert("Cliente, é mais economico comprar álcool")
}

if(div==0.7){
  alert("Cliente, ambos são igualmente economicos")
}

}




