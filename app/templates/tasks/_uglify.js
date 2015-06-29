module.exports = function (grunt) {
    grunt.config.merge({
        uglify: {
            raw: {
                files: {
                    'dist/<%= name %>.js': [
                        'bower_components/cocoonjs-plugins/build/cocoon.js',
                        'bin/<%= name %>.js'
                    ]
                },
                options: {
                    compress: false,
                    beautify: true,
                    mangle: false
                }
            },
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
