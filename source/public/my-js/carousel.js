carousel = (function()
{
    var box = document.querySelector('.carousel-box');
    var next = box.querySelector('.carousel-next');
    var prev = box.querySelector('.carousel-prev');
    var items = box.querySelectorAll('.carousel-content li');
    var counter = 0;
    var amount = items.length;
    var current = items[0];
    box.classList.add('carousel-active');
    function navigate(direction)
    {
        current.classList.remove('carousel-current');
        counter = counter + direction;
        if (direction === -1 && counter < 0)
        { 
            counter = amount - 1; 
        }
        if (direction === 1 && !items[counter])
        { 
            counter = 0;
        }
        current = items[counter];
        current.classList.add('carousel-current');
    }
    next.addEventListener('click', function(ev)
    {
        navigate(1);
    });
    prev.addEventListener('click', function(ev)
    {
        navigate(-1);
    });
    navigate(0);
})();
setInterval(function ()
{
    var numCarousels = document.getElementsByClassName("carousel-next").length;
    for(var index = 0; index < numCarousels; index++)
    {
        document.getElementsByClassName("carousel-next")[index].click();
    }
}, 5000);
