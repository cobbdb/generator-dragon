var $ = require('dragonjs');

module.exports = $.Screen({
    name: '<%= name %>',
    collisionSets: [
        require('../collisions/ex1.js')
    ],
    spriteSet: [
        require('../sprites/ex1.js'),
        require('../sprites/ex2.js')
    ],
    one: {
        ready: function () {
            this.start();
        }
    }
});
