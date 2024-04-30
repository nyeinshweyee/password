// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // prompts for password to generate
var uppercase = confirm("Your password should have an uppercase letter! Click OK to continue");
var lowercase = confirm("Your password should have a lowercase letter! Click OK to continue");
var specialSymbols = confirm("Your password should have a symbol! Click OK to continue");
var numbers = confirm("Your password should have a number! Click OK to continue");
var keyLength = prompt("Password must be between 8 and 128 characters! Click OK to continue");

 // Password variables for allowable passwords characters
 var uppercas = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
 var lowercase ="abcdefghijklmnopqrstuvwxyz";
 var specialSymbols ="!@$#%&*_"
 var numbers ="0123456789";


 // Making sure user follows rules
 var uppercase = confirm("Your password should have an uppercase letter!");
 var lowercase = confirm("Your password should have a lowercase letter!");
 var specialSymbols = confirm("Your password should have a symbol!");
 var numbers = confirm("Your password should have a number!");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
