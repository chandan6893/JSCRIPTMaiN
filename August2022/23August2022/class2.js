class Laptop{
    constructor(ram,rom,brand,size = 15.4){
        this.ram = ram;
        this.rom = rom;
        this.brand = brand;
        this.size = size;
       }
}

let macbookAir = new Laptop("4gb",128,"apple",13.3);
let acer123 = new Laptop("4gb",128,"acer");
let dell = new Laptop("4gb",128,"dell");
console.log(macbookAir);
console.log(acer123);
console.log(dell);
console.log(macbookAir,acer123,dell);