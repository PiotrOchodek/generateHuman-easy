function generateHuman(name, surname, age, phoneNumber, country, id) {
  (this.name = name),
    (this.surname = surname),
    (this.email = `${name}${surname}@test.pl`);
  (this.age = age),
    (this.phoneNumber = phoneNumber),
    (this.country = country),
    (this.id = id);
}
const dataHistory = [];
const addNumberToHistory = (newPhoneNumber) => {
  dataHistory.push({ old_phone_number: newPhoneNumber });
};
generateHuman.prototype.changePhoneNumber = function (newPhoneNumber) {
  const oldNumber = this.phoneNumber;
  this.phoneNumber = newPhoneNumber;
  return addNumberToHistory(oldNumber);
};

const peter = new generateHuman(
  'Piotr',
  'Ochodek',
  35,
  '500532607',
  'Poland',
  '#1'
);
console.log(peter);

peter.changePhoneNumber(500400300);
peter.changePhoneNumber(100200300);
peter.changePhoneNumber(999999999);
console.log(peter);
console.log(dataHistory);

// Class
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
}

const monica = new GenerateHuman(
  'Monica',
  'Jones',
  32,
  '123123123',
  'Poland',
  '#2'
);

console.log(monica);
