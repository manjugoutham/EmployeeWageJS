function validateemail(valid,invalid)
{
let pattern = RegExp("[a-zA-Z0-9]{3,}[@]{1}[g][m][a][i][l]");

    let validemail = pattern.test(valid);
    let invalidemail = pattern.test(invalid);
    console.log(validemail);      
    console.log(invalidemail);  
}
validateemail("bridgelabz@gmail.com","xyzabc");