style = document.createElement("style");
style.innerHTML = `body {overflow: hidden}
span {display: inline-block}`;
style.id = "title-animation-stylesheet";
document.head.appendChild(style);

[...document.querySelectorAll("body *")].forEach(element => {
    element.animateText = function(to, time, delay = 0) {
        setTimeout(() => {
            var text = "";
            [...this.children].forEach(child => {
                text += child.innerHTML
                child.style.transition = "transform " + time / 1000 + "s ease-in-out";
            }); for (var i = 0; i < this.children.length; i++) {
                (i => {
                    var letterDelay = (i + 10) ** 2 / text.length / 1.7;
                    setTimeout(() => this.children[i].style.transform = `translateY(${to})`, i * letterDelay);
                }) (i)
            }
        }, delay + time);
    }

    element.setText = function(text, time = 0, delay = 0) {
        this.innerHTML = "";
        this.style.opacity = 0;
        this.style.whiteSpace = "pre";
        this.style.transition = "opacity " + time / 1000 + "s ease";
        text.split("").forEach((char, count) => this.innerHTML += `<span id="${text.toLowerCase().replace(" ", "-")}-span-${count}">${char}</span>`);
        setTimeout(() => this.style.opacity = 1, delay);
        setTimeout(() => this.style.transition = "", delay + time);
    }

    element.clearText = function(delay = 0) {
        setTimeout(() => this.innerHTML = "", delay);
    }
});