module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      src: ['src/**/*.js'],
    },
    clean: {
      dist: ['dist']
    },
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [
          {
                expand: true,
                cwd: 'dist/',
                src: ['<%= pkg.name %>.js'],
                dest: 'dist/'
          }
        ]
      }
    },    
    concat: {
      options: {
        internal: {
          sourceMap: true
        }
      },
      internal: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      },
      vendor: {
        src: [
          'node_modules/angular/angular.js',
        ],
        dest: 'dist/vendor.js'
      }
    },
    copy: {
      index: {
        files: [
          {
            cwd: 'src',
            expand: true,
            src: ['index.html'],
            dest: 'dist',
          }
        ]
      }
    },    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.internal.dest %>'],
          'dist/vendor.min.js': ['<%= concat.vendor.dest %>']
        }
      }
    },
    watch: {
      files: ['src/**/*.js', 'src/*.html'],
      tasks: ['build']
    }
  });

  grunt.loadNpmTasks('gruntify-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['eslint']);
  grunt.registerTask('default', ['babel']);
  grunt.registerTask('build', ['clean', 'eslint', 'concat', 'babel', 'copy']);
  grunt.registerTask('serve', ['build', 'watch']);
};
