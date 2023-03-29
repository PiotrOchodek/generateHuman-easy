function generateHuman (name, surname, age, phoneNumber, country, id) { 
    this.name = name,
    this.surname = surname,
    this.email = `${name}${surname}@test.pl`
    this.age = age,
    this.phoneNumber = phoneNumber,
    this.country = country,
    this.id = id
}

const peter = new generateHuman('Piotr', 'Ochodek', 35, '500532607', 'Poland', '#1')

console.log(peter)

class GenerateHuman {
    constructor(name, surname, age, phoneNumber, country, id) {
    this.name = name,
    this.surname = surname,
    this.email = `${name}${surname}@test.pl`
    this.age = age,
    this.phoneNumber = phoneNumber,
    this.country = country,
    this.id = id
    }
}

const monica = new GenerateHuman('Monica', 'Jones', 32, '123123123', 'Poland', '#2')

console.log(monica)