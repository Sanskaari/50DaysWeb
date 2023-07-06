const btn = document.querySelector('button');
const bar = document.querySelector('input');
btn.addEventListener('click', function()
{
    bar.classList.toggle('active');
    bar.focus();
})