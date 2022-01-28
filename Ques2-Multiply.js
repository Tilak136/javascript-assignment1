const multiply = (x,y)=>{
if(x==1){ return y;}
else if(x>1){
return y +multiply(x-1,y)
}
else throw "Not Numbers"
}
var result = multiply(4,3);
console.log(result)
 