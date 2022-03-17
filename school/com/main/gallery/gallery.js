const $ = element => document.querySelector(element);

const images = ["balloon", "jump", "sign", "cat", "dblexp"].map(x => `images/${x}.png`);
var image = 0;
$("img").src = images[image];

function next() {
    image++;
    image = image > images.length - 1 ? 0 : image;
    $("img").style.opacity = 0;
    $(".right").classList.add("right-animation");
    setTimeout(() => {
        $("img").src = images[image];
        $("img").style.opacity = 1;
    }, 830);
    setTimeout(() => {
        $(".right").classList.remove("right-animation");
    }, 1050);
}

function last() {
    image--;
    image = image < 0 ? images.length - 1 : image;
    $("img").style.opacity = 0;
    $(".left").classList.add("left-animation");
    setTimeout(() => {
        $("img").src = images[image];
        $("img").style.opacity = 1;
    }, 830);
    setTimeout(() => {
        $(".left").classList.remove("left-animation");
    }, 1050);
}