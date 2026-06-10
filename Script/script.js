document.addEventListener("keydown", (event) => {
    console.log(event);

    document.getElementById(event.code).style = "Background-color: rgb(71, 70, 69);";

});     

document.addEventListener("keyup", (event) => {
    console.log(event);

    document.getElementById(event.code).style = "Background-color: rgb(181, 169, 156)";

});     