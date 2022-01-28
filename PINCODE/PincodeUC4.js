
function validateendalphabets(pin) 
{
let pattern = RegExp("^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$");
let result = pattern.test(pin);
console.log(result); 
}
  console.log(validateendalphabets("400 088"));
  console.log(validateendalphabets("400088"));