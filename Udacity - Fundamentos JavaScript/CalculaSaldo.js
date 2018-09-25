DICA: Para imprimir o saldo da conta com pontos decimais (i.e. 325.00), 
use o método .toFixed() e passe o número de pontos decimais que você quer usar. 
Por exemplo, balance.toFixed(2) retorna 325.00.

DICA: Certifique-se de testar seu código com diferentes valores. Por exemplo,
Se checkBalance é igual a true e isActive é igual a false, então Your account is no longer active. deve ser impresso no console.

DICA: Copie e cole os seguintes textos para evitar que ocorra erro de digitação:

Thank you. Have a nice day!
Your balance is $ .
Your account is no longer active.
Your account is empty.
Your balance is negative. Please contact bank.


/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here
if(checkBalance === false)
    {
        console.log("Thank you. Have a nice day!");
    }
 
else if (checkBalance === true && isActive === true){
        console.log("Your balance is $ " + balance.tofixed(2));
}

else if (checkBalance === true && isActive === false)
    {
        console.log("Your account is no longer active.");
    }

else if(checkBalance === true && balance === 0)
    {
        console.log("Your account is empty.");      
    }

else 
    {
       console.log("Your balance is negative. Please contact bank."); 
    }
    

