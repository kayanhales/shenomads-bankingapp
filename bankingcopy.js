/*
** Banking app - allow users to withdraw and deposit to/from a base balance of $100
** tested in repl.it
*/

function start(balance) {
  this.balance = balance;

  //prompt user for name
  var name = prompt("Hello, what is your name?", "Mary");
  //asks user if they want to withdraw, get balance or deposit
  var decision = decide(name);

  //if user chooses balance, display current balance
  if (decision == "B") {
    console.log("Your balance is $" + this.balance);
  } else if (decision == "W") {
    //if user chooses withdraw, call withdraw function
    this.balance = withdraw(this.balance);
  } else if (decision == "D") {
    //if user chooses deposit, call deposit function
    this.balance = deposit(this.balance);
  } else {
    //if user chooses any other option, prompt them to try again
    var restart = prompt(
      "You didn't make an appropriate decision, start from the beginning? Enter 'Y' for yes, 'N' for no"
    );
    if (restart == "Y") {
      start(this.balance);
    } else {
      console.log("Goodbye, thanks for banking with KayBank!");
    }
  }
}

/*asks users if they want to withdraw (W), get balance(B) or deposit(D)
**returns their decision*/
function decide(name) {
  this.name = name;
  var decision = prompt(
    "Hey " +
      this.name +
      ", would you like to see your balance (type B), make a withdrawal (type W) or make a deposit (type D)?"
  );
  return decision;
}

/*asks user how much they want to withdraw and subtracts it from the current balance
**returns the newBalance*/
function withdraw(balance) {
  this.balance = balance;
  var amount = parseInt(prompt("How much would you like to withdraw?", 50), 0);

  //check if balance is greater than withdrawal amt
  if (this.balance < amount) {
    var tryAgain = prompt(
      "Sorry, your balance of $" +
        this.balance +
        " is too low to withdraw that amount. Would you like to try again? Enter 'Y' for yes, and 'N' for no"
    );

    if (tryAgain == "Y") {
      withdraw(this.balance);
    }
    //check if amount is positive
  } else if (isPositive(amount)) {
    var newBalance = this.balance - amount;
    console.log(
      "Your new balance is $" +
        newBalance +
        ". Goodbye, thanks for banking with KayBank!"
    );
    return newBalance;
  } else {
    //prompt user to try again, if negative
    var tryAgain = prompt(
      "You amount was either a negative value. Would you like to try again? Enter 'Y' for yes, and 'N' for no"
    );

    if (tryAgain == "Y") {
      withdraw(this.balance);
    }
  }
}

/*asks user how much they want to withdraw and adds it to the current balance
**returns the newBalance*/
function deposit(balance) {
  this.balance = balance;
  var amount = parseInt(prompt("How much would you like to deposit?", 50), 0);
  //check if amount is positive
  if (isPositive(amount)) {
    var newBalance = this.balance + amount;
    console.log(
      "Your new balance is $" +
        newBalance +
        ". Goodbye, thanks for banking with KayBank!"
    );
    return newBalance;
  } else {
    //if negative, prompts user to tryagain
    var tryAgain = prompt(
      "You amount was either a negative value. Would you like to try again? Enter 'Y' for yes, and 'N' for no"
    );
    if (tryAgain == "Y") {
      deposit(this.balance);
    }
  }
}

/*checks if number is positive
**return true if it is, false otherwise*/
function isPositive(amount) {
  this.amount = amount;

  if (this.amount < 0) {
    console.log("You didn't enter a positive value!");
    return false;
  } else {
    return true;
  }
}

//initiaties an account with $100 in it
start(100);
