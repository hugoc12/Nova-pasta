let TextView = document.getElementById('textView');
let InputText = document.getElementById('inputText');

InputText.value = 'R$ 0,00';
let arrayNumbers = new Array();

InputText.addEventListener('keydown', (e)=>{
    e.preventDefault();

    if(e.key == 'Backspace'){
        arrayNumbers.pop();
    }else if(RegExp(/[0-9]/g).test(e.key)){
        if(e.code == 'Numpad0' && arrayNumbers.length == 0){
            return
        }else{
            arrayNumbers.push(e.key);
        }
    }
    if(arrayNumbers.length <= 8){
            switch(arrayNumbers.length){
                case 0:
                    InputText.value = 'R$ 0,00';
                    break;
                case 1:
                    InputText.value = `R$ 0,0${arrayNumbers[0]}`;
                    break;
                case 2:
                    InputText.value = `R$ 0,${arrayNumbers.join('')}`;
                    break;
                case 3:
                    InputText.value = `R$ ${arrayNumbers[0]},${arrayNumbers.slice(1).join('')}`;
                    break;
                case 4:
                    InputText.value = `R$ ${arrayNumbers.slice(0, 2).join('')},${arrayNumbers.slice(2).join('')}`
                    break;
                case 5:
                    InputText.value = `R$ ${arrayNumbers.slice(0, 3).join('')},${arrayNumbers.slice(3).join('')}`
                    break;
                case 6:
                    InputText.value = `R$ ${arrayNumbers[0]}.${arrayNumbers.slice(1,4).join('')},${arrayNumbers.slice(4).join('')}`;
                    break;
                case 7:
                    InputText.value = `R$ ${arrayNumbers.slice(0, 2).join('')}.${arrayNumbers.slice(2,5).join('')},${arrayNumbers.slice(5).join('')}`;
                    break;
                case 8:
                    InputText.value = `R$ ${arrayNumbers.slice(0,3).join('')}.${arrayNumbers.slice(3,6).join('')},${arrayNumbers.slice(6).join('')}`;
                    break;
            }
    }else{
        arrayNumbers.pop();
    }

    let strValue = String(InputText.value).replace(/\D/g, '');
    let vlInputTextInt = `${strValue.substring(0, (strValue.length - 2))}`;
    let vlInputTextDec = `${strValue.substring(strValue.length - 2)}`;
    console.log(`${vlInputTextInt}.${vlInputTextDec}`);
})

//UMA STRING PARA CADA QUANTIDADE DE NÚMEROS DIGITADOS

//INPUT - 1n - OUTPUT -> R$ 0,01 ==  `R$ 0,0${arr[0]}`                         [1]
//INPUT - 2n - OUTPUT -> R$ 0,11 ==  `R$ 0,${arr[0-1]} `                       [1,1]
//INPUT - 3n - OUTPUT -> R$ 1,11 ==  `R$ ${arr[0]},${arr[1-2]}`                [1,1,1]

//INPUT - 4n - OUTPUT -> R$ 11,11 ==  `R$ ${arr[0-1],${arr[2,3]}}`         [1,1,1,1]
//INPUT - 5n - OUTPUT -> R$ 111,11 == `R$ ${arr[0-2],${arr[3,4]}}`        [1,1,1,1,1]

//INPUT - 6n - OUTPUT -> R$ 1.111,11 == `R$ ${arr[0]}.${arr[1-3]},${arr[4-5]}`         [1,1,1,1,1,1]
//INPUT - 7n - OUTPUT -> R$ 11.111,11 == `R$ ${arr[0-1]}.${arr[2-4]},${arr[5-6]}`      [1,1,1,1,1,1,1]
//INPUT - 8n - OUTPUT -> R$ 111.111,11 == `R$ ${arr[0-2]}.${arr[3-5]},${arr[6-7]}`     [1,1,1,1,1,1,1,1]// NOSSO MÁXIMO SERÁ O MILHAR

// R$ 1,00           STRING MÍNIMA


// R$ 123.456.789,00 STRING MÁXIMA
