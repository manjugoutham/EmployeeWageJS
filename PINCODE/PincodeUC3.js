function validateendalphabets(pin) 
{
let expresion = RegExp('^[1-9][0-9]{4}[0-9]$');
let result = expresion.test(pin);
console.log(result); 
}
  console.log(validateendalphabets("400088"));
  console.log(validateendalphabets("400088B"));