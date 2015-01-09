// 
(function() {
	var $ = require('jquery');

	var html = $('html').get(0);
	var body = $('body').get(0);

	$(html).addClass('extWaiting');
	$(html).addClass('extReady');

	// create wrapper
	var applicationLayer = $('<div id="ext-application" />');
	$(body).append(applicationLayer);

	// create image
	var captureImage = $('<img src="' + context.captureData + '" />');
	$(applicationLayer).append(captureImage);


	// create canvas
	var canvas = $('<canvas id="easel" />');
	$(applicationLayer).append(canvas);

})();




        // var canvas = $('<canvas id="easel" />')
        //     .css({
        //         width: $('#capture img').width(),
        //         height: $('#capture img').height()
        //     })
        //     .appendTo($('#paper'));
        // var stage = new createjs.Stage("easel");
        // Toolbar.attachStage(stage);