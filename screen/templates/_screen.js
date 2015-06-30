var $ = require('dragonjs');

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
            require('../sprites/ex1.js'),
            require('../sprites/ex2.js')
        ],
        one: {
            ready: function () {
                this.start();
            }
        }
    });
};
