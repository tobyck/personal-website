function alert(message, width = "450px", height = "") {
    // remove previous alert before creating a new one
    if (document.getElementById("custom-alert-stylesheet")) {
        ["stylesheet", "darken", "box"].map(el => `custom-alert-${el}`).forEach(el => document.getElementById(el).remove());
    }

    // allow basic markdown inside the alert
    message = message.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                     .replace(/\[(.*)\]\(([^\s]+)\)/g, "<a href='$2' class='custom-alert-link'>$1</a>")
                     .replace(/\*\*(.*)\*\*/g, "<b>$1</b>")
                     .replace(/\*(.*)\*/g, "<i>$1</i>")
                     .replace(/\n/g, "<br>");

    // add stylesheet
    var stylesheet = document.createElement("link");
    stylesheet.id = "custom-alert-stylesheet"
    stylesheet.rel = "stylesheet";
    stylesheet.href = "alert.css";
    document.head.appendChild(stylesheet);

    // create an element to darken the rest of the screen
    var darken = document.createElement("div");
    darken.id = "custom-alert-darken";

    // create box
    var box = document.createElement("div");
    box.id = "custom-alert-box";
    box.style.width = width;
    box.style.height = height;
    
    // create text
    var text = document.createElement("p");
    text.innerHTML = message;
    text.id = "custom-alert-text";
    
    var button = document.createElement("button");
    button.innerText = "OK";
    button.id = "custom-alert-button";
    button.onclick = () => {
        stylesheet.remove();
        darken.remove();
        box.remove();
    }

    // add elements to the box and page
    box.appendChild(text);
    box.appendChild(button);
    document.body.appendChild(darken)
    document.body.appendChild(box);
}