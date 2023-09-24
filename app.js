// get toogle classs and show link class to add on ul class
const toggle = document.querySelector('.nav-toggle')
const link = document.getElementsByClassName('.links')
var parentElement = document.querySelector('.links')
const body = document.getElementById('#container')
console.log(body)
function tog (){;
    if(parentElement.classList.contains('show-links')){
        parentElement.classList.remove('show-links')
    }
    else{
        parentElement.classList.add('show-links')
    }
}

toggle.addEventListener('click' , tog);

