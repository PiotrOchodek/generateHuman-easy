class User {
  constructor(name, surname, age, phoneNumber, country) {
    this.name = name,
    this.surname = surname,
    this.email = `${name}${surname}@test.pl`;
    this.age = age,
    this.phoneNumber = phoneNumber,
    this.country = country,
    this.currentHistoryRecordID = 1;
    this.historyList = [];
  }
  incrementCounter() {
    this.currentHistoryRecordID = this.currentHistoryRecordID + 1;
  }
  createRecordData() {
    return {
      ID: this.currentHistoryRecordID,
      name: 'Previous phone number',
      number: this.phoneNumber,
      revision_date: new Date().toLocaleString(),
    };
  }
  addRecordToHistory() {
    const recordData = this.createRecordData();
    this.historyList.push(recordData);
    this.incrementCounter();
  }
  setPhoneNumber(newPhoneNumber) {
    this.addRecordToHistory();
    this.phoneNumber = newPhoneNumber;
  }
}

const peter = new User('Piotr', 'Ochodek', 35, '500532607', 'Poland');
console.log(peter);
peter.setPhoneNumber('111222333');
peter.setPhoneNumber('555666777');
console.log(peter.historyList);
