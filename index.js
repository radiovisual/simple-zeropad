'use strict';

module.exports = function(num){

    if ( isNaN( parseFloat(num, 10) )) {
        throw new SyntaxError('zeropad parameter must be a string or a number');
    }

    var _n = parseFloat(num, 10);

    if (_n < 10){
        return "0"+_n;
    } else {
        return _n;
    }
};
