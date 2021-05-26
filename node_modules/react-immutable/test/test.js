/*!
**  react-immutable -- React and Immutable holding hands.
**  Copyright (c) 2015 Yuri Neves Silveira <http://yneves.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/yneves/react-immutable>
*/
// - -------------------------------------------------------------------- - //
// - libs

"use strict";

var assert = require("assert");


describe("react-immutable", function() {
  
  it("should load without errors", function() {
    var React = require("../");
    assert.ok(React);
  });
  
  it("should export react as-is", function() {
    var React = require("../");
    assert.strictEqual(React, require("react"));
  });
  
});

// - -------------------------------------------------------------------- - //
