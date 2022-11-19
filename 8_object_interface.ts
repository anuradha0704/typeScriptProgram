interface IProduct {
    id:number;
    name:string;
    description:string;
    price:number ; // declartion only in interface.
    display():void;
  
}

var objProduct : IProduct = {
    id : 123,
    name: "IPhone",
    description: "It's awesome",
    price: 60000 // I have given implementation for IProduct interface
    display():void{
        console.log(this.id + ""+ this.name);
        
    }
}


//
interface IExterior {
    color: string;
    numOfDoors: number
} 

interface IInterior {
    seats: number;
    auto: boolean;
}

interface ICar extends IExterior, IInterior {
    make: string;
    model: string;
    year: number;
}

var myCar: ICar = {
    make: "TATA",
    model: "ALtroz",
    year: 2022,
    color: "Gray",
    numOfDoors: 4,
    seats: 4,
    auto: false
}