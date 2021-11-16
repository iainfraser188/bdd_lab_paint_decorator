const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function() {

    let decorator;
    let paint;
    let room;

    beforeEach(function(){
        decorator = new Decorator();
        paint = new Paint(10);
        room = new Room(50);
    });

    it('should start with no paint', function(){
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add paint to stock', function() {
        decorator.addPaint(paint);
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 1);
    });

    it('should be able to calculate paint in stock', function() {
        decorator.addPaint(paint);
        const actual = decorator.calculatePaint();
        assert.strictEqual(actual, 10);
    });

    it('should be able to check stock against surface area', function() {
        const actual = decorator.checkEnoughPaint(room);
        assert.strictEqual(actual, false);
    });
});