Document.addEventListener("KeyDown", (event) => {
    console.log(event);

    document.getElementById(event.code).style = "Background-color: white";

});