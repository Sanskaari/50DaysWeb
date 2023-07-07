const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter',function(){
    left.style.width = '150vb';
    right.style.width = '50vb';
})

left.addEventListener('mouseleave',function(){
    left.style.width = '100vb';
    right.style.width = '100vb';
})

right.addEventListener('mouseenter',function(){
    left.style.width = '50vb';
    right.style.width = '150vb';
})

right.addEventListener('mouseleave',function(){
    left.style.width = '100vb';
    right.style.width = '100vb';
})