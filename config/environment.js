/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'savor',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    DS: {
      host: 'http://localhost:4000',
      namespace: 'api'
    },

    'ember-simple-auth': {
     authenticationRoute: 'auth.login',
     routeIfAlreadyAuthenticated: 'app.index',
     routeAfterAuthentication: 'app.index'
    },

    flashMessageDefaults: {
      timeout: 3000,
      extendedTimeout: 375
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.DS.host = 'https://young-earth-12318.herokuapp.com';
    ENV.DS.namespace = 'api';
  }

  return ENV;
};
