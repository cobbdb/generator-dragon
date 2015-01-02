var Dragon = require('dragonjs'),
    Game = Dragon.Game,
    Point = Dragon.Point,
    Dimension = Dragon.Dimension,
    Rect = Dragon.Rectangle,
    Sprite = Dragon.Sprite,
    AnimationStrip = Dragon.AnimationStrip,
    SpriteSheet = Dragon.SpriteSheet;

module.exports = Sprite({
    name: '<%= name %>',
    collisionSets: [
        Game.collisions
    ],
    mask: Rect(
        Point(),
        Dimension(64, 64)
    ),
    strips: {
        '<%= name %>': AnimationStrip({
            sheet: SpriteSheet({
                src: '<%= name %>.png'
            }),
            start: Point(10, 10),
            size: Dimension(64, 64),
            frames: 5,
            speed: 10
        })
    },
    startingStrip: '<%= name %>',
    pos: Point(100, 100),
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
