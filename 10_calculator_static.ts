class Calculators{
    static calculateFun(num1:number, num2:number){
    var addition=num1+num2;
    console.log(`Addition of given Number ${num1} + ${num2} is:-`,addition);

    var sub=num1-num2;
    console.log(`Substraction of given Number ${num1} - ${num2} is:-`,sub);
    
    var multiplication=num1*num2;
    console.log(`multiplication of given Number ${num1} * ${num2} is:-`,multiplication);
    
    var div=num1 / num2;
    console.log(`Division of given Number ${num1} / ${num2} is:-`,div);
    
    

    }
};
Calculators.calculateFun(20,10);