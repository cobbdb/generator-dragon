var $ = require('dragonjs');

/**
 * @class <%= title %>
 * @extends Dragon.Sprite
 */
module.exports = function (opts) {
    return $.Sprite({
        name: '<%= name %>',
        collisionSets: [
            $.collisions
        ],
        mask: $.Rectangle(
            $.Point(),
            $.Dimension(64, 64)
        ),
        strips: {
            '<%= name %>': $.AnimationStrip({
                sheet: $.SpriteSheet({
                    src: '<%= name %>.png'
                }),
                start: $.Point(10, 10),
                size: $.Dimension(64, 64),
                frames: 5,
                speed: 10
            })
        },
        startingStrip: '<%= name %>',
        pos: $.Point(100, 100),
        depth: 2,
        on: {
            'colliding/screentap': function () {
            }
        }
    }).extend({
        update: function () {
            this.base.update();
        }
    });
};
