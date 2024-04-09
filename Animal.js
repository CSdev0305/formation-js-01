class Animal{
    constructor(name, age){
        this.name=name;
        this.age = age;
    }
    informationAnimal(){
        console.log(`Nom: ${this.name}\nAge: ${this.age}`);
    }
}

export default Animal;
