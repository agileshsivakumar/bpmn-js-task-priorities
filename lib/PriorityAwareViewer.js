'use strict';

var inherits = require('inherits');

var Viewer = require('bpmn-js/lib/Viewer');

function PriorityAwareViewer(options) {
  Viewer.call(this, options);
}

inherits(PriorityAwareViewer, Viewer);

module.exports = PriorityAwareViewer;


// make priorities module available with viewer

var prioritiesModule = require('./priorities');

PriorityAwareViewer.prototype._modules =
  PriorityAwareViewer.prototype._modules.concat([ prioritiesModule ]);