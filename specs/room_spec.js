const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){

    let room;

    beforeEach(function() {
        room = new Room(50);
    });

    it('should have surface area', function() {
        const actual = room.area;
        assert.strictEqual(actual, 50);
    });

    it('should start not painted', function() {
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });

    it('should be paintable', function() {
        const actual = room.paintable;
        assert.strictEqual(actual, true);
    });

});