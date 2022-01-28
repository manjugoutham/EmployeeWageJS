
function emailcom(valid,invalid)
{
let pattern = RegExp("([a-zA-Z0-9]{3,}|[a-zA-Z0-9]{3,}[+_.-]?[a-zA-Z0-9]{1,})[@]{1}[b][r][i][d][g][e][l][a][b][z][.][c][o][m]");

    let validemail = pattern.test(valid);
    let invalidemail = pattern.test(invalid);
    console.log(validemail);      
    console.log(invalidemail);  
}
emailcom("bridgelabz+abc@gmail.com","bridgelabz+abc@bridgelabz.com");