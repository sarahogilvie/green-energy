var masthead,
    slides,
    buttons,
    contents,
    container,
    i,
    k;

// SLIDESHOW
masthead = document.querySelector(".mh-image");

var slides = [
        "<figure><img src=\"img/mast01.jpg\" alt=\"Wind\"><figcaption>Capture the wind with our build-it-yourself home windmills!</figcaption></figure>",
        "<figure><img src=\"img/mast02.jpg\" alt=\"Solar\"><figcaption>Harness the sun with our pre-packaged solar panel kit!</figcaption></figure>",
        "<figure><img src=\"img/mast03.jpg\" alt=\"Water\"><figcaption>Our easy to install waterwheels will half your household electricty spending!</figcaption></figure>",
        "<figure><img src=\"img/mast04.jpg\" alt=\"Budget\"><figcaption>Turn your kitchen waste into energy-producing biomass!</figcaption></figure>"
    ];
    

function fadeOut() {
    "use strict";
    masthead.style.opacity = 0;
}

i = 0;

function runSlides() {
    "use strict";
    masthead.style.opacity = 1;
    if (i > 3) {
        i = 0;
    }
    masthead.innerHTML = slides[i];
    i = i + 1;
    setTimeout(fadeOut, 5000);
}

runSlides();

setInterval(runSlides, 6000);


// MAIN CONTENT

var buttons = document.querySelectorAll(".btn");
var contents = [
    "<figure><img src=\"img/main01.jpg\" alt=\"Wind\"><figcaption><h3>Wind Power</h3>Using the wind to power your home is an economical way to get off the grid. Our line of build-it-yourself home windmills are easy to assemble, espcially with our Home Starter Guide and our 24 hour help hotline. With regular use you can expect to see a utilities bill reduction of up to 14% over six months!</figcaption></figure>",
    "<figure><img src=\"img/main02.jpg\" alt=\"Solar\"><figcaption><h3>Solar Power</h3>If you live in a sunny climate, then using the sun to power your home is an environmentally-friendly way to get off the frid. Our custom-fit solar panels are capable of providing up to three weeks of power to your home.</figcaption></figure>",
    "<figure><img src=\"img/main03.jpg\" alt=\"Water\"><figcaption><h3>Hydro Power</h3>For those who live next to moving bodies of water, hydro power may be the better solution for you. Our waterwheels are easy to install and can be modified for river and ocean use. Hydro power is a reliable way to power your home.</figcaption></figure>"
];

var container = document.querySelector(".container");

k = 0;

container.innerHTML = contents[k];

function handleClick(ev) {
    "use strict";
   
    for (k = 0; k < buttons.length; k += 1) {
        if (buttons[k].hasAttribute("id", "active")) {
            buttons[k].removeAttribute("id", "active");
        }
    }

    if (ev.target.innerHTML === "B1") {
        container.innerHTML = contents[0];
        
    } else if (ev.target.innerHTML === "B2") {
        container.innerHTML = contents[1];
    } else if (ev.target.innerHTML === "B3") {
        container.innerHTML = contents[2];
    }
    
    ev.target.setAttribute("id", "active");
}

for (k = 0; k < buttons.length; k += 1) {
    buttons[k].addEventListener("click", handleClick, false);
}


var images = [];

function preload(arr) {
   
    "use strict";
    
    for (i = 0; i < arr.length; i += 1) {
        images[i] = new Image();
        images[i].src = arr[i];
    }
}

preload(contents);