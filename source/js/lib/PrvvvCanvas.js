'use strict';

var $ = require('jquery');
var EventEmitter = require('events');
var Two = require('twojs-browserify');

function PrvvvCanvas(options) {
    console.log('PrvvvCanvas constructor', options);

    this.canvas = $('<div id="ext-easel" />').get(0);
    this.events = new EventEmitter;

    // width, height
    if (options.width) {
        $(this.canvas).css({
            width: options.width
        });
    }
    if (options.height) {
        $(this.canvas).css({
            height: options.height
        });
    }

    // 
    $(window).on('resize', this.resizeHandler.bind(this));




    // test code

    

    var two = new Two({
        width: options.width,
        height: options.height
    }).appendTo(this.canvas);
    
    var mouseX;
    var mouseY;

    var line;
    var isMouseDown = false;

    $(this.canvas).on('mousedown', function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        isMouseDown = true;
    })
    $(this.canvas).on('mouseup', function(event) {
        isMouseDown = false;
        mouseX = 0;
        mouseY = 0;
    })
    $(this.canvas).on('mousemove', function(event) {
        if (isMouseDown) {
            if (line) {
                two.remove(line);
            }
            line = two.makeLine(mouseX, mouseY, event.clientX, event.clientY);
            line.stroke = 'orangered';
            line.linewidth = 5;
            two.update();
        }
    })



};


PrvvvCanvas.prototype.appendTo = function(container) {
    $(container).append(this.canvas);
};

PrvvvCanvas.prototype.resizeHandler = function(event) {
    this.events.emit('resize', event);
};

module.exports = PrvvvCanvas;