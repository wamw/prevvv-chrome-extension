(function(global) {
    'use strict';

    var $ = require('jquery');

    var Toolbar = {
        stage: null,
    	mode: '',
        initialize: function() {
            console.log('toolbar initialize')
        },
        onToolArrowClick: function(event) {
            event.preventDefault();
            console.log('on arrow click');
            console.log(this.stage);
            this.mode = 'arrow';
        },
        onToolRectangleClick: function(event) {
            event.preventDefault();
            console.log('on rectangle click');
            this.mode = 'rect';
        },
        onToolCircleClick: function(event) {
            event.preventDefault();
            console.log('on circle click');
            this.mode = 'circle';
        },
        onToolLineClick: function(event) {
            event.preventDefault();
            console.log('on line click');
            this.mode = 'line';
        },
        onOutputImageClick: function(event) {
            event.preventDefault();
            console.log('on save to image click');
        },
        onOutputIssueClick: function(event) {
            event.preventDefault();
            console.log('on send to issue click');
        },
        attachStage: function(stage) {
            console.log(stage);
            this.stage = stage;
        }
    };

    $('#tool-arrow').on('click', Toolbar.onToolArrowClick);
    $('#tool-rect').on('click', Toolbar.onToolRectangleClick);
    $('#tool-circle').on('click', Toolbar.onToolCircleClick);
    $('#tool-line').on('click', Toolbar.onToolLineClick);
    $('#output-image').on('click', Toolbar.onOutputImageClick);
    $('#output-issue').on('click', Toolbar.onOutputIssueClick);

        module.exports = Toolbar;
})((this || 0).self || global);
