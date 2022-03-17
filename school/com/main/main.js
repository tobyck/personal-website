text = {
    0: "Hello!",
    1: "I'm Toby.",
    2: "This is my 10COM project."
}, clicks = 0;

$("#continue").fadeOut(0);

const setText = line => {
    $(".container").css("opacity", "0");
    line.split("").forEach((char, count) => $(".container").append(`<span id='span${count}'>${char}</span>`));
    $(".container").animate({
        opacity: "1"
    }, 500);
}; setTimeout(() => {
    setText(text[0]);
    $("#continue").delay(700).fadeIn(600);
    $(document).bind("click keydown", event => {
        if ((event.type == "click" || event.keyCode == 32) && clicks < Object.values(text).length) {
            var delay = 0;
            $("#continue").fadeOut(200);
            for (let i = 0; i < text[clicks].length; i++) {
                delay = (i + 1) ** 2 / (text[clicks].length * 70);
                $("#span" + i).css("animation", `down ${0.5 + delay}s forwards ${delay}s ease-in-out`);
            } clicks++;
            setTimeout(() => {
                $(".container").empty();
                if (clicks < Object.keys(text).length) {
                    setText(text[clicks]);
                    $("#continue").delay(700).fadeIn(300);
                } else {
                    $("#continue").fadeOut(200);
                    $(".container").html('<video controls src="toby.mp4"></video>');
                    $("#continue").html(`Thanks for stopping by! Click <span class="link" onclick="location.reload()">here</span> to go back to the beginning of the website, <a href='gallery'>here</a><br>to see some more images from photoshop, or <a href='gallery2'>here</a> to see them in a grid format.`).delay(1000).fadeIn(300);
                }
            }, delay * 1000 + (500 + delay));
        }
    });
}, 800);