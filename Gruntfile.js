module.exports = function(grunt) {
    
    grunt.initConfig({
       
        pkg: grunt.file.readJSON('package.json'),
        
        /**
         * Sass Task
         */
        sass: {
            dev: {
              options: {
                  style: 'expanded',
                  sourcemap: 'none',
              },
              files: {
                  'style-expanded.css': 'sass/style.scss'
              }
            },
            dist: {
              options: {
                  style: 'compressed',
                  sourcemap: 'none',
              },
              files: {
                  'style.css': 'sass/style.scss'
              }
            }
        },
        
        /**
         * Autoprefixer Task
         */
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            //prefix all files
            multiple_files: {
                expand: true,
                flatten: true,
                src: '*.css',
                dest: ''
            }
        },
        
        /**
         * Watch Task
         */
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass','autoprefixer']
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
    
}