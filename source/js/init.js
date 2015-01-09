// 
(function() {
	var $ = require('jquery');
	var Two = require('twojs-browserify');

	var html = $('html').get(0);
	var body = $('body').get(0);

	$(html).addClass('extWaiting');
	$(html).addClass('extReady');

	// create wrapper
	var applicationLayer = $('<div id="ext-application" />');
	$(body).append(applicationLayer);

	// create image
	var captureImage = $('<img src="' + context.captureData + '" id="ext-capture-image" />');
	$(applicationLayer).append(captureImage);


	// create canvas
	var canvas = $('<div id="ext-easel" />');
	canvas.css({
		width: captureImage.width(),
		height: captureImage.height()
	});
	$(applicationLayer).append(canvas);

	var two = new Two({
		width: captureImage.width(),
		height: captureImage.height()
	}).appendTo(canvas[0]);

	var circle = two.makeCircle(70, 100, 50);
	circle.fill = '#FF8000';
	circle.stroke = 'orangered';
	circle.linewidth = 5;
	two.update();

	var mouseX;
	var mouseY;

	var line;
	var isMouseDown = false;

	canvas.on('mousedown', function(event) {
		mouseX = event.clientX;
		mouseY = event.clientY;
		isMouseDown = true;
	})
	canvas.on('mouseup', function(event) {
		isMouseDown = false;
		mouseX = 0;
		mouseY = 0;
	})
	canvas.on('mousemove', function(event) {
		if (isMouseDown) {
			if (line)
				two.remove(line);
			console.log(mouseX, mouseY);
			line = two.makeLine(mouseX, mouseY, event.clientX, event.clientY);
			line.stroke = 'orangered';
			line.linewidth = 5;
		}
	})

})();




        // var canvas = $('<canvas id="easel" />')
        //     .css({
        //         width: $('#capture img').width(),
        //         height: $('#capture img').height()
        //     })
        //     .appendTo($('#paper'));
        // var stage = new createjs.Stage("easel");
        // Toolbar.attachStage(stage);