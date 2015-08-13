/**
 * Created by kotuliak on 11/08/15.
 */


$(document).ready(function(){
    var isDown = false;
    var xPos = 0;
    var xTranslation = 0;
    var yPos = 0;
    var yTranslation = 0;
    var zoom = 2;

    $("#back").on("mousedown", function (event) {
        isDown = true;
        xPos = event.clientX;
        yPos = event.clientY;
    })
    .on("mouseup", function () {
        isDown = false;
        xPos = 0;
        yPos = 0;
    })
    .on("mousemove", function (event) {
        if (isDown) {
            xTranslation += -(xPos - event.clientX);
            yTranslation += -(yPos - event.clientY);
            var xTranslation2 = xTranslation - 400/zoom;
            var yTranslation2 = yTranslation - 400/zoom;
            $("#svg1").css("transform","translate(" + xTranslation + "px," + yTranslation + "px)");
            $("#svg2").css("transform","scale(" + zoom + ") translate(" + xTranslation2 + "px," + yTranslation2 + "px)");
            $("#svg1").css("-ms-transform","translate(" + xTranslation + "px," + yTranslation + "px)");
            $("#svg2").css("-ms-transform","scale(" + zoom + ") translate(" + xTranslation2 + "px," + yTranslation2 + "px)");
            $("#svg1").css("-webkit-transform","translate(" + xTranslation + "px," + yTranslation + "px)");
            $("#svg2").css("-webkit-transform","scale(" + zoom + ") translate(" + xTranslation2 + "px," + yTranslation2 + "px)");
            xPos = event.clientX;
            yPos = event.clientY;
        }
    });

    $("#mag-glass").on("mousewheel", function (event) {
        console.log(event.deltaY);
        event.preventDefault();
        var xTranslation2 = 50;
        var yTranslation2 = 50;
        if (event.deltaY > 0) {
            zoom = zoom * 1.5;
            if (zoom > 9) zoom = 9;
            xTranslation2 = xTranslation - 400/zoom;
            yTranslation2 = yTranslation - 400/zoom;
            $("#svg2").css("transform","scale(" + zoom + ") translate(" + xTranslation2 + "px," + yTranslation2 + "px)");
            $("#svg2").css("-ms-transform","scale(" + zoom + ") translate(" + xTranslation2 + "px," + yTranslation2 + "px)");
            $("#svg2").css("-webkit-transform","scale(" + zoom + ") translate(" + xTranslation2 + "px," + yTranslation2 + "px)");
        } else {
            zoom = zoom / 1.5;
            if (zoom < 1.3) zoom = 1.3;
            xTranslation2 = xTranslation - 400/zoom;
            yTranslation2 = yTranslation - 400/zoom;
            $("#svg2").css("transform","scale(" + zoom + ") translate(" + xTranslation2 + "px," + yTranslation2 + "px)");
            $("#svg2").css("-ms-transform","scale(" + zoom + ") translate(" + xTranslation2 + "px," + yTranslation2 + "px)");
            $("#svg2").css("-webkit-transform","scale(" + zoom + ") translate(" + xTranslation2 + "px," + yTranslation2 + "px)");
        }
     })

});