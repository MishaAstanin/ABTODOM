let open_model_buttons = document.getElementsByClassName("open-model-window-button");

for(let i = 0; i < open_model_buttons.length; i++) {
    open_model_buttons[i].addEventListener("click", function() {
        document.getElementById("main-model-window").classList.add("open");
    });
}

document.getElementById("close-model-window-button").addEventListener("click", function() {
    document.getElementById("main-model-window").classList.remove("open");
});

window.addEventListener("keydown", (e) => {
    if(e.key === "Escape") {
        document.getElementById("main-model-window").classList.remove("open");
    }
});

let call_buttons = document.getElementsByClassName('call-button');
let form = document.getElementById('model-window-form');
for(let i = 0; i < call_buttons.length; i++) {
    call_buttons[i].addEventListener("click", function(e) {
        if(form.checkValidity()) {
            e.preventDefault()
            alert("Отлично! Мы вам перезвоним!");
            document.getElementById('model-window-tel').value = "";
            document.getElementById("main-model-window").classList.remove("open");
        }
    })
}