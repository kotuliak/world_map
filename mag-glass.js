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
            var xTranslation2 = "calc(" + xTranslation + "px - (50vw - 100px) / "+ zoom +")";
            var yTranslation2 = "calc(" + yTranslation + "px - (50vh - 100px) / "+ zoom +")";
            $("#svg1").css("transform","translate(" + xTranslation + "px," + yTranslation + "px)");
            $("#svg2").css("transform","scale(" + zoom + ") translate(" + xTranslation2 + "," + yTranslation2 + ")");
            $("#svg1").css("-ms-transform","translate(" + xTranslation + "px," + yTranslation + "px)");
            $("#svg2").css("-ms-transform","scale(" + zoom + ") translate(" + xTranslation2 + "," + yTranslation2 + ")");
            $("#svg1").css("-webkit-transform","translate(" + xTranslation + "px," + yTranslation + "px)");
            $("#svg2").css("-webkit-transform","scale(" + zoom + ") translate(" + xTranslation2 + "," + yTranslation2 + ")");
            xPos = event.clientX;
            yPos = event.clientY;
        }
    });

    $("#mag-glass").on("mousewheel", function (event) {
        console.log(event.deltaY);
        event.preventDefault();
        var xTranslation2 = "";
        var yTranslation2 = "";
        if (event.deltaY > 0) {
            zoom = zoom * 1.5;
            if (zoom > 9) zoom = 9;
            xTranslation2 = "calc(" + xTranslation + "px - (50vw - 100px) / "+ zoom +")";
            yTranslation2 = "calc(" + yTranslation + "px - (50vh - 100px) / "+ zoom +")";
            $("#svg2").css("transform","scale(" + zoom + ") translate(" + xTranslation2 + "," + yTranslation2 + ")");
            $("#svg2").css("-ms-transform","scale(" + zoom + ") translate(" + xTranslation2 + "," + yTranslation2 + ")");
            $("#svg2").css("-webkit-transform","scale(" + zoom + ") translate(" + xTranslation2 + "," + yTranslation2 + ")");
        } else {
            zoom = zoom / 1.5;
            if (zoom < 1.3) zoom = 1.3;
            xTranslation2 = "calc(" + xTranslation + "px - (50vw - 100px) / "+ zoom +")";
            yTranslation2 = "calc(" + yTranslation + "px - (50vh - 100px) / "+ zoom +")";
            $("#svg2").css("transform","scale(" + zoom + ") translate(" + xTranslation2 + "," + yTranslation2 + ")");
            $("#svg2").css("-ms-transform","scale(" + zoom + ") translate(" + xTranslation2 + "," + yTranslation2 + ")");
            $("#svg2").css("-webkit-transform","scale(" + zoom + ") translate(" + xTranslation2 + "," + yTranslation2 + ")");
        }
     })

});