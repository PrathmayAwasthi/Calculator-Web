let string = "";
let buttons = document.querySelectorAll('.button'); // saare ke saare select karleta hai
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } 
        else if(e.target.id == 'divide'){
            string = string + '/';
            document.querySelector('input').value = string;
        }
        else if(e.target.id == 'multiply'){
            string = string + '*';
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "0";
            document.querySelector('input').value = string;
        }
        else if(e.target.id == 'bs'){
            string = string.substr(0, string.length-1);
            document.querySelector('input').value = string;
        }
        else {
            if(string == '0') string='';
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})