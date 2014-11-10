module.exports = function (grunt) {
    grunt.config.merge({
        uglify: {
            build: {
                files: {
                    'dist/<%= name %>.min.js': [
                        'dist/<%= name %>.js'
                    ]
                }
            }
        }
    });
};
