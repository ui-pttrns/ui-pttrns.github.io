import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('patterns', function() {
    this.route('onboarding');
    this.route('landing');
    this.route('forms');
    this.route('login');
    this.route('signup');
  });
});

export default Router;
