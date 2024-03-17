console.log('Ciao!')


//CONSEGNA ESERCIZIO

// Per iniziare scrivi un programma che stampi in console i numeri da 1 a 100,
// Successivamente aggiungi un controllo sul numero in modo tale che:
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz” al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// in tutti gli altri casi venga stampato il numero stesso

//inizializzare il ciclo for 

const n = 100

for (let i = 0; i < n; i++)  {
    
    //definire una variabile per stampare i numeri da 1 a 100 e non da 0 a 99 
    const num = i + 1
    // console.log(num)
      
    //costanti per il calcolo del resto della divisione con 3 e 5
    const resto3 = num % 3
    const resto5 = num % 5

    //stampare in console i multipli di 3 e 5
    //SE i numeri sono multipli di 3 e di 5 = fizzbuzz
     if(resto3 === 0 && resto5 ===0){ 
       console.log(num,'FizzBuzz')
    
       //ALTRIMENTI se sono solo multipli di 5 Buzz
    } else if(resto5 === 0){
        console.log(num,'Buzz')
    
       //ALTRIMENTI se sono solo multipli di 3 fizz   
    } else if (resto3 === 0){
        console.log(num,'Fizz')
    } else {
        console.log(num)
    }

}

 
