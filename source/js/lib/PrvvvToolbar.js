'use strict';

var $ = require('jquery');
var EventEmitter = require('events');

function PrvvvToolbar(context) {
    console.log('PrvvvToolbar constructor');

    this.element = $('<iframe src="' + context.toolbarHTML + '" id="ext-toolbar" />');

    // this.element = $(elementId);
    // if (! this.element) {
    //  throw new Error('There is no Toolbar element.');
    // }
}


PrvvvToolbar.prototype.appendTo = function(container) {
    $(container).append(this.element);
};

module.exports = PrvvvToolbar;