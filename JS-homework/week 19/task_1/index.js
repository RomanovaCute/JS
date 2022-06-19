class Worker {
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary(){
        console.log(this.rate * this.days);
    }
}

let worker = new Worker ('Антонина', 'Антонова', 20, 30);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days); 
console.log(worker.getSalary());