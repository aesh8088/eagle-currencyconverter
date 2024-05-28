let select = document.querySelectorAll('.currency');
 let input = document.getElementById('input');
let output = document.getElementById('output');
let button = document.getElementById('button');


const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {
    
    const entries = Object.entries(data);
    console.log(entries);
  

    for(i=0; i< entries.length; i++){
        
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        
    }

  });


  button.addEventListener('click', () =>{
    let inputValue = input.value;

    if(select[0].value != select[1].value){
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${inputValue}&from=${select[0].value}&to=${select[1].value}`)
          .then(val => val.json())
          .then((val) => {
           output.value = Object.values(val.rates)[0];
          });
    } else{
        alert("Error")
    }
  })



