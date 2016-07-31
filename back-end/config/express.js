var path = require('path')
  , express = require('../node_modules/sails/node_modules/express')
  , passport = require('passport')
  , timeout = require('connect-timeout');

/**
 * Express Custom Middleware
 * (sails.config.middleware.cutom)
 *
 * Configure custom express middleware which will be exposed
 * automatically by Sails.
 *
 * For more information on configuration, check out:
 * https://gist.github.com/mikermcneil/6255295
 */

module.exports.express = {
  middleware: {
    custom: true
  },

  customMiddleware: function (app) {
    // Passport
    if(process.env.NODE_ENV != 'development') app.use(timeout('71s'));
    else app.use(timeout('360s'));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function(req, res, next){
        if(req.session) res.locals.user = req.session.me;
        next();
    });
    
    app.use(express.logger());
    app.use(express.compress());
    app.use('/api/docs',express.static('assets/swagger-ui/dist/'));
    ///TODO: Coming soon page
    app.use('/',express.static('assets/coming-soon'));
  }
};