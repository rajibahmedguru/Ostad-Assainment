class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
    console.log(`Account Number: ${accountNumber}`);
    console.log(`Owner Name: ${ownerName}`);
    console.log(`Balance: $${balance}`);
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: $${amount}`);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: $${amount}`);
    } else {
      console.log(`Want to withdrawn: $${amount}`);
      console.log("Insufficient balance");
    }
  }
  getBalance() {
    console.log(`Account Balance: $${this.balance}`);
  }

  displayAccountInfo() {
    console.log(`Account Balance: $${this.balance}`);
  }
}
// Create an instance of the BankAccount class
const Rajib = new BankAccount("SB-123", "Rajib Ahmed", 1500);
const Rafiq = new BankAccount("SB-456", "Rafiq Islam", 2000);
