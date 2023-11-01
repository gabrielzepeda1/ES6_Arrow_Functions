class Person { 
    constructor(name) { 
        this.name = name
    }


    printNameArrow() { 
        setTimeout(() => { 
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction() { 
        setTimeout(function() { 
            console.log('Function ' + this.name)
        }, 100)
    }
}

let person = new Person('Bob') 
person.printNameArrow() 
person.printNameFunction() 
console.log(this.name)

//The function() redefines the scope of the this keyword depending where the function is being called from 