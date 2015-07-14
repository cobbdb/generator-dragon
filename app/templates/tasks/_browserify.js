module.exports = function (grunt) {
    grunt.config.merge({
        browserify: {
            build: {
                files: {
                    'bin/<%= name %>.js': [
                        'src/game.js'
                    ]
                }
            }
        }
    });
};
