/*document.getElementById("map").addEventListener("wheel", function (event) {
	event.preventDefault();
	var transform = document.getElementById("world_map").getAttribute("transform");
	var transformValue = transform.slice(6, transform.length - 1);
	var tranformIntValue = parseFloat(transformValue);
	if (event.deltaY > 0) {
		tranformIntValue = tranformIntValue * 0.9;
	} else {
		tranformIntValue = tranformIntValue / 0.9;
	}
	console.log(tranformIntValue);
	transform = 'scale(' + tranformIntValue + ')';
	document.getElementById("world_map").setAttribute("transform", transform);
});*/

/*function init() {
	window.addEventListener('scroll', function(e){
		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 10,
			header = document.getElementsByTagName('header');
		if (distanceY > shrinkOn) {
			header[0].id = 'scrolled';
		} else {
			if (header[0].hasAttribute('id')) {
				header[0].removeAttribute('id');
			}
		}
	});
}
window.onload = init();*/