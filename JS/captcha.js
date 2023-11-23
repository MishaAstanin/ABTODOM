var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var captcha = document.getElementById('captcha');
var button = document.getElementById('captcha-button');
var input = document.getElementById('captcha-input');
var enter = document.getElementById('enter-button');
var number_1;
var number_2;
var captcha_text = '';
var choice;

function generateCaptcha() {
   choice = Math.round(Math.random());

   if(choice) {
       number_1 = Math.floor(Math.random() * 11);
       number_2 = Math.floor(Math.random() * 11);
       captcha_text = number_1 + " + " + number_2;
       captcha.innerText = captcha_text;
   } else {
       for(let i = 0; i < 5; i++) {
           let index = Math.floor(Math.random() * 52);
           captcha_text += alphabet[index];
       }
       captcha.innerText = captcha_text;
   }
}

button.addEventListener("click", function(e) {
   e.preventDefault();
   if(choice == 0 && input.value === captcha_text) {
       alert("Всё верно");
       captcha_text = '';
       enter.disabled = false;
   } else if(choice == 1 && parseInt(input.value) == number_1+number_2){
       alert("Всё верно");
       captcha_text = '';
       enter.disabled = false;
   } else {
       captcha_text = '';
       input.value = '';
       enter.disabled = true;
       generateCaptcha();
   }
})

generateCaptcha();
