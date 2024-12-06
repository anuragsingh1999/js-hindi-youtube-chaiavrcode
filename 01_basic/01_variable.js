const accountID = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountID = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

/*
prefer not to used var
because of issue in block scope and functional scope
*/

console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
