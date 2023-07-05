const cards = document.querySelectorAll('.card');

for(let card of cards)
{
    card.addEventListener('click', function(){
        removeExpanded();
        card.classList.add('expanded');
    })
}

function removeExpanded()
{
    for(let card of cards)
    {
        card.classList.remove('expanded');
    }
}