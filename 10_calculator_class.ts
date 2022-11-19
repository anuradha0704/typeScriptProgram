class Calculator{
add(x:number, y: number) : number {
   return x + y;
}

sub(x: number, y: number) : number {
   return x - y ;
}

mul(x: number, y: number) : number {
    return x *y ;
 }

 div(x: number, y: number) : number {
    return x /y ;
 }


}

var objeCalculator =new Calculator()

var addition= objeCalculator.add(2, 3)
console.log(`Addition Of Given number:- ${addition}`);

var substraction= objeCalculator.sub(25, 3)
console.log(`Substraction Of Given number:- ${substraction}`);

var multiplication= objeCalculator.mul(25, 3)
console.log(`multiplication Of Given number:- ${multiplication}`);

var division= objeCalculator.div(25, 3)
console.log(`division Of Given number:- ${division}`);