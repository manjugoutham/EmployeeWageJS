function emailaddress(valid,invalid)
{
    let pattern = RegExp("[a-zA-Z0-9]{3,}");

    let validemail = pattern.test(valid);
    let invalidemail = pattern.test(invalid);

    console.log(validemail);      
    console.log(invalidemail);  
}
emailaddress("abc","ab");