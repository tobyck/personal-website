function next() {
    $(".main").fadeOut(350);
    $(".right").addClass("right-animation");
    proj = (proj + 1) % list.length
    setTimeout(function() {        
        $(".main").html(list[proj]);
        $(".main").fadeIn(350);
    }, 550);
    setTimeout(function() {
        $(".right").removeClass("right-animation");
    }, 1050);
}

function last() {
    $(".main").fadeOut(350);
    $(".left").addClass("left-animation");
    setTimeout(function() {         
        if (proj == 0) {
            proj = list.length - 1;
            $(".main").html(list[list.length - 1]);
        } else {
            proj = (proj - 1) % list.length;
            $(".main").html(list[proj]);
        } $(".main").fadeIn(350);
    }, 550);
    setTimeout(function() {
        $(".left").removeClass("left-animation");
    }, 1050);
}

function home() {
    $(".home-img").addClass("home-animation");
    setTimeout(function() {
        $(".home-img").removeClass("home-animation");
        $(".home-img").css("transform", "scale(0.8)");
    }, 850);
}

function goto(index) {
    $(".main").fadeOut(350);
    setTimeout(function() {        
        proj = index; 
        $(".main").html(list[proj]);
        $(".main").fadeIn(350);
    }, 550);
}