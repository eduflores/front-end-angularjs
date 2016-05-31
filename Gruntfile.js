module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
    	  files: {
    	        'src/main/webapp/js/app.js': ['src/main/webapp/js/app.js'],
    			'src/main/webapp/js/controllers/peopleCtrl.js': ['src/main/webapp/js/controllers/peopleCtrl.js']    			
    	      }
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // Default task(s).
  grunt.registerTask('default',['uglify']);

};