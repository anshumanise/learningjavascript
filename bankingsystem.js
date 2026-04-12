function main() {
    //create your class here with the name Account with all the private properties and getter and setter
    class Account{
        #accountNumber;
        #balance;
        constructor(accountNumber, balance) {
            this.#accountNumber = accountNumber;
            this.#balance = 0;
        }
        get getbalance() {
            return this.#balance;
        }
        set setbalance(updatedbalance) {
            if (updatedbalance >= 0) {
                this.#balance = updatedbalance;
            }
            else return "Please enter a positive value for the balance";
        }
        deposit(number) {
            this.#balance += number;
            
        }
        withdraw(number) {
            if (number > this.#balance) {
                
                return "Insufficient Balance";
            }
            this.#balance -= number;
            
                      
        }
    }
  
    const myAccount = new Account("1234567890");
    myAccount.deposit(500);
    myAccount.withdraw(200);
    console.log(myAccount.getbalance); // output: 300
    //Do not modify the return statement
    return Account;
  }
  main();