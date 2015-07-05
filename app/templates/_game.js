var $ = require('dragonjs');

$.addFont('ExFont', {
    src: 'ex-font.TTF'
});

$.loadAssets(function () {
    $.addScreens([
        require('./screens/ex1.js'),
        require('./screens/ex2.js')
    ]);
});
