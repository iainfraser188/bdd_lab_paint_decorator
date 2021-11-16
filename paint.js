const Paint = function(volume) {
    this.volume = volume;
};

Paint.prototype.checkEmpty = function() {
    return this.volume === 0;
};

Paint.prototype.emptyTin = function() {
    this.volume = 0;
}

module.exports = Paint;