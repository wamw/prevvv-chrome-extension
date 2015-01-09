// 
(function() {
    var $ = require('jquery');
    var PrvvvCanvas = require('./lib/PrvvvCanvas');

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
    var prvvvCanvas = new PrvvvCanvas({
        width: captureImage.width(),
        height: captureImage.height()
    });
    prvvvCanvas.appendTo(applicationLayer);

})();
