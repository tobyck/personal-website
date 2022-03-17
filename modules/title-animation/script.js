style = document.createElement("style");
style.innerHTML = `
body {overflow: hidden}
span {display: inline-block}
`;
style.id = "title-animation-stylesheet";
document.head.appendChild(style);

function setText(element, text, time, delay = 0) {
    element.innerHTML = "";
    element.style.opacity = 0;
    element.style.whiteSpace = "pre";
    element.style.transition = "opacity " + time / 1000 + "s ease";
    text.split("").forEach((char, count) => element.innerHTML += `<span id="${text.toLowerCase().replace(" ", "-")}-span-${count}">${char}</span>`);
    setTimeout(() => element.style.opacity = 1, delay);
}

function clearText(element) {
    element.innerHTML = "";
}

function animate(element, to, time, delay = 0) {
    setTimeout(() => {
        var text = "";
        [...element.children].forEach(child => {
            text += child.innerHTML
            child.style.transition = "transform " + time / 1000 + "s ease-in-out";
        }); for (var i = 0; i < element.children.length; i++) {
            (i => {
                var letterDelay = (i + 10) ** 2 / text.length / 1.7;
                setTimeout(() => element.children[i].style.transform = `translateY(${to})`, i * letterDelay);
            }) (i)
        }
    }, delay);
}