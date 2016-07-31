module.exports = function (grunt) {
    grunt.config.set('mocha_istanbul', {
        coverage: {
            src: '/home/alvaropaco/Projects/ubby_backend/test', // the folder, not the files
            options: {
                coverageFolder: 'coverage/',
                root: 'api/',
                recursive: true,
                timeout: 9000,
                reporter: true,
                mochaOptions: ["-R", "spec", "-b", "--recursive", "--timeout", "9000"]
            }
        }
    });
    grunt.loadNpmTasks('grunt-mocha-istanbul');
};