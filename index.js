var Bankaccount = /** @class */ (function () {
    function Bankaccount(accountBalance) {
        this.accountBalance = accountBalance;
    }
    Bankaccount.prototype.credit = function (amount) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log("Credit succssfully get into new account and your balance is :" + this.accountBalance);
        }
        else {
            console.log("Credit unsuccssful");
        }
    };
    Bankaccount.prototype.debet = function (amount) {
        if (amount > 0 && amount < this.accountBalance) {
            this.accountBalance -= amount;
            console.log("Debit succssufullyshare in new account balance :" + this.accountBalance);
        }
        else {
            console.log("Debit unsuccssful");
        }
    };
    return Bankaccount;
}());
var Costumer = /** @class */ (function () {
    function Costumer(person, age, gender, mobile_number, bankaccount) {
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.moblie_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    Costumer.prototype.display = function () {
        console.log("Name:" + this.person.firstname + "" + this.person.lastname);
        console.log("Age:" + this.age);
        console.log("Gender:" + this.gender);
        console.log("Mobile number:" + this.moblie_number);
        console.log("Amount in Bank:" + this.bankaccount.accountBalance);
        console.log();
    };
    return Costumer;
}());
var a1 = new Bankaccount(8000);
var c1 = new Costumer({ firstname: "Urooj", lastname: "Fatima" }, 20, "female", 3342315671, a1);
c1.display();
c1.bankaccount.debet(500);
console.log();
var a2 = new Bankaccount(3000);
var c2 = new Costumer({ firstname: "Mona", lastname: "Fatima" }, 28, "female", 3342378671, a2);
c2.display();
c2.bankaccount.debet(200);
console.log();
