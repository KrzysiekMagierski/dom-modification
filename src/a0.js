console.log('I am a0.js');

// A0.1 - sklonuj div A 10 razy i ustaw go za C

cloneDiv = () => {
    const DivA = document.querySelectorAll('div')[0]
    const DivC = document.querySelectorAll('div')[2]
    const body = document.querySelector('body')

    for( let i = 0; i < 10; i++) {
      const newDiv = DivA.cloneNode(true)
      body.appendChild(newDiv)
    }
}

// A0.2 - zastąp div B i C na div A

replaceDiv = () => {
    const DivA = document.querySelectorAll('div')[0]
    const DivB = document.querySelectorAll('div')[1]
    const DivC = document.querySelectorAll('div')[2]
    const body = document.querySelector('body')

    body.removeChild(DivB)
    body.removeChild(DivC)

    for( let i = 0; i < 2; i++) {
        const DivACopy = DivA.cloneNode(true)
        body.appendChild(DivACopy)
        }  
  
}

// A0.3 - usuń akapity ze wszystkich div

RemoveP = () => {


   for (let i = 0; i < 3; i++ ) {
    
    const Div1 = document.querySelectorAll('div')[i] 
    const Div1P = document.querySelectorAll('div p')[0]

    Div1.removeChild(Div1P)
   }
}


// A0.4 - przestaw miejscami tak zeby było C, B, A

changePlace = () => {
    const DivA = document.querySelectorAll('div')[0];
   
    const DivC = document.querySelectorAll('div')[2];
    const body = document.querySelector('body');
    body.replaceChild(DivC, DivA);
    body.appendChild(DivA);
}
// A0.5 - wstaw diva D na koniec

a05 = () => {
    const divA = document.querySelector('div');
    const divD = divA.cloneNode(true);
    divD.firstElementChild.innerText = 'D';
    divD.lastElementChild.innerText = 'I am div D';
    const body = document.querySelector('body');
    body.appendChild(divD);
  }

// A0.6 - wstaw diva Z przed A

a06 =() => {
    const divA = document.querySelector('div');
    const divZ = divA.cloneNode(true);
    divZ.firstElementChild.innerText = 'Z';
    divZ.lastElementChild.innerText = 'I am div Z';
    const body = document.querySelector('body');
    body.insertBefore(divZ,divA);


}
// A0.7 - wstaw diva z napisem Brake pomiędzy A i B oraz B i C

insertBrake = () => {
    const brakeDiv = document.createElement('div');
    brakeDiv.innerHTML = '<b>Brake</b>';
    const body = document.querySelector('body');
    const divB = body.querySelectorAll('div')[1];
    const divC = divB.nextElementSibling;
    
  
    body.insertBefore(brakeDiv, divB);
    body.insertBefore(brakeDiv.cloneNode(true), divC);
   
  }
// A0.8 - wstaw do srodka diva B liste <ul></ul>
// A0.9 - wstaw do diva C sklonowane divy A, B, C