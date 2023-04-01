class GenerateHuman {
  constructor(name, surname, age, phoneNumber, country, id) {
    (this.name = name),
      (this.surname = surname),
      (this.email = `${name}${surname}@test.pl`);
    (this.age = age),
      (this.phoneNumber = phoneNumber),
      (this.country = country),
      (this.id = id);
  }
  addNumberToHistory = (newPhoneNumber) => {
    const dataHistory = [];
    dataHistory.push({ old_phone_number: newPhoneNumber });
    console.log(dataHistory)
    return dataHistory
  };
  changePhoneNumber = (newPhoneNumber) => {
    const oldNumber = this.phoneNumber;
    this.phoneNumber = newPhoneNumber;
    return this.addNumberToHistory(oldNumber);
  };
}


const peter = new GenerateHuman(
  'Piotr',
  'Ochodek',
  35,
  '500532607',
  'Poland',
  '#1'
);
console.log(peter);
peter.changePhoneNumber('111222333')
peter.changePhoneNumber('555666777')
console.log(peter)
