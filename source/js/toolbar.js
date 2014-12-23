(function(global) {
    'use strict';

    var Toolbar = {
        onToolArrowClick: function(event) {
            event.preventDefault();
            console.log('on arrow click');
        },
        onToolRectangleClick: function(event) {
            event.preventDefault();
            console.log('on rectangle click');
        },
        onToolCircleClick: function(event) {
            event.preventDefault();
            console.log('on circle click');
        },
        onToolLineClick: function(event) {
            event.preventDefault();
            console.log('on line click');
        },
        onOutputImageClick: function(event) {
            event.preventDefault();
            console.log('on save to image click');
        },
        onOutputIssueClick: function(event) {
            event.preventDefault();
            console.log('on send to issue click');
        }
    };

    document.getElementById('tool-arrow').addEventListener('click', Toolbar.onToolArrowClick);
    document.getElementById('tool-rect').addEventListener('click', Toolbar.onToolRectangleClick);
    document.getElementById('tool-circle').addEventListener('click', Toolbar.onToolCircleClick);
    document.getElementById('tool-line').addEventListener('click', Toolbar.onToolLineClick);
    document.getElementById('output-image').addEventListener('click', Toolbar.onOutputImageClick);
    document.getElementById('output-issue').addEventListener('click', Toolbar.onOutputIssueClick);

    if ("process" in global) {
        module.exports = Toolbar;
    }
    global['Toolbar'] = Toolbar;
})((this || 0).self || global);
