const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');

describe('Decorator', function() {

    let decorator;
    let paint;

    beforeEach(function(){
        decorator = new Decorator();
        paint = new Paint(10);
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
});