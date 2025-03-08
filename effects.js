$("#btn-fade-out").on("click", function () {
    // $("#box").fadeOut();
    // $("#box").fadeOut("fast");
    // $("#box").fadeOut("slow");
    // $("#box").fadeOut(3000); // 3s
    $("#box").fadeOut(3000, function () { // do something after fade-out
        $("#btn-fade-out").text("It's gone");
    }); 
});

$("#btn-fade-in").on("click", function () {
    // $("#box").fadeIn();
    // $("#box").fadeIn("fast");
    // $("#box").fadeIn("slow");
    // $("#box").fadeIn(3000); // 3s
    $("#box").fadeIn(3000, function () { // do something after fade-in
        $("#btn-fade-in").text("It's in");
    }); 
});

$("#btn-fade-tog").on("click", function () {
    // $("#box").fadeToggle();
    $("#box").fadeToggle(1000);
});

// element (box) has to be display none initially for this to work
$("#btn-slide-down").on("click", function () {
    $("#box").slideDown();
});

// element (box) has to be displayed initially (visible)
$("#btn-slide-up").on("click", function () {
    $("#box").slideUp();
});

$("#btn-slide-tog").on("click", function () {
    $("#box").slideToggle();
});

// stops the animation/effect
$("#btn-stop").on("click", function () {
    $("#box").stop();
});

// box-2 must be positioned relative for this to work
$("#btn-move-right").on("click", function () {
    $("#box-2").animate({
        left: 500,
        height: "300px",
        width: "300px",
        opacity: "0.5"
    });
});

$("#btn-move-left").on("click", function () {
    $("#box-2").animate({
        left: 0,
        height: "100px",
        width: "100px",
        opacity: "1"
    });
});

$("#btn-move-around").on("click", function () {
    const box2 = $("#box-2");
    box2.animate({
        left: 300
    });
    box2.animate({
        top: 300
    });
    box2.animate({
        left: 0
    });
    box2.animate({
        top: 0
    });
});