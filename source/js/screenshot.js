(function(global) {
    'use strict';

    var $ = require('jquery');
    var Paper = require('paper');
    var Toolbar = require('./toolbar');

    var App = {
        setScreenshot: function(url) {
            $('#capture').html('<img src="' + url + '" />');
        },
        setToolbar: function() {
            $('#toolbar').html('<iframe id="toolbar" src="content/toolbar.html">');
        }
    };


    function initialize(options) {
        // var screenshot = options.screenshot;

        // App.setScreenshot(screenshot);

        // var canvas = $('<canvas id="easel" />')
        //     .css({
        //         width: $('#capture img').width(),
        //         height: $('#capture img').height()
        //     })
        //     .appendTo($('#paper'));
        // var stage = new createjs.Stage("easel");
        // Toolbar.attachStage(stage);

    }

    module.exports = {
        initialize: initialize
    };
})((this || 0).self || global);
