let account_asif = 7000;
let account_champ = 1000;

function deposit(accountname, amount) {
    if (accountname !== "account_asif" && accountname !== "account_champ") {
        console.log("You do not have a bank account.");
        return;
    }
    
    if (accountname === "account_asif") {
        account_asif += amount;
    } else if (accountname === "account_champ") {
        account_champ += amount;
    }
    console.log("Deposit successful!");
}

function withdraw(accountname, amount) {
    if (accountname !== "account_asif" && accountname !== "account_champ") {
        console.log("You do not have a bank account.");
        return;
    }

    if (accountname === "account_asif") {
        if (account_asif < amount) {
            console.log("You do not have enough money to withdraw.");
            return;
        }
        account_asif -= amount;
    } else if (accountname === "account_champ") {
        if (account_champ < amount) {
            console.log("You do not have enough money to withdraw.");
            return;
        }
        account_champ -= amount;
    }
    console.log("Withdrawal successful!");
}

deposit("account_asif", 3000);
console.log("Account Asif Balance:", account_asif);

withdraw("account_champ", 500);
console.log("Account Champ Balance:", account_champ);
