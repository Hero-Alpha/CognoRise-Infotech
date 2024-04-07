let input = document.querySelector('.calc-numbers');
let buttons = document.querySelectorAll('button');

let inputString = "";
let result = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            let expression = inputString.replace(/×/g, '*').replace(/÷/g, '/');
            result = eval(expression);
            input.value = result;
            inputString=result.toString();
        }
        else if (e.target.innerHTML == 'AC') {
            inputString = "";
            result="";
            input.value = inputString;
        }
        else if (e.target.innerHTML == '←') {
            inputString = inputString.slice(0, -1);
            input.value = inputString;
        }
        else {
            inputString += e.target.innerHTML;
            input.value = inputString;
        }
    })
<<<<<<< HEAD
})
=======
})

>>>>>>> bc8fe2fa8e4f4cd693f8d391dd010832afaf1885
