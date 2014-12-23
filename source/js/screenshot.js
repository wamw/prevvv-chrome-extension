(function(global) {
    'use strict';

	var Toolbar = require('./toolbar');

	var App = {
		setScreenshot: function(url) {
			document.getElementById('image').innerHTML = '<img src="' + url + '" />';
		},
		setToolbar: function() {
			document.getElementById('toolbar').innerHTML = '<iframe id="toolbar" src="content/toolbar.html">';
		}
	};


	function initialize(options) {
		var screenshot = options.screenshot;

		App.setScreenshot(screenshot);
		// App.setToolbar();
	}

    if ("process" in global) {
        module.exports = {
        	initialize: initialize
        };
    }
    global['initialize'] = initialize;
})((this || 0).self || global);
