let btn2 = document.querySelector('#wandDiv')
let box = document.querySelector('#box');
btn2.addEventListener('mouseup',function(){
    box.style.display = 'flex';
    btn2.style.display = 'none';
});