const Decorator = function(){
    this.stock = [];
};

Decorator.prototype.addPaint = function(paint) {
    this.stock.push(paint);
};

Decorator.prototype.calculatePaint = function() {
    let total = 0;
    for (tin of this.stock) {
        total += tin.volume;
    };
    return total;
};

Decorator.prototype.checkEnoughPaint = function(room) {
    return room.area <= this.calculatePaint();
};

module.exports = Decorator;