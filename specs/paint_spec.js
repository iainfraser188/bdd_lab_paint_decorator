const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function() {

    let paint;

    beforeEach(function(){
        paint = new Paint(50);
    });

    it('should have volume', function() {
        const actual = paint.volume;
        assert.strictEqual(actual, 50);
    });

    it('should be able to check if empty', function() {
        const actual = paint.checkEmpty();
        assert.strictEqual(actual, false);
    });

    it('should be able to empty itself', function() {
        paint.emptyTin();
        const actual = paint.volume;
        assert.strictEqual(actual, 0)
    });

});