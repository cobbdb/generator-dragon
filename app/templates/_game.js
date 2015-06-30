var $ = require('dragonjs');

$.addFont('ExFont', {
    src: 'ex-font.TTF'
});

$.start(function () {
    return [
        require('./screens/ex1.js')
    ];
}, false);
