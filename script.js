const button = document.querySelectorAll('button');
const content = document.querySelectorAll('.content')
const hr = document.querySelectorAll('hr')
const answer = document.querySelectorAll('.answer');


function buttonClick(i) {
    button[i].onclick = function () {
        if (button[i].textContent === '+') {
            // content ke-i
            button[i].textContent = '-';
            content[i].classList.add('content-down');
            hr[i].classList.add('down');
            answer[i].classList.add('down');
            // content ke-(i+1)%2
            button[(i+1)%3].textContent = '+';
            content[(i+1)%3].classList.remove('content-down');
            hr[(i+1)%3].classList.remove('down');
            answer[(i+1)%3].classList.remove('down');
            // content ke-(i+2)%2
            button[(i+2)%3].textContent = '+';
            content[(i+2)%3].classList.remove('content-down');
            hr[(i+2)%3].classList.remove('down');
            answer[(i+2)%3].classList.remove('down');
        } else {
            // content ke-i
            button[i].textContent = '+';
            content[i].classList.remove('content-down');
            hr[i].classList.remove('down');
            answer[i].classList.remove('down');
        }
    }
}

buttonClick(0);
buttonClick(1);
buttonClick(2);