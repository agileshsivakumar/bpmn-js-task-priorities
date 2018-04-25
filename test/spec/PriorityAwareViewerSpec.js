'use strict';

var TestHelper = require('../TestHelper');

var TestContainer = require('mocha-test-container-support');

var PriorityAwareViewer = require('lib/PriorityAwareViewer');


describe('PriorityAwareViewer', function() {

  var diagramXML = require('./diagram.bpmn');

  var container;

  beforeEach(function() {
    container = TestContainer.get(this);
  });


  it('should bootstrap', function(done) {
    var viewer = new PriorityAwareViewer({ container: container });

    viewer.importXML(diagramXML, done);
  });

});