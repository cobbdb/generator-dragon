var $ = require('dragonjs');

/**
 * @class <%= title %>
 * @extends Dragon.Sprite
 */
module.exports = $.Sprite({
    name: '<%= name %>',
    collisions: [
        $.collisions
    ],
    mask: $.Rectangle(),
    strips: {
        '<%= name %>': $.AnimationStrip('<%= name %>', {
            frames: 5,
            speed: 10
        })
    },
    pos: $.Point(100, 100),
    size: $.Dimension(100, 100),
    depth: 2,
    on: {
        'colliding#screentap': function () {
            this.alert();
        }
    }
}).extend({
    alert: function () {
        $.audio('<%= name %>.ogg').play(true);
    }
});
