
    function validatestartalaphabets(pin) 
    {
    let expresion = RegExp('^[1-9][0-9]{5}');
    let result = expresion.test(pin);
    console.log(result); 
    }
      console.log(validatestartalaphabets("400088"));
      console.log(validatestartalaphabets("A400088"));