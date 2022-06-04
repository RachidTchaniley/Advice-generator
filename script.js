const dice = document.querySelector('#dice-div');

function ht(){
    document.body.classList.add('active');
}

dice.addEventListener('click', function(){
    ht();
    dice.addEventListener('click', function(){
        async function getAdvice() {
            const advice = await fetch('https://api.adviceslip.com/advice').then(
              (res) => res.json()
            );
            return advice;
          }
          
            getAdvice().then((advice) => {
              const advice_id = advice.slip.id;
              const advice_text = advice.slip.advice;
              const advice_element = document.querySelector('#show-message');
              const advice_id_element = document.querySelector('span');
              advice_element.innerHTML = advice_text;
              advice_id_element.innerHTML = advice_id;
            
          });
    })
})