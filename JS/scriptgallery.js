document.addEventListener('DOMContentLoaded', () => {
    let buttons_like = document.getElementsByClassName('like_button');
    for(let i = 0; i < buttons_like.length; i++) {
        buttons_like[i].style.backgroundColor = 'rgb(206, 212, 218)';
        buttons_like[i].onclick = function() {
            if(buttons_like[i].style.backgroundColor == 'rgb(206, 212, 218)') {
                buttons_like[i].style.backgroundColor = 'rgb(255, 55, 55)';
            } else {
                buttons_like[i].style.backgroundColor = 'rgb(206, 212, 218)';
            }
        }
    }
  });