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