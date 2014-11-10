module.exports = function (grunt) {
    grunt.config.merge({
        browserify: {
            build: {
                files: {
                    'dist/<%= name %>.js': [
                        'src/*.js'
                    ]
                }
            }
        }
    });
};
