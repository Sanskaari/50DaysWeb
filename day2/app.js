const nextB = document.querySelector('.nextBtn');
const circles = document.querySelectorAll('.circle');
const pervB = document.querySelector('.previousBtn');
const progress = document.querySelector('.progressBar2');

let currActive = 1;
let prog = 0;


nextB.addEventListener('click', function(){
    currActive++;
    prog += 4.6666;
    
    if(currActive > circles.length)
    {
        currActive = circles.length;
        prog = 14;
    }

    update();
})

pervB.addEventListener('click',function()
{
    currActive--;
    prog -= 4.6666;
    if(currActive < 1)
    {
        currActive = 1;
        prog = 0;
    }

    update();
})

function update()
{
    circles.forEach(function(circle,idx)
    {
        if(idx < currActive)
        {
            circle.classList.add('active');
        }
        else
        {
            circle.classList.remove('active');
        }

        progress.style.width = prog + '%';
    })
}

