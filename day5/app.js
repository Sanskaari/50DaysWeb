const body = document.querySelector('.container');
const load = document.querySelector('.loading');

let lod = 0;

let interval = setInterval(blurring, 30);

function blurring(){
    lod++

    if(lod > 99)
    {
        clearInterval(interval)
    }

    load.innerText = `${lod}%`
    load.style.opacity = 0;
    body.style.filter = `blur(0px)`
}