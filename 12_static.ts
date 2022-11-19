class Check{
    static bankname: string="bank of india";
    customerName:string;
    accNo:number;
    display(){
        Check.bankname="bob"
        console.log(Check.bankname);
        
    }
}
var objcCheck = new Check()
var banknam=Check.bankname
//console.log(banknam);
