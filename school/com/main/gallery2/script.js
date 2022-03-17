const $ = el => document.querySelector(el);
var images = ["balloon", "jump", "sign", "cat", "dblexp"];
images.map(image => `images/${image}.png`).forEach((image, count) => {
    $(".container").innerHTML += count == Math.floor(images.length / 2) ? "<br>" : "";
    $(".container").innerHTML += `<a href="../"><img src="${image}" id="img${count}"></a>`;
});

document.addEventListener("mousemove", event => {
    $("#mouse").style.left = event.clientX + "px";
    $("#mouse").style.top = event.clientY + "px";
});