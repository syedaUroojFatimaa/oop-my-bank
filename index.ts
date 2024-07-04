interface bankaccount{
    credit (amount:number) : void;
    debet (amount:number) : void;
}

class Bankaccount implements bankaccount{
    accountBalance : number;
    constructor(accountBalance : number){
        this.accountBalance = accountBalance
    }
    public credit(amount:number){
        if(amount >0){
            this.accountBalance +=amount
            console.log("Credit succssfully get into new account and your balance is :"+this.accountBalance);
        }
        else{
            console.log("Credit unsuccssful");
        }
    }
public debet(amount: number) {
            if(amount >0 && amount<this.accountBalance){
                this.accountBalance -=amount
                console.log("Debit succssufullyshare in new account balance :" +this.accountBalance);    
            }
            else{
                console.log("Debit unsuccssful");
                
            }
        }
    }

class Costumer {
     person : {
            firstname : string;
            lastname : string;
        }
        age : number;
        gender : string;
        moblie_number : number;
        bankaccount : Bankaccount;
        constructor(person : {firstname:string,lastname:string} ,age:number,gender:string,mobile_number:number,bankaccount:Bankaccount){
            this.person=person;
            this.age=age;
            this.gender=gender;
            this.moblie_number=mobile_number;
            this.bankaccount=bankaccount
    }

    public display(){
        console.log("Name:"+this.person.firstname+""+this.person.lastname);
        console.log("Age:"+this.age);
        console.log("Gender:"+this.gender);
        console.log("Mobile number:"+this.moblie_number);
        console.log("Amount in Bank:"+this.bankaccount.accountBalance);
        console.log();
    }
}
const a1 = new Bankaccount(8000)
const c1 = new Costumer ( {firstname:"Urooj",lastname:"Fatima"},20,"female",3342315671,a1);
c1.display()
c1.bankaccount.debet(500)
console.log();

const a2 = new Bankaccount(3000)
const c2 = new Costumer ( {firstname:"Mona",lastname:"Fatima"},28,"female",3342378671,a2);
c2.display()
c2.bankaccount.debet(200)
console.log();

