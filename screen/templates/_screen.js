var $ = require('dragonjs'),
    Ex1 = require('../sprites/ex1.js'),
    Ex2 = require('../sprites/ex2.js');

/**
 * @class <%= title %>
 * @extends Dragon.Screen
 */
module.exports = function (opts) {
    return $.Screen({
        name: '<%= name %>',
        collisions: [
            require('../collisions/ex1.js')
        ],
        sprites: [
            Ex1(),
            Ex2()
        ],
        one: {
            ready: function () {
                this.start();
            }
        }
    });
};
