if (window.jQuery) {
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
} else {
    document.getElementById("stylesheet").href = "error.css";
    document.title = "424 Error - Dependency Failed to Load";
    document.getElementsByTagName("body")[0].innerHTML = `
    <div>
    <h1><span>424</span> Error</h1>
    <p>
        This website did not load properly,<br>probably because a missing dependency.<br>Try loading the page in a different browser.
    </p>
    </div>`;
}