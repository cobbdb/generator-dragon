var $ = require('dragonjs'),
    img = $.pipeline.add.image('<%= name %>.png');

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
            '<%= name %>': $.AnimationStrip(img, {
                frames: 5,
                speed: 10
            })
        },
        pos: $.Point(100, 100),
        depth: 2,
        on: {
            'colliding#screentap': function () {
            }
        }
    }).extend({
        update: function () {
            this.base.update();
        }
    });
};
